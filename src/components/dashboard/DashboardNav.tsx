import React, { useEffect, useState } from "react";
import "../../styles/dashboard/AdminNavBar.css";
import "../../styles/dashboard/DashboardNavBar.css";
import category22 from "../../assets/category22.png";
import Users from "../../assets/Users.png";
import square3 from "../../assets/square3.png";
import document_code_2 from "../../assets/document_code_2.png";
import calendar from "../../assets/calendar.png";
import {  useNavigate, useParams } from "react-router-dom";


const DashboardNav:React.FC = () => {
  const navigate = useNavigate();
  const {id } = useParams();
  console.log("activeBtn",id);
  
 
  // const { setIsApplication } = props;
  const [activeButton, setActiveButton] = useState<string | undefined>(id);
  // useEffect(() => {
  //   setActiveButton(activeBtn)
  // },)

  const handleButtonClick = (buttonName: string) => {
    // setIsApplication(buttonName === "Applications");
    // setActiveButton(buttonName);
   navigate(`/dashboard/${buttonName}`)
    
    // <Link to="/application"/>
  };

  return (
    <div className="navContainer">
      <button
        className={`dashboard ${!activeButton ? "activeNav" : ""}`}
        onClick={() => handleButtonClick("")}
      >
        <img src={category22} alt="dashboard" className="imgDashboard" />
        Dashboard
      </button>
      <button
        className={`dashboard ${activeButton === "UserManagement" ? "activeNav" : ""}`}
        onClick={() => handleButtonClick("UserManagement")}
      >
        <img src={Users} alt="dashboard" className="imgDashboard" />
        User Management
      </button>
      <button
        className={`dashboard ${activeButton === "Applications" ? "activeNav" : ""}`}
        onClick={() => handleButtonClick("Applications")}
      >
        <img src={square3} alt="dashboard" className="imgDashboard" />
        Applications
      </button>
      <button
        className={`dashboard ${activeButton === "ProjectManagement" ? "activeNav" : ""}`}
        onClick={() => handleButtonClick("ProjectManagement")}
      >
        <img src={document_code_2} alt="dashboard" className="imgDashboard" />
        Project Management
      </button>
      <button
        className={`dashboard ${activeButton === "EventsManagement" ? "activeNav" : ""}`}
        onClick={() => handleButtonClick("EventsManagement")}
      >
        <img src={calendar} alt="dashboard" className="imgDashboard" />
        Events Management
      </button>
    </div>
  );
};

export default DashboardNav;
