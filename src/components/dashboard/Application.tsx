/* eslint-disable */
import React, { useContext, useEffect, useState } from "react";
import "../../styles/dashboard/Application.css";
import profile from "../../assets/profile.png";
import clipboard_tick from "../../assets/clipboard_tick.png";
import category from "../../assets/category2.png";

// import { ApplicationData, IApplications } from "../../services/Data";

import PaginationSection from "../pagination/PaginationSection";
import ApplicationDetails from "./ApplicationDetails";
import DashboardNav from "./DashboardNav";
import ViewBlur from "./ViewBlur";
import ApplicationTable from "./ApplicationTable";
import DisplayCard from "./DisplayCard";
import HackathonContext from "../../services/Context/HackathonContext";
import { getPointOfATeam, getProjects, getTeamById, getTeamMembersByTeam, getUserById } from "../../services/Services";
import { IAllProject, IAllTeams, IPointsTable, IProjectManagement } from "../../services/Interface/HackathonInterface";
import { ProjectStatus, TeamMemberRole } from "../../services/enums";

const Application: React.FC = () => {
  const hackathonContext = useContext(HackathonContext);

  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [isApplicationDetails, setIsApplicationDetails] =
    useState<boolean>(false);
  const [appliDetailsData, setAppliDetailsData] = useState<IProjectManagement>(
  );
  const [total, setTotal] = useState(0);
  const [isRating, setIsRating] = useState<boolean>(false);
  const [isRejectedFeed, setIsRejectedFeed] = useState<boolean>(false);

  const [statusCounts, setStatusCounts] = useState<{
    Accepted: number;
    Rejected: number;
    Rework: number;
    Pending: number;
  }>({
    Accepted: 0,
    Rejected: 0,
    Rework: 0,
    Pending: 0,
  });
  const [currApplicationData, setCurrApplicationData] = useState<
    IProjectManagement[]
  >([]);
  const [displayOnApplication, setDisplayOnApplication] = useState<
    IProjectManagement[]
  >([]);
  const [applicationData, setApplicationData] = useState<
  IProjectManagement[]
>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredData, setFilteredData] = useState<IProjectManagement[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  useEffect(()=>{
    getProjects().then((res: IAllProject[]) => {
      let array: IProjectManagement[] = [];
      let promises = res.map((item: IAllProject, index: number) => {
        return getTeamMembersByTeam(item.teamId).then((teamMembers) => {
          const captain = teamMembers.find((teamMember) => teamMember.role === TeamMemberRole.Captain);
          if (captain) {
            return getUserById(captain.personId).then((captainInfo) => {
              return getTeamById(item.teamId).then((teamDetails: IAllTeams) => {
                return getPointOfATeam(item.teamId).then((res:IPointsTable) => {
                const projectManagement: IProjectManagement = {
                  data: item,
                  captain: captainInfo.name,
                  teamName: teamDetails.teamName,
                  status:item.projectStatus, 
                  isSubmitted:item.submittedDate?true:false,
                  review:res.registrationScore<1?false:true
                };
                console.log(projectManagement, "event");
                array.push(projectManagement);
              });
            });
            });
          }
        });
      },[]);
    
      // Wait for all promises to resolve
      Promise.all(promises).then(() => {
        // After all promises are resolved, update the state with the array
        setApplicationData(array);
        console.log(array);
      });
    });
  },[])
 useEffect(()=>{
setFilteredData(applicationData);
 },[applicationData])
  useEffect(() => {
    const counts = {
      Accepted: 0,
      Rejected: 0,
      Rework: 0,
      Pending: 0,
    };

    // applicationData.forEach((application) => {
    //   counts[application.status as keyof typeof counts]++;
    // });

    setStatusCounts(counts);
    setTotal(applicationData.length);
    setCurrApplicationData(
      applicationData.sort((a, b) => {
        const dateA = new Date(a.data.projectRegisteredDate).getTime();
        const dateB = new Date(b.data.projectRegisteredDate).getTime();
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      })
    );
  }, [sortOrder]);

  useEffect(() => {
    const filtered = currApplicationData.filter((application: IProjectManagement) =>
      application.teamName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [currApplicationData, searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    handleFilterClick(activeFilter);
  }, [sortOrder, activeFilter]);

  //filtering data
  const handleFilterClick = (status: string) => {

    setActiveFilter(status);
    if (status === "All") {
      const filtered = applicationData.filter((application) =>
        application.teamName.toLowerCase().includes(searchQuery.toLowerCase())
      ).sort((a, b) => {
        const dateA = new Date(a.data.projectRegisteredDate).getTime();
        const dateB = new Date(b.data.projectRegisteredDate).getTime();
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      });
      setCurrApplicationData(filtered);
      hackathonContext.setActivePage(0);
      hackathonContext.setItemOffset(0);
      // console.log(hackathonContext.activePage);
    } else {
      const filtered = applicationData.filter(
        (application) => application.status ===3
      ).sort((a, b) => {
        const dateA = new Date(a.data.projectRegisteredDate).getTime();
        const dateB = new Date(b.data.projectRegisteredDate).getTime();
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      });
      setCurrApplicationData(filtered);
      hackathonContext.setActivePage(0);
      hackathonContext.setItemOffset(0);
    }
  };

  const cardData = [
    { title: "All", image: profile, count: total },
    { title: "Pending", image: category, count: statusCounts.Pending },
    { title: "Accepted", image: clipboard_tick, count: statusCounts.Accepted },
    { title: "Rejected", image: clipboard_tick, count: statusCounts.Rejected },
    {
      title: "Rework",
      image: clipboard_tick,
      count: statusCounts.Rework,
    },
  ];
  const handleAppliDetailsData = (data: IProjectManagement) => {
    setIsApplicationDetails(true);
    setAppliDetailsData(data);
  };

  const [userRole] = useState<string>("admin");

  const renderFilterButtons = () => {
    const filterButtons = [{ title: "All", status: "All" }];

    if (userRole === "admin") {
      filterButtons.push(
        { title: "Pending", status: "Pending" },
        { title: "Accepted", status: "Accepted" },
        { title: "Rejected", status: "Rejected" }
      );
    }

    return filterButtons.map((button) => (
      <button
        key={button.status}
        className={`btn${button.title} ${
          activeFilter === button.status ? "hovered" : ""
        }`}
        onClick={() => handleFilterClick(button.status)}
      >
        {button.title}
      </button>
    ));
  };

  return (
    <>
      <div className="ApplicationScreen">
        <DisplayCard cardData={cardData} />
        <div className="tableContainerr">
          <div className="tableTopContainerr">
            <span className="tableTitlee">Applications</span>
            <div className="searchbox">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
              <input
                type="search"
                name=""
                className="searchInput"
                placeholder="Search by Team Name"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          <div className="displayTable">
            <div className="filterButtonContainer">{renderFilterButtons()}</div>
            <ApplicationTable
              displayOnApplication={displayOnApplication}
              handleApplicationDetailsData={handleAppliDetailsData}
              userRole={userRole}
              setSortOrderState={setSortOrder}
            />
          </div>
        </div>
        {/* {isApplicationDetails && (
          <ApplicationDetails
            isProjectManagement={false}
            setIsApplicationDetails={setIsApplicationDetails}
            appliDetailsData={appliDetailsData}
            setIsRating={setIsRating}
            setIsRejectedFeed={setIsRejectedFeed}
          />
        )} */}
        <div className="PaginationContainer">
          <PaginationSection
            setCurrentItem={setDisplayOnApplication}
            data={filteredData}
            screen="application"
          />
        </div>
      </div>
      {(isRating || isRejectedFeed || isApplicationDetails) && (
        <ViewBlur
          isRating={isRating}
          isRejectedFeed={isRejectedFeed}
          setIsRejectedFeed={setIsRejectedFeed}
          setIsRating={setIsRating}
        />
      )}
    </>
  );
};

export default Application;
