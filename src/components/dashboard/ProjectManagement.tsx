import React, { useEffect, useState } from "react";
import { DisplayCount } from "./DisplayCount";
import filterIcon from "../../assets/FilterIcon.png";
import InputSearch from "../InputSearch";
import image from "../../assets/image.png";
import PaginationSection from "../pagination/PaginationSection";
import "../../styles/dashboard/ProjectManagement.css";
import { Projects } from "../../services/ProjectManagementEvents";
import { IProject } from "../../Interfaces";
import ApplicationDetails from "./ApplicationDetails";
import DashboardNav from "./DashboardNav";
import ViewBlur from "./ViewBlur";

export const ProjectManagement: React.FC = () => {
  const [isProjectManagement, setIsProjectManagement] =
    useState<boolean>(false);
  const [querySearch, setQuerySearch] = useState<string>("");
  const [isRating, setIsRating] = useState<boolean>(false);
  const [isRejectedFeed, setIsRejectedFeed] = useState<boolean>(false);

  const [appliDetailsData, setAppliDetailsData] = useState<IProject>(
    Projects[0]
  );
  const sortDate = () => {
    const sortedData = [...currentData].sort(
      (a, b) =>
        new Date(a.SubmissionDate).getTime() -
        new Date(b.SubmissionDate).getTime()
    );
    setCurrentData(sortedData);
  };

  const handleAppliDetailsData = (data: IProject) => {
    setAppliDetailsData(data);
    setIsProjectManagement(true);
  };
  const [currentData, setCurrentData] = useState<IProject[]>([]);
  console.log(currentData);
  useEffect(() => {
    querySearch &&
      setCurrentData(
        Projects.filter((item) =>
          item.TeamName.toLocaleLowerCase().includes(
            querySearch.toLocaleLowerCase()
          )
        )
      );
  }, [querySearch]);
  return (
    <>
      <DashboardNav />
      <div className="projectManagement">
        <DisplayCount />
        <div className="projectManagementData">
          <div className="projectHeader">
            <p>Project Management</p>
            <InputSearch
              setQuerySearch={setQuerySearch}
              currentScreen={"ProjectManagment"}
            />
          </div>
          <table className="table table-borderless projectData">
            <thead>
              <tr className="headerTable">
                <th scope="col" className="colTeamName">
                  Team Name
                </th>
                <th scope="col" className="colTeamDescripition">
                  Description
                </th>
                <th scope="col" className="colSubmit">
                  Submitted on{" "}
                  <span onClick={sortDate}>
                    <img src={filterIcon} alt="FilterIcon" />
                  </span>
                </th>
              </tr>
            </thead>

            <tbody className="dataTable">
              {currentData &&
                currentData.map((record) => (
                  <tr
                    key={record.id}
                    className="tableRowDataa"
                    onClick={() => handleAppliDetailsData(record)}
                  >
                    <td>
                      <img src={image} alt="teamPic" />
                      {record.TeamName}
                    </td>
                    <td className="recordDescription">{record.descripition}</td>
                    <td>{record.SubmissionDate}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div>
          <div className="userPagination">
            <PaginationSection
              setCurrentItem={setCurrentData}
              data={Projects}
              screen=""
            />
          </div>
          {isProjectManagement && (
            <ApplicationDetails
              isProjectManagement={isProjectManagement}
              setIsApplicationDetails={setIsProjectManagement}
              appliDetailsData={appliDetailsData}
              setIsRating={setIsRating}
              setIsRejectedFeed={setIsRejectedFeed}
            />
          )}
        </div>
        {(isRejectedFeed || isRating || isProjectManagement) && (
          <ViewBlur
            isRating={isRating}
            isRejectedFeed={isRejectedFeed}
            setIsRejectedFeed={setIsRejectedFeed}
            setIsRating={setIsRating}
          />
        )}
      </div>
    </>
  );
};
