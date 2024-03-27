import React, { useState } from "react";
import Participant from '../../assets/participant.png';
import RegistrationIcon from '../../assets/registrationIcon.png';
import Submittedicon from '../../assets/submittedIcon.png';
import { DisplayCount } from "./DisplayCount";
import filterIcon from '../../assets/FilterIcon.png';
import InputSearch from '../InputSearch'
import image from '../../assets/image.png';
import PaginationSection from "../pagination/PaginationSection";
import '../../styles/dashboard/ProjectManagement.css'
import { projects } from "../../services/ProjectManagementEvents";
import { IProject, IProjectDetail } from "../../Interfaces";
import ApplicationDetails from "./ApplicationDetails";
import { IApplications } from "../../services/Data";
import DashboardNav from "./DashboardNav";
import ViewBlur from "./ViewBlur";
// type Props = {
//     setIsRating:any;
//     setIsApplicationDetailsOpen: any;
//     setIsRejectedFeed:any
//     isRejectedFeed:boolean;
//     isRating:boolean
//   };

export const ProjectManagement:React.FC=()=>{
  const [isProjectManagementDetailsOpen, setIsProjectManagementDetailsOpen] =useState<boolean>(false)
    const [isProjectManagement,setIsProjectManagement]=useState<boolean>(false) ;
    const [isApplicationDetails, setIsApplicationDetails] = useState<boolean>(false);
    const [querySearch,setQuerySearch] = useState<string>("");
    const [isShedule,setShedule]=useState<boolean>(false);
    const [isRating, setIsRating] = useState<boolean>(false);
  const [isRejectedFeed, setIsRejectedFeed] = useState<boolean>(false);
  const [isApplication, setIsApplication] = useState<boolean>(false);
    
  const [appliDetailsData, setAppliDetailsData] = useState<IApplications[]>([]);
  const sortDate=()=>{
    const sortedData = [...currentData].sort((a, b) => new Date(a.submittedOn).getTime() - new Date(b.submittedOn).getTime());
    setCurrentData(sortedData);
  }

    const handleAppliDetailsData = (data: any) => {
        setAppliDetailsData(data);
        setIsApplicationDetails(true);
        setIsProjectManagementDetailsOpen(true);
        setIsProjectManagement(true)
      };
    const [currentData, setCurrentData] = useState<IProject[]>([])
    console.log(currentData)
    return(
      < >
      <DashboardNav />
        <div className="projectManagement">
        <DisplayCount/>  
        <div className="projectManagementData">
            <div className="projectHeader">
                <p>Project Management</p>
                <InputSearch  setQuerySearch={setQuerySearch}/>
            </div>
            <table className="table table-borderless projectData">
  <thead>
    <tr className="headerTable">
      <th scope="col"className="colTeamName" >Team Name</th>
      <th scope="col" className="colTeamDescripition">Description</th>
      <th scope="col"className="colSubmit">Submitted on <span onClick={sortDate}><img src={filterIcon} alt="FilterIcon"/></span></th>
    </tr>
  </thead>
  
  <tbody className="dataTable">
            {currentData&& currentData.map(record => (
              <tr key={record.id} className="tableRowDataa" onClick={() => handleAppliDetailsData(record)}> 
                <td scope="row"><img src={image}/>{record.TeamName}</td>
                <td className="recordDescription">{record.descripition}</td>
                <td>{record.submittedOn}</td>
                
              </tr>
            ))}
        
 </tbody>
</table>
 
 </div>
 <div >
    
 <div className="userPagination"><PaginationSection setCurrentItem={setCurrentData} data={projects} screen=""/></div>
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
 {(isProjectManagementDetailsOpen ||isRating)&& (
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
    )

}