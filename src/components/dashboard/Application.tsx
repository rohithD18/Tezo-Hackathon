/* eslint-disable */
import React, { useContext, useEffect, useState } from "react";
import "../../styles/dashboard/Application.css";
import profile from "../../assets/profile.png";
import clipboard_tick from "../../assets/clipboard_tick.png";
import category from "../../assets/category2.png";

import { ApplicationData, IApplications } from "../../services/Data";

import PaginationSection from "../pagination/PaginationSection";
import ApplicationDetails from "./ApplicationDetails";
import DashboardNav from "./DashboardNav";
import ViewBlur from "./ViewBlur";
import ApplicationTable from "./ApplicationTable";
import DisplayCard from "./DisplayCard";
import HackathonContext from "../../services/Context/HackathonContext";

const Application: React.FC = () => {
  const hackathonContext = useContext(HackathonContext);

  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [isApplicationDetails, setIsApplicationDetails] =
    useState<boolean>(false);
  const [appliDetailsData, setAppliDetailsData] = useState<IApplications>(
    ApplicationData[0]
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
    IApplications[]
  >([]);
  const [displayOnApplication, setDisplayOnApplication] = useState<
    IApplications[]
  >([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredData, setFilteredData] = useState<IApplications[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    const counts = {
      Accepted: 0,
      Rejected: 0,
      Rework: 0,
      Pending: 0,
    };

    ApplicationData.forEach((application) => {
      counts[application.Status as keyof typeof counts]++;
    });

    setStatusCounts(counts);
    setTotal(ApplicationData.length);
    setCurrApplicationData(
      ApplicationData.sort((a, b) => {
        const dateA = new Date(a.SubmissionDate).getTime();
        const dateB = new Date(b.SubmissionDate).getTime();
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      })
    );
  }, [sortOrder]);

  useEffect(() => {
    const filtered = currApplicationData.filter((application: IApplications) =>
      application.TeamName.toLowerCase().includes(searchQuery.toLowerCase())
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
      const filtered = ApplicationData.filter((application) =>
        application.TeamName.toLowerCase().includes(searchQuery.toLowerCase())
      ).sort((a, b) => {
        const dateA = new Date(a.SubmissionDate).getTime();
        const dateB = new Date(b.SubmissionDate).getTime();
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      });
      setCurrApplicationData(filtered);
      hackathonContext.setActivePage(0);
      hackathonContext.setItemOffset(0);
      // console.log(hackathonContext.activePage);
    } else {
      const filtered = ApplicationData.filter(
        (application) => application.Status === status
      ).sort((a, b) => {
        const dateA = new Date(a.SubmissionDate).getTime();
        const dateB = new Date(b.SubmissionDate).getTime();
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
  const handleAppliDetailsData = (data: IApplications) => {
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
        {isApplicationDetails && (
          <ApplicationDetails
            isProjectManagement={false}
            setIsApplicationDetails={setIsApplicationDetails}
            appliDetailsData={appliDetailsData}
            setIsRating={setIsRating}
            setIsRejectedFeed={setIsRejectedFeed}
          />
        )}
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
