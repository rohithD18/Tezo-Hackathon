import React, { useState } from "react";
import AdminNavBar from "./DashboardNav";
import Application from "./Application";
import DashboardView from "./DashboardView";
import ViewBlur from "./ViewBlur";
import DashboardNav from "./DashboardNav";
import { useParams } from "react-router-dom";
import Usermana from "./Usermana";

const Dashboard:React.FC = () => {
  const {id } = useParams();
  const [isApplication, setIsApplication] = useState(false);
  const [isApplicationDetailsOpen, setIsApplicationDetailsOpen] =
    useState(false);
    console.log(id);
    

  //setting state for rating pop up
  // const [isRating, setIsRating] = useState(false);
  // const [isRejectedFeed, setIsRejectedFeed] = useState(false);
  return (
    <div className="adminHomeDiv">
      {
        !id && <DashboardNav />
      }
        {id === "Applications" && (
          <Application />
        )}
        {
          id === "UserManagement" ? <Usermana /> :<></>
        }
    </div>
  );
};

export default Dashboard;
