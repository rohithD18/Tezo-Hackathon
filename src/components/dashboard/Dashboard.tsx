import React, { useState } from "react";
import Application from "./Application";
import DashboardView from "./DashboardView";
import Users from "./Users";
import { useParams } from "react-router-dom";
import { ProjectManagement } from "./ProjectManagement";
import Events from "./Events";


const Dashboard:React.FC = () => {
  const {id } = useParams();
 
    console.log(id);
    

  //setting state for rating pop up
  
 
  return (
    <div className="adminHomeDiv">
      {
        !id && <DashboardView />
      }
        {id === "Applications" && (
          <Application />
        )}
        {
          id === "UserManagement" ? <Users /> :<></>
          
        }

        {
          id === "ProjectManagement" ? <ProjectManagement /> : <></>
        }
         {id === "EventsManagement" && <Events />}
    </div>
  );
};

export default Dashboard;
