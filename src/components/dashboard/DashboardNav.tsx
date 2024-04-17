import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/dashboard/DashboardNavBar.css";

const DashboardNav: React.FC = () => {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState<string>("");

  useEffect(() => {
    const path = location.pathname.split("/")[2]; // Get the route path after "/dashboard/"
    setActiveButton(path || "Dashboard"); // Set activeButton to path if it exists, otherwise default to "Dashboard"
  }, [location.pathname]);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="navContainer">
      <Link
        to="/dashboard"
        className={`btnLabel ${
          activeButton === "Dashboard" ? "activeNav" : ""
        }`}
        onClick={() => handleButtonClick("Dashboard")}
      >
        Dashboard
      </Link>
      <Link
        to="/dashboard/UserManagement"
        className={`btnLabel ${
          activeButton === "UserManagement" ? "activeNav" : ""
        }`}
        onClick={() => handleButtonClick("UserManagement")}
      >
        User Management
      </Link>
      <Link
        to="/dashboard/Applications"
        className={`btnLabel ${
          activeButton === "Applications" ? "activeNav" : ""
        }`}
        onClick={() => handleButtonClick("Applications")}
      >
        Applications
      </Link>
      <Link
        to="/dashboard/ProjectManagement"
        className={`btnLabel ${
          activeButton === "ProjectManagement" ? "activeNav" : ""
        }`}
        onClick={() => handleButtonClick("ProjectManagement")}
      >
        Project Management
      </Link>
      <Link
        to="/dashboard/EventsManagement"
        className={`btnLabel ${
          activeButton === "EventsManagement" ? "activeNav" : ""
        }`}
        onClick={() => handleButtonClick("EventsManagement")}
      >
        Events Management
      </Link>
    </div>
  );
};

export default DashboardNav;
