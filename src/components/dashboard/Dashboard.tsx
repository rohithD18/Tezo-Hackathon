import React, { useState } from "react";
import AdminNavBar from "./DashboardNav";
import Application from "./Application";
import Users from "./Users";
import ViewBlur from "./ViewBlur";

const Dashboard = () => {
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
      {/* <div>
        {isApplication && (
          <Application
            setIsApplicationDetailsOpen={setIsApplicationDetailsOpen}
            setIsRating={setIsRating}
            setIsRejectedFeed={setIsRejectedFeed}
          />
        )}
      </div> */}
      <Users/>
    </div>
  );
};

export default Dashboard;
