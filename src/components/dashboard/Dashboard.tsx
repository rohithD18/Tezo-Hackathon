// import React, { useState } from "react";
// import Application from "./Application";
// import DashboardView from "./DashboardView";
// import Users from "./Users";
// import { useParams } from "react-router-dom";
// import { ProjectManagement } from "./ProjectManagement";
// import Events from "./Events";

// const Dashboard: React.FC = () => {
//   const { id } = useParams();

//   return (
//     <div className="adminHomeDiv">
//       {!id && <DashboardView />}
//       {id === "Applications" && <Application />}
//       {id === "UserManagement" ? <Users /> : <></>}

//       {id === "ProjectManagement" ? <ProjectManagement /> : <></>}
//       {id === "EventsManagement" && <Events />}
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardNav from "./DashboardNav";
import DashboardView from "./DashboardView";
import Application from "./Application";
import Users from "./Users";
import ProjectManagement from "./ProjectManagement";
import Events from "./Events";

const Dashboard: React.FC = () => {
  return (
    <div className="adminHomeDiv">
      <DashboardNav />
      <Routes>
        <Route path="/" element={<DashboardView />} />
        <Route path="Applications" element={<Application />} />
        <Route path="UserManagement" element={<Users />} />
        <Route path="ProjectManagement" element={<ProjectManagement />} />
        <Route path="EventsManagement" element={<Events />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
