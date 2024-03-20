import React, { useState } from "react";
import AdminNavBar from "./DashboardNav";
import Application from "./Application";
import DashboardView from "./DashboardView";

const Dashboard:React.FC = () => {
  const [isApplication, setIsApplication] = useState(false);
  return (
    <div className="adminHomeDiv">
      <div>
        <AdminNavBar setIsApplication={setIsApplication} />
      </div>
      <div style={{width:"100%"}}>{!isApplication && <DashboardView />}</div>
      <div>{isApplication && <Application />}</div>
    </div>
  );
};

export default Dashboard;
