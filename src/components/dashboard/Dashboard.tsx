import React, { useState } from "react";
import AdminNavBar from "./DashboardNav";
import Application from "./Application";
import DashboardView from "./DashboardView";

import { ProjectManagement } from "./ProjectManagement";
import ViewBlur from "./ViewBlur";

const Dashboard:React.FC = () => {
  const [isApplication, setIsApplication] = useState(false);
  const [isApplicationDetailsOpen, setIsApplicationDetailsOpen] =
    useState(false);

  //setting state for rating pop up
  const [isRating, setIsRating] = useState(false);
  const [isRejectedFeed, setIsRejectedFeed] = useState(false);
  const [isShedule,setShedule]=useState(false)
  return (
    <div className="adminHomeDiv">
      <div>
        {isApplicationDetailsOpen && (
          <ViewBlur
          setIsRating={setIsRating}
          isShedule={isShedule}
            isRating={isRating}
            setIsApplicationDetailsOpen={setIsApplicationDetailsOpen}
            isRejectedFeed={isRejectedFeed}
          />
        )}
        <AdminNavBar setIsApplication={setIsApplication} />
      </div>
      
      {/* <div style={{width:"100%"}}>{!isApplication && <DashboardView />}</div> */}
      <div style={{width:"100%"}}>{!isApplication && <ProjectManagement  setIsApplicationDetailsOpen={setIsApplicationDetailsOpen} setIsRating={setIsRating}
            setShedule={setShedule}
            setIsRejectedFeed={setIsRejectedFeed}/>}</div>
      <div>
        {isApplication && (
          <Application
            setIsApplicationDetailsOpen={setIsApplicationDetailsOpen}
            setShedule={setShedule}
            setIsRating={setIsRating}
            setIsRejectedFeed={setIsRejectedFeed}
          />
        )}
      </div>
      <div>
        { isShedule && (
          <ViewBlur
          setIsRating={setIsRating}
          isShedule={isShedule}
            isRating={isRating}
            setIsApplicationDetailsOpen={setIsApplicationDetailsOpen}
            isRejectedFeed={isRejectedFeed}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
