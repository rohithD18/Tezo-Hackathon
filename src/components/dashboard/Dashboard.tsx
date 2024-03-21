import React, { useState } from "react";
import AdminNavBar from "./DashboardNav";
import Application from "./Application";
import Users from "./Users";
import ViewBlur from "./ViewBlur";
import DashboardNav from "./DashboardNav";

const Dashboard = () => {
  const [isApplication, setIsApplication] = useState(false);
  const [isApplicationDetailsOpen, setIsApplicationDetailsOpen] =
    useState(false);

  //setting state for rating pop up
  const [isRating, setIsRating] = useState(false);
  const [isRejectedFeed, setIsRejectedFeed] = useState(false);
  return (
    <div className="adminHomeDiv">
   <DashboardNav  setIsApplication={setIsApplication}/>
    </div>
  );
};

export default Dashboard;
