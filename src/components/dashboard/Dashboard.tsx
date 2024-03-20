import React, { useState } from "react";
import AdminNavBar from "./DashboardNav";
import Application from "./Application";
import DashboardView from "./DashboardView";
import ViewBlur from "./ViewBlur";

const Dashboard: React.FC = () => {
  const [isApplication, setIsApplication] = useState(false);
  const [isApplicationDetailsOpen, setIsApplicationDetailsOpen] =
    useState(false);

  //setting state for rating pop up
  const [isRating, setIsRating] = useState(false);
  const [isRejectedFeed, setIsRejectedFeed] = useState(false);
  return (
    <div className="adminHomeDiv">
      <div>
        {isApplicationDetailsOpen && (
          <ViewBlur
            isRating={isRating}
            setIsApplicationDetailsOpen={setIsApplicationDetailsOpen}
            isRejectedFeed={isRejectedFeed}
          />
        )}
        <AdminNavBar setIsApplication={setIsApplication} />
      </div>
      <div style={{ width: "100%" }}>{!isApplication && <DashboardView />}</div>
      <div>
        {isApplication && (
          <Application
            setIsApplicationDetailsOpen={setIsApplicationDetailsOpen}
            setIsRating={setIsRating}
            setIsRejectedFeed={setIsRejectedFeed}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
