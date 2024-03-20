import React, { useState } from "react";
import AdminNavBar from "./DashboardNav";
import Application from "./Application";
import Users from "./Users";

const Dashboard = () => {
  const [isApplication, setIsApplication] = useState(false);
  return (
    <div className="adminHomeDiv">
      <div>
        <AdminNavBar setIsApplication={setIsApplication} />
      </div>
      {/* <div>{isApplication && <Application />}</div> */}
      <Users/>
    </div>
  );
};

export default Dashboard;
