import React, { useContext, useEffect, useState } from "react";
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
import HackathonContext from "../../services/Context/HackathonContext";

import { getPointOfATeam, getProjects, getTeamById } from "../../services/Services";
import { IAllProject, IAllTeams, IPointsTable, IProjectManagement } from "../../services/Interface/HackathonInterface";
 

const ProjectManagement: React.FC = () => {
  const hackathonContext = useContext(HackathonContext);

  const [curSortData, setSortData] = useState<IProjectManagement[]>([]);
  const [sortClick, setSortClick] = useState<boolean>(true);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const [isProjectManagement, setIsProjectManagement] =
    useState<boolean>(false);
  const [querySearch, setQuerySearch] = useState<string>("");
  const [isRating, setIsRating] = useState<boolean>(false);
  const [isRejectedFeed, setIsRejectedFeed] = useState<boolean>(false);
  const [ProjectData,setProjectData]=useState<IProjectManagement[]>([]);
  const [appliDetailsData, setAppliDetailsData] = useState<IProject>(
    Projects[0]
  );
  useEffect(() => {
    getProjects().then((res: IAllProject[]) => {
      let array: IProjectManagement[] = [];
  
      let promises = res.map((item: IAllProject, index: number) => {
         return getPointOfATeam(item.teamId).then((point:IPointsTable) => {
          return getTeamById(item.teamId).then((teamDetails: IAllTeams) => {
            const project: IProjectManagement = {
              data: item,
              review: point.projectSubmissionScore  ? true : false,
              teamName:teamDetails.teamName
            };
            
            array.push(project);
            console.log(point)

          });
        });
        
        
      });
      Promise.all(promises).then(() => {
        // After all promises are resolved, update the state with the array
        setProjectData(array);
        console.log(array);
      });
    });
  }, []);
  
  useEffect(()=>{
    setSortData(ProjectData);
  })
  const sortDate = () => {
    const sortedData = [...curSortData].sort((a, b) => {
      if (sortClick) {
        return (
          new Date(a.data.submittedDate).getTime() -
          new Date(b.data.submittedDate).getTime()
        );
      } else {
        return (
          -new Date(a.data.submittedDate).getTime() +
          new Date(b.data.submittedDate).getTime()
        );
      }
    });

    setSortClick((prevState) => !prevState);
    setSortData(sortedData);
  };
  // useEffect(() => {
  //   handleChange(activeFilter);
  // }, [sortOrder, activeFilter]);
  const handleAppliDetailsData = (data: IProjectManagement) => {
    // setAppliDetailsData(data);
    setIsProjectManagement(true);
  };
  const [currentData, setCurrentData] = useState<IProjectManagement[]>([]);
;
  function handleChange(event: SelectChangeEvent<unknown>): void {
    const value = event.target.value as string;

    if (value === "All") {
      setActiveFilter(value)
      setSortData([...ProjectData]);
      hackathonContext.setActivePage(0);
      hackathonContext.setItemOffset(0);
    } else if (value === "Pending") {
      setActiveFilter(value)
      const sortedData = ProjectData.filter(
        (item) => item.review ==false
      );

      setCurrentData(sortedData);
     
    
      console.log(sortedData,"bjk");
      
      hackathonContext.setActivePage(0);
      hackathonContext.setItemOffset(0);
    } else if (value === "Submit") {
      setActiveFilter(value)
      const sortedData = ProjectData.filter(
        (item) => item.review ===true
      );
      console.log(sortedData,"bjk");
      setCurrentData(sortedData);
     
      hackathonContext.setActivePage(0);
      hackathonContext.setItemOffset(0);
    }
  }

  useEffect(() => {
    querySearch &&
      setCurrentData(
        ProjectData.filter((item) =>
          item.teamName.toLocaleLowerCase().includes(
            querySearch.toLocaleLowerCase()
          )
        )
      );
  }, [querySearch]);
  return (
    <>
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
                currentData.map((record,index) => (
                  <tr
                    key={index}
                    className="tableRowDataa"
                    onClick={() => handleAppliDetailsData(record)}
                  >
                    <td>
                      <img className="capatainImg" src={image} alt="img"/>
                      {record.teamName}
                    </td>
                    <td className="recordDescription">{record.data.description}</td>
                    <td>{record.data.submittedDate !=null && record.data.submittedDate
                    ? record.data.submittedDate.toLocaleString()
                    : "--"}</td>
                    <td>
                      {record.review ? (
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

export default ProjectManagement;
