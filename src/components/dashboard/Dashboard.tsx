import React, { useState } from "react";
import AdminNavBar from "./DashboardNav";
import Application from "./Application";
import ViewBlur from "./ViewBlur";

const Dashboard = () => {
  const [isApplication, setIsApplication] = useState(false);
  const [isApplicationDetailsOpen, setIsApplicationDetailsOpen] =
    useState(false);

  return (
    <div className="adminHomeDiv">
      <div>
        {isApplicationDetailsOpen && <ViewBlur />}
        <AdminNavBar setIsApplication={setIsApplication} />
      </div>
      <div>
        {isApplication && (
          <Application
            setIsApplicationDetailsOpen={setIsApplicationDetailsOpen}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
