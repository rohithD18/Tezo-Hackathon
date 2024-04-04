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
  const [curSortData, setSortData] = useState<IProject[]>(Projects);
  const [sortClick, setSortClick] = useState<boolean>(true);

  const [isProjectManagement, setIsProjectManagement] =
    useState<boolean>(false);
  const [querySearch, setQuerySearch] = useState<string>("");
  const [isRating, setIsRating] = useState<boolean>(false);
  const [isRejectedFeed, setIsRejectedFeed] = useState<boolean>(false);

  const [appliDetailsData, setAppliDetailsData] = useState<IProject>(
    Projects[0]
  );
  const sortDate = () => {
    const sortedData = [...curSortData].sort((a, b) => {
      if (sortClick) {
        return (
          new Date(a.SubmissionDate).getTime() - new Date(b.SubmissionDate).getTime()
        );
      } else {
        return (
          -new Date(a.SubmissionDate).getTime() + new Date(b.SubmissionDate).getTime()
        );
      }
    });

    setSortClick((prevState) => !prevState);
    setSortData(sortedData);
  };

  const handleAppliDetailsData = (data: IProject) => {
    setAppliDetailsData(data);
    setIsProjectManagement(true);
  };
  const [currentData, setCurrentData] = useState<IProject[]>([]);
  console.log(currentData);
  function handleChange(event: SelectChangeEvent<unknown>): void {
    const value = event.target.value as string;

    if (value === "All") {
      setSortData([...Projects]);
    } else if (value === "Pending") {
      const sortedData = Projects.filter((item) => item.projectDemoScore === 0);
      setSortData([...sortedData]);
    } else if (value === "Submit") {
      const sortedData = Projects.filter((item) => item.projectDemoScore !== 0);
      setSortData([...sortedData]);
    }
  }

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
                  <MenuItem value="Submit">Completed</MenuItem>
                </Select>
              </FormControl>
              <InputSearch
                currentScreen={"ProjectManagment"}
                setQuerySearch={setQuerySearch}
              />
            </div>
          </div>
          <table className="projectData">
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
                    <td>
                      <img className="capatainImg" src={image} />
                      {record.TeamName}
                    </td>
                    <td className="recordDescription">{record.descripition}</td>
                    <td>{record.SubmissionDate}</td>
                    <td>
                      {record.projectDemoScore != 0 ? (
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
          <div className="userPaginationPM">
            <PaginationSection
              setCurrentItem={setCurrentData}
              data={curSortData}
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
