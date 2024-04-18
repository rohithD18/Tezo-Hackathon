import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/dashboard/DashboardNavBar.css";
import { userEmail } from "../../services/Profile";
import category22 from "../../assets/category22.png";
import Users from "../../assets/Users.png";
import square3 from "../../assets/square3.png";
import document_code_2 from "../../assets/document_code_2.png";
import calendar from "../../assets/calendar.png";
import { useNavigate, useParams } from "react-router-dom";
import { AllUsers } from "../../services/HackathonData";
const DashboardNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState<string>("");

  useEffect(() => {
    const path = location.pathname.split("/")[2]; // Get the route path after "/dashboard/"
    setActiveButton(path || "Dashboard"); // Set activeButton to path if it exists, otherwise default to "Dashboard"
  }, [location.pathname]);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const [isAdmin,setIsAdmin] = useState<boolean>(false);
  const dashboardArray = [
    { Name: "", SVG: <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={!activeButton ? "activeSVG" : ""}
  >
    <path
      d="M4.1665 8.33268H5.83317C7.49984 8.33268 8.33317 7.49935 8.33317 5.83268V4.16602C8.33317 2.49935 7.49984 1.66602 5.83317 1.66602H4.1665C2.49984 1.66602 1.6665 2.49935 1.6665 4.16602V5.83268C1.6665 7.49935 2.49984 8.33268 4.1665 8.33268Z"
      stroke="#B4B4B4"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.1665 8.33268H15.8332C17.4998 8.33268 18.3332 7.49935 18.3332 5.83268V4.16602C18.3332 2.49935 17.4998 1.66602 15.8332 1.66602H14.1665C12.4998 1.66602 11.6665 2.49935 11.6665 4.16602V5.83268C11.6665 7.49935 12.4998 8.33268 14.1665 8.33268Z"
      stroke="#B4B4B4"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.1665 18.3327H15.8332C17.4998 18.3327 18.3332 17.4993 18.3332 15.8327V14.166C18.3332 12.4993 17.4998 11.666 15.8332 11.666H14.1665C12.4998 11.666 11.6665 12.4993 11.6665 14.166V15.8327C11.6665 17.4993 12.4998 18.3327 14.1665 18.3327Z"
      stroke="#B4B4B4"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.1665 18.3327H5.83317C7.49984 18.3327 8.33317 17.4993 8.33317 15.8327V14.166C8.33317 12.4993 7.49984 11.666 5.83317 11.666H4.1665C2.49984 11.666 1.6665 12.4993 1.6665 14.166V15.8327C1.6665 17.4993 2.49984 18.3327 4.1665 18.3327Z"
      stroke="#B4B4B4"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>, showAdmin: true },
    { Name: "UserManagement", SVG: <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={activeButton === "UserManagement" ? "activeSVG" : ""}
  >
    <path
      d="M14.9999 5.96602C14.9499 5.95769 14.8916 5.95769 14.8416 5.96602C13.6916 5.92435 12.7749 4.98268 12.7749 3.81602C12.7749 2.62435 13.7332 1.66602 14.9249 1.66602C16.1166 1.66602 17.0749 2.63268 17.0749 3.81602C17.0666 4.98268 16.1499 5.92435 14.9999 5.96602Z"
      stroke="#B4B4B4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.1417 12.0328C15.2834 12.2245 16.5417 12.0245 17.425 11.4328C18.6 10.6495 18.6 9.36615 17.425 8.58282C16.5334 7.99115 15.2584 7.79115 14.1167 7.99115"
      stroke="#B4B4B4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.97539 5.96602C5.02539 5.95769 5.08372 5.95769 5.13372 5.96602C6.28372 5.92435 7.20039 4.98268 7.20039 3.81602C7.20039 2.62435 6.24206 1.66602 5.05039 1.66602C3.85873 1.66602 2.90039 2.63268 2.90039 3.81602C2.90872 4.98268 3.82539 5.92435 4.97539 5.96602Z"
      stroke="#B4B4B4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.83353 12.0328C4.69186 12.2245 3.43353 12.0245 2.5502 11.4328C1.3752 10.6495 1.3752 9.36615 2.5502 8.58282C3.44186 7.99115 4.71686 7.79115 5.85853 7.99115"
      stroke="#B4B4B4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.9999 12.1926C9.9499 12.1842 9.89157 12.1842 9.84157 12.1926C8.69157 12.1509 7.7749 11.2092 7.7749 10.0426C7.7749 8.85091 8.73323 7.89258 9.9249 7.89258C11.1166 7.89258 12.0749 8.85925 12.0749 10.0426C12.0666 11.2092 11.1499 12.1592 9.9999 12.1926Z"
      stroke="#B4B4B4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5751 14.8168C6.4001 15.6001 6.4001 16.8835 7.5751 17.6668C8.90843 18.5585 11.0918 18.5585 12.4251 17.6668C13.6001 16.8835 13.6001 15.6001 12.4251 14.8168C11.1001 13.9335 8.90843 13.9335 7.5751 14.8168Z"
      stroke="#B4B4B4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>, showAdmin: isAdmin },
    { Name: "Applications", SVG:  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={activeButton === "Applications" ? "activeSVG" : ""}
  >
    <path
      d="M9.99984 14.1667V16.15C9.99984 17.7083 9.37484 18.3333 7.80817 18.3333H3.84984C2.2915 18.3333 1.6665 17.7083 1.6665 16.15V12.1917C1.6665 10.625 2.2915 10 3.84984 10H5.83317V11.975C5.83317 13.5417 6.45817 14.1667 8.0165 14.1667H9.99984Z"
      stroke="#B4B4B4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.1668 10.0007V11.9757C14.1668 13.5423 13.5418 14.1673 11.9752 14.1673H8.01683C6.4585 14.1673 5.8335 13.5423 5.8335 11.9757V8.01732C5.8335 6.45898 6.4585 5.83398 8.01683 5.83398H10.0002V7.80898C10.0002 9.37565 10.6252 10.0007 12.1835 10.0007H14.1668Z"
      stroke="#B4B4B4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.3333 3.84935V7.80768C18.3333 9.37435 17.7083 9.99935 16.1417 9.99935H12.1833C10.625 9.99935 10 9.37435 10 7.80768V3.84935C10 2.29102 10.625 1.66602 12.1833 1.66602H16.1417C17.7083 1.66602 18.3333 2.29102 18.3333 3.84935Z"
      stroke="#B4B4B4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>, showAdmin: true },
    { Name: "ProjectManagement", SVG: <svg
    className={activeButton === "ProjectManagement" ? "activeSVG" : ""}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.16667 18.3327H13.3333C16.25 18.3327 17.5 16.666 17.5 14.166V5.83268C17.5 3.33268 16.25 1.66602 13.3333 1.66602H6.66667C3.75 1.66602 2.5 3.33268 2.5 5.83268V11.666"
      stroke="#B4B4B4"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.0835 3.75V5.41667C12.0835 6.33333 12.8335 7.08333 13.7502 7.08333H15.4168"
      stroke="#B4B4B4"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.33317 14.166L1.6665 15.8327L3.33317 17.4993"
      stroke="#B4B4B4"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.8335 14.166L7.50016 15.8327L5.8335 17.4993"
      stroke="#292D32"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>, showAdmin: isAdmin },
    { Name: "EventsManagement", SVG:  <svg
    className={activeButton === "EventsManagement" ? "activeSVG" : ""}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.6665 1.66602V4.16602"
      stroke="#B4B4B4"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3335 1.66602V4.16602"
      stroke="#B4B4B4"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.9165 7.57422H17.0832"
      stroke="#B4B4B4"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 7.08268V14.166C17.5 16.666 16.25 18.3327 13.3333 18.3327H6.66667C3.75 18.3327 2.5 16.666 2.5 14.166V7.08268C2.5 4.58268 3.75 2.91602 6.66667 2.91602H13.3333C16.25 2.91602 17.5 4.58268 17.5 7.08268Z"
      stroke="#B4B4B4"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.0791 11.4167H13.0866"
      stroke="#B4B4B4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.0791 13.9167H13.0866"
      stroke="#B4B4B4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.99607 11.4167H10.0036"
      stroke="#B4B4B4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.99607 13.9167H10.0036"
      stroke="#B4B4B4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.91209 11.4167H6.91957"
      stroke="#B4B4B4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.91209 13.9167H6.91957"
      stroke="#B4B4B4"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>, showAdmin: isAdmin }
  ];
useEffect(()=>{
const count=AllUsers.filter(obj => obj.Role === "Admin" && obj.Email===userEmail);
count.length && setIsAdmin(true)
  
})
  return (
    <div className="navContainer">
{dashboardArray.map((object, index) => (
  object.showAdmin ===true &&
      <button
        key={index}
        className={`btnLabel ${ activeButton === object.Name  ? "activeNav" : ""}`}
        onClick={() => handleButtonClick(object.Name)}
      >
        {object.SVG}
        {object.Name==""?"Dashboard":object.Name}
      </button>
    ))}
    </div>
  );
};

export default DashboardNav;
