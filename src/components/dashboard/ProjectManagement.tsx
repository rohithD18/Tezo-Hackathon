import React, { useState } from "react";
import Participant from "../../assets/participant.png";
import RegistrationIcon from "../../assets/registrationIcon.png";
import Submittedicon from "../../assets/submittedIcon.png";
import { DisplayCount } from "./DisplayCount";
import filterIcon from "../../assets/FilterIcon.png";
import InputSearch from "../InputSearch";
import image from "../../assets/image.png";
import PaginationSection from "../pagination/PaginationSection";
import "../../styles/dashboard/ProjectManagement.css";
import { projects } from "../../services/ProjectManagementEvents";
import { IProject, IProjectDetail } from "../../Interfaces";
import ApplicationDetails from "./ApplicationDetails";
import { IApplications } from "../../services/Data";
import DashboardNav from "./DashboardNav";
import ViewBlur from "./ViewBlur";
import Feedback from "../../assets/Feedback.png";
import Feedback1 from "../../assets/Feedback1.png";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
// type Props = {
//     setIsRating:any;
//     setIsApplicationDetailsOpen: any;
//     setIsRejectedFeed:any
//     isRejectedFeed:boolean;
//     isRating:boolean
//   };

export const ProjectManagement: React.FC = () => {
  const [curSortData, setSortData] = useState<IProject[]>(projects);
  const [sortClick, setSortClick] = useState<boolean>(true);
  const [isProjectManagementDetailsOpen, setIsProjectManagementDetailsOpen] =
    useState<boolean>(false);
  const [isProjectManagement, setIsProjectManagement] =
    useState<boolean>(false);
  const [isApplicationDetails, setIsApplicationDetails] =
    useState<boolean>(false);
  const [querySearch, setQuerySearch] = useState<string>("");
  const [isShedule, setShedule] = useState<boolean>(false);
  const [isRating, setIsRating] = useState<boolean>(false);
  const [isRejectedFeed, setIsRejectedFeed] = useState<boolean>(false);
  const [isApplication, setIsApplication] = useState<boolean>(false);

  const [appliDetailsData, setAppliDetailsData] = useState<IApplications[]>([]);
  const sortDate = () => {
    const sortedData = [...curSortData].sort((a, b) => {
      if (sortClick) {
        return (
          new Date(a.submittedOn).getTime() - new Date(b.submittedOn).getTime()
        );
      } else {
        return (
          -new Date(a.submittedOn).getTime() + new Date(b.submittedOn).getTime()
        );
      }
    });

    setSortClick((prevState) => !prevState);
    setSortData(sortedData);
  };

  const handleAppliDetailsData = (data: any) => {
    setIsRating(false);
    setAppliDetailsData(data);
    setIsApplicationDetails(true);
    setIsProjectManagementDetailsOpen(true);
    setIsProjectManagement(true);
  };
  const [currentData, setCurrentData] = useState<IProject[]>([]);
  console.log(currentData);
  function handleChange(event: SelectChangeEvent<unknown>): void {
    const value = event.target.value as string;

    if (value === "All") {
      setSortData([...projects]);
    } else if (value === "Pending") {
      const sortedData = projects.filter((project) => project.score === 0);
      setSortData([...sortedData]);
    } else if (value === "Submit") {
      const sortedData = projects.filter((project) => project.score !== 0);
      setSortData([...sortedData]);
    }
  }

  return (
    < >
      <DashboardNav />
      <div className="projectManagement">
        <DisplayCount />
        <div className="projectManagementData">
          <div className="projectHeader">
            <p>Project Management</p>
            <div className="filterProjectManagement">
              <FormControl className="formControlDropdown">
                <InputLabel
                  className="reviewLabel"
                  id="demo-simple-select-label"
                >
                  Review
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Review"
                  onChange={handleChange}
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="Submit">Submit</MenuItem>
                </Select>
              </FormControl>
              <InputSearch
                currentScreen={"ProjectManagment"}
                setQuerySearch={setQuerySearch}
              />
            </div>
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
                <th scope="col" className="colReview">
                  Review
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
                    <td scope="row">
                      <img className="capatainImg" src={image} />
                      {record.TeamName}
                    </td>
                    <td className="recordDescription">{record.descripition}</td>
                    <td>{record.submittedOn}</td>
                    <td>
                      {record.score != 0 ? (
                        <img
                          src={Feedback}
                          alt="feedback"
                          className="reviewImg"
                        />
                      ) : (
                        <img
                          src={Feedback1}
                          alt="Feedback"
                          className="reviewImg"
                        />
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="userPagination">
            <PaginationSection
              setCurrentItem={setCurrentData}
              data={curSortData}
              screen=""
            />
          </div>
        </div>
        
        <div>
          {isProjectManagementDetailsOpen && (
            <ApplicationDetails
              isProjectManagement={isProjectManagement}
              setIsApplicationDetails={setIsApplicationDetails}
              appliDetailsData={appliDetailsData}
              setIsRating={setIsRating}
              setShedule={setShedule}
              setIsApplicationDetailsOpen={setIsProjectManagementDetailsOpen}
              setIsRejectedFeed={setIsRejectedFeed}
            />
          )}
        </div>
        {isProjectManagementDetailsOpen  && (
          <ViewBlur
            isRating={isRating}
            setIsApplicationDetailsOpen={setIsProjectManagementDetailsOpen}
            isRejectedFeed={isRejectedFeed}
            setIsRejectedFeed={setIsRejectedFeed}
            setIsRating={setIsRating}
            isShedule={isShedule}
            setShedule={setShedule}
          />
        )}
      </div>
    </>
  );
};
