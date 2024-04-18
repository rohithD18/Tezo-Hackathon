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
        <Route path="applications" element={<Application />} />
        <Route path="userManagement" element={<Users />} />
        <Route path="projectManagement" element={<ProjectManagement />} />
        <Route path="eventsManagement" element={<Events />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
