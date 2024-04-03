import "../styles/NavBar.css";
import logo from "../assets/Logo.png";
import bellIcon from "../assets/bellIcon.png";
import profilepic from "../assets/profilepic.jpg";
import { useState } from "react";
import ViewProfile from "./ViewProfile";
function NavBarCopy() {
  const isActive = (path: string): boolean => {
    return window.location.pathname === path;
  };
  const [showProfile, setShowProfile] = useState(false);
  const [userName, setUserName] = useState(
    localStorage.getItem("username")?.toString()
  );
  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };
  return (
    <>
      <div className="container-fluid custom-navbar">
        <div
          className={`${
            isActive("/dashboard") ? "containerDashboard" : "container"
          }`}
        >
          <div className="row align-items-center">
            <div className="col-1">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </div>
            <div className="col-8">
              <ul className="nav">
                <li className="nav-item">
                  <a
                    className={`nav-link navLinkItem ${
                      isActive("/") ? "itemActive disable-hover" : ""
                    }`}
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link navLinkItem ${
                      isActive("/schedule") ? "itemActive disable-hover" : ""
                    }`}
                    href="/schedule"
                  >
                    Schedule
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link navLinkItem ${
                      isActive("/myProject") ? "itemActive disable-hover" : ""
                    }`}
                    href="/myProject"
                  >
                    MyProject
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link navLinkItem ${
                      isActive("/teams") ? "itemActive disable-hover" : ""
                    }`}
                    href="/teams"
                  >
                    Teams
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link navLinkItem ${
                      isActive("/rules") ? "itemActive disable-hover" : ""
                    }`}
                    href="/rules"
                  >
                    Rules
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link navLinkItem ${
                      isActive("/dashboard") ? "itemActive disable-hover " : ""
                    }`}
                    href={`/dashboard`}
                  >
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-3 d-flex justify-content-end">
              <div className="row align-items-center justify-content-end">
                <div className="iconDivStyling">
                  <img
                    src={bellIcon}
                    width={20}
                    height={24}
                    style={{ paddingBottom: 3 }}
                    alt="notificationIcon"
                  />
                </div>
                <div
                  className={`col-3 ${showProfile ? "profileActiveImage" : ""}`}
                  onClick={handleProfileClick}
                >
                  <img
                    src={
                      "https://s3-alpha-sig.figma.com/img/9902/5026/ef545fce7a758188585b742e3d5aba25?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fEwFrsdK9jOHRGmMAKaa~pfqLETLTsLwzeqEV5NuQdR2~IjRG2cmUwXbwoK5P4iRQvWh993x5bJdRBA91KAKdEwE8U4e5c0dl4qhwUUoXbzVNGp8iKAmxxuMDUEAV538Fwl2bNq7gVsg5lBznWJhNHTl99W-i-OTqcjH6koweJLm2mw3yNm3c5rMDjhIzCGgOwLl7xWLIqZhtdAM~4Zu4NuzVzR8hIX6Z0hF~C~GH~EnxMY4uOsDEAVX4Wf0lxUwdq4G9Wqut7fZ11ZQiQysx7qcci6odULRTIDjEgRPBSP8qC2ARxCE3OdQTMvK538fYnvEgZovP5nMycfFeffY2Q__"
                    }
                    width="40"
                    height="40"
                    className="profile"
                    alt="Profile"
                  />
                </div>
                <div
                  className={`col-10 text-start details ${
                    showProfile ? "profileActiveDetails" : ""
                  }`}
                  onClick={handleProfileClick}
                  style={{ float: "right" }} // Added style to float this div to the right
                >
                  <div className="nameStyling">
                    {" "}
                    {localStorage.getItem("fullName")?.toString()}
                    {}
                  </div>
                  <div className="teamStyling">Team1</div>
                </div>
              </div>

              {/* <div className="row align-items-center" >
                <div className=" iconDivStyling">
                  <img
                    src={bellIcon}
                    width={20}
                    height={24}
                    style={{ paddingBottom: 3 }}
                    alt="notificationIcon"
                  ></img>
                </div>
                <div
                  className={`col-3 ${showProfile ? "profileActiveImage" : ""}`}
                  onClick={handleProfileClick}
                >
                  <img
                    src={profilepic}
                    width="40"
                    height="40"
                    className="profile ms-3"
                    alt="Profile"
                  />
                </div>
                <div className={`col-10 text-start details ${showProfile ? 'profileActiveDetails' : ''}`} onClick={handleProfileClick}>
                  <div className="nameStyling"> {localStorage.getItem("fullName")?.toString()}{}</div>
                  <div className="teamStyling">Team1</div>
                </div>
              </div> */}
            </div>
            {showProfile && (
              <ViewProfile
                setShowProfile={setShowProfile}
                setUserName={setUserName}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBarCopy;
