import React, { useState } from "react";
import Participant from '../../assets/participant.png';
import RegistrationIcon from '../../assets/registrationIcon.png';
import Submittedicon from '../../assets/submittedIcon.png';
import { DisplayCount } from "./DisplayCount";
import InputSearch from '../InputSearch'
import image from '../../assets/image.png';
import PaginationSection from "../pagination/PaginationSection";
import '../../styles/dashboard/ProjectManagement.css'
import { projects } from "../../services/ProjectManagementEvents";
import { IProject } from "../../Interfaces";
import ApplicationDetails from "./ApplicationDetails";
import { IApplications } from "../../services/Data";
type Props = {
    setIsRating:any;
    setShedule:any;
    setIsApplicationDetailsOpen: any;
    setIsRejectedFeed:any
  };

export const ProjectManagement:React.FC<Props>=(props:Props)=>{
    const [isProjectManagement,setprojectManagement]=useState<boolean>(true) ;
    const [isApplicationDetails, setIsApplicationDetails] = useState(false);
  const [appliDetailsData, setAppliDetailsData] = useState<IApplications[]>([]);

    const handleAppliDetailsData = (data: any) => {
        setAppliDetailsData(data);
        props.setIsApplicationDetailsOpen(true);
        setIsApplicationDetails(true);
      };
    const [currentData, setCurrentData] = useState<IProject[]>([])
    console.log(currentData)
    return(
        <div className="projectManagement">
        <DisplayCount/>  
        <div>
            <div className="projectHeader">
                <p>Project Management</p>
                <InputSearch />
            </div>
            <table className="table table-borderless projectData">
  <thead>
    <tr className="headerTable">
      <th scope="col"className="colTeamName" >Team Name</th>
      <th scope="col" className="colTeamDescripition">Descripition</th>
      <th scope="col"className="colSubmit">Submitted on</th>
      <th scope="col"className="colStatus">Status</th>
    </tr>
  </thead>
  
  <tbody className="dataTable">
            {currentData&& currentData.map(record => (
              <tr key={record.id} className="tableRowDataa" onClick={() => handleAppliDetailsData(record)}> 
                <td scope="row"><img src={image}/>{record.TeamName}</td>
                <td className="recordDescription">{record.description}</td>
                <td>{record.submittedOn}</td>
                <td>{record.Status}</td>
              </tr>
            ))}
        
 </tbody>
</table>
 
 </div>
 <div>
    
 <PaginationSection setCurrentItem={setCurrentData} data={projects} />
         {isApplicationDetails && (
          <ApplicationDetails
          isProjectManagement={isProjectManagement}
            setIsApplicationDetails={setIsApplicationDetails}
            appliDetailsData={appliDetailsData}
            setIsRating={props.setIsRating}
            setShedule={props.setShedule}
            setIsApplicationDetailsOpen={props.setIsApplicationDetailsOpen}
            setIsRejectedFeed={props.setIsRejectedFeed}
           
          />
        )}
 </div>
 </div>
    )

}