import React, { useState } from "react";
import AdminNavBar from "./DashboardNav";
import Application from "./Application";
import DashboardView from "./DashboardView";
import Users from "./Users";
import ViewBlur from "./ViewBlur";
import DashboardNav from "./DashboardNav";
import { useParams } from "react-router-dom";
import { ProjectManagement } from "./ProjectManagement";


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
          id === "ProjectManagement" ? <ProjectManagement
          //  setIsApplicationDetailsOpen={setIsApplicationDetailsOpen} setIsRating={setIsRating}
          // setIsRejectedFeed={setIsRejectedFeed} isRejectedFeed={isRejectedFeed} isRating={isRating}
          /> : <></>
        }
    </div>
  );
};

export default Dashboard;
