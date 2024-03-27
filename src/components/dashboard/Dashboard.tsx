import React, { useState } from "react";
import AdminNavBar from "./DashboardNav";
import Application from "./Application";
import DashboardView from "./DashboardView";
import Users from "./Users";
import ViewBlur from "./ViewBlur";
import DashboardNav from "./DashboardNav";
import { useParams } from "react-router-dom";


const Dashboard:React.FC = () => {
  const {id } = useParams();
  // const [isApplication, setIsApplication] = useState<boolean>(false);
  // const [isApplicationDetailsOpen, setIsApplicationDetailsOpen] =
  //   useState<boolean>(false);
    // console.log(id);
    

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
    </div>
  );
};

export default Dashboard;
