import React, { useState } from "react";
import AdminNavBar from "./DashboardNav";
import Application from "./Application";
import DashboardView from "./DashboardView";
import Users from "./Users";
import ViewBlur from "./ViewBlur";
import DashboardNav from "./DashboardNav";
import { useParams } from "react-router-dom";
import Events from "./Events";


const Dashboard:React.FC = () => {
  const {id } = useParams();
  const [isApplication, setIsApplication] = useState(false);
  const [isApplicationDetailsOpen, setIsApplicationDetailsOpen] =
    useState(false);
    

  //setting state for rating pop up
  // const [isRating, setIsRating] = useState(false);
  // const [isRejectedFeed, setIsRejectedFeed] = useState(false);
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
         {id === "EventsManagement" && <Events />}
    </div>
  );
};

export default Dashboard;
