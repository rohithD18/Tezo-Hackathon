import React, { useState } from "react";
import "../../styles/dashboard/AdminNavBar.css";
import category from "../../assets/category.png";
import Users from "../../assets/Users.png";
import square3 from "../../assets/square3.png";
import document_code_2 from "../../assets/document_code_2.png";
import calendar from "../../assets/calendar.png";
// import { useNavigate } from "react-router-dom";

type Props = {
  setIsApplication: any;
};
const DashboardNav: React.FC<Props> = (props: Props) => {
  const { setIsApplication } = props;

  const handleApplicationClick = () => {
    setIsApplication(true);
    // navigate("/admin/application");
  };
  const handleDashboard = () => {
    setIsApplication(false);
  };
  return (
    <div className="navContainer">
      <div className="navChildContainer">
        <div className="navContainer3">
          <div className="dashboard" onClick={handleDashboard}>
            <div className="dashboard1">
              <img src={category} alt="category" className="category" />
              <span className="dashboardtext">Dashboard</span>
            </div>
          </div>
          <div className="userManagment">
            <div className="userManagment1">
              <img src={Users} alt="users" className="userIcon" />
              <span className="userText">User Management</span>
            </div>
          </div>
          <div className="Application" onClick={handleApplicationClick}>
            <div className="Application1">
              <img src={square3} alt="users" className="userIcon" />
              <span className="userText">Applications</span>
            </div>
          </div>
          <div className="Application" onClick={handleApplicationClick}>
            <div className="Application1">
              <img src={document_code_2} alt="users" className="userIcon" />
              <span className="userText">Project Management</span>
            </div>
          </div>
          <div className="Application" onClick={handleApplicationClick}>
            <div className="Application1">
              <img src={calendar} alt="users" className="userIcon" />
              <span className="userText">Events Management</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
