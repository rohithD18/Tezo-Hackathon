import React, { useState } from "react";
import "../../styles/dashboard/AdminNavBar.css";
import category from "../../assets/category.png";
import dropdownIcon from "../../assets/dropdownIcon.png";
import Users from "../../assets/Users.png";
// import { useNavigate } from "react-router-dom";

type Props = {
  setIsApplication: any;
};
const DashboardNav: React.FC<Props> = (props: Props) => {
  const { setIsApplication } = props;

  // const navigate = useNavigate();
  const [istoggle, setIstoggle] = useState(false);
  const handleDropdown = () => {
    setIstoggle(!istoggle);
  };
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
            <div className="dropDownIcon" onClick={handleDropdown}>
              <img
                src={dropdownIcon}
                alt="dropdown"
                className="dropDownImage"
              />
            </div>
          </div>

          {istoggle && (
            <div className="Application" onClick={handleApplicationClick}>
              <div className="Application1">
                <img src={Users} alt="users" className="userIcon" />
                <span className="userText">Applications</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
