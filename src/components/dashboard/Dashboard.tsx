import React, { useState } from "react";
import AdminNavBar from "./DashboardNav";
import Application from "./Application";

const Dashboard = () => {
  const [isApplication, setIsApplication] = useState(false);
  return (
    <div className="adminHomeDiv">
      <div>
        <AdminNavBar setIsApplication={setIsApplication} />
      </div>
      <div>{isApplication && <Application />}</div>
    </div>
  );
};

export default Dashboard;
