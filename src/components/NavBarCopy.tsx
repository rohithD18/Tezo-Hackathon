import "../styles/NavBar.css";
import logo from "../assets/Logo.png";
import bellIcon from "../assets/bellIcon.png";
import profilepic from "../assets/profilepic.jpg";
import { useEffect, useState } from "react";
import ViewProfile from "./ViewProfile";
// import NextPage from "../services/Profile";
function NavBarCopy() {
  // const [notificationAvailable] = useState<string>("hello");
  const isActive = (path: string): boolean => {
    return window.location.pathname === path;
  };
  const [showProfile, setShowProfile] = useState(false);
  const [userName, setUserName] = useState(
    localStorage.getItem("username")?.toString()
  );
  const [profileImage] = useState<any>(localStorage.getItem("profileImage"));
  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };
  const [notificationAvailable, setNotificationAvailable] =
    useState<boolean>(false);
  const [notificationCount, setNotificationCount] = useState(0);

  const checkNotifications = () => {
    const notificationsAvailable = true;
    setNotificationAvailable(notificationsAvailable);
    //make condtion here
    const notificationsCount = 5;
    setNotificationCount(notificationsCount);
  };
  const [isBellClicked, setIsBellClicked] = useState<boolean>(false);
  const handleBellClick = () => {
    setIsBellClicked(!isBellClicked);
  };
  useEffect(() => {
    checkNotifications();
  }, [notificationAvailable]);

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
            <div className="col-3">
              {/* <div
                className={`iconDivStyling ${
                  isBellClicked && notificationAvailable ? "clicked" : ""
                }`}
                onClick={handleBellClick}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    paddingBottom: 3,
                    cursor: "pointer",
                    transform: isBellClicked ? "rotate(19deg)" : "rotate(0deg)",
                    fill:isBellClicked ? "white":"",
                  }}
                >
                  <path
                    d="M9.35395 21C10.0591 21.6224 10.9853 22 11.9998 22C13.0142 22 13.9405 21.6224 14.6456 21M17.9998 8C17.9998 6.4087 17.3676 4.88258 16.2424 3.75736C15.1172 2.63214 13.5911 2 11.9998 2C10.4085 2 8.88235 2.63214 7.75713 3.75736C6.63192 4.88258 5.99977 6.4087 5.99977 8C5.99977 11.0902 5.22024 13.206 4.34944 14.6054C3.6149 15.7859 3.24763 16.3761 3.2611 16.5408C3.27601 16.7231 3.31463 16.7926 3.46155 16.9016C3.59423 17 4.19237 17 5.38863 17H18.6109C19.8072 17 20.4053 17 20.538 16.9016C20.6849 16.7926 20.7235 16.7231 20.7384 16.5408C20.7519 16.3761 20.3846 15.7859 19.6501 14.6054C18.7793 13.206 17.9998 11.0902 17.9998 8Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {notificationAvailable && (
                  <div className="notificationCountCircle">
                    {notificationCount}
                  </div>
                )}
              </div> */}
              <div
                className={`iconDivStyling ${
                  isBellClicked && notificationAvailable ? "clicked" : ""
                }`}
                onClick={handleBellClick}
                style={{ fontSize: isBellClicked ? "26px" : "24px" }} // Increase font size when clicked
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={isBellClicked ? "white" : "currentColor"} // Change fill color to white when clicked
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    paddingBottom: 3,
                    cursor: "pointer",
                    transform: isBellClicked ? "rotate(10deg)" : "rotate(0deg)",
                  }}
                >
                  <path
                    d="M9.35395 21C10.0591 21.6224 10.9853 22 11.9998 22C13.0142 22 13.9405 21.6224 14.6456 21M17.9998 8C17.9998 6.4087 17.3676 4.88258 16.2424 3.75736C15.1172 2.63214 13.5911 2 11.9998 2C10.4085 2 8.88235 2.63214 7.75713 3.75736C6.63192 4.88258 5.99977 6.4087 5.99977 8C5.99977 11.0902 5.22024 13.206 4.34944 14.6054C3.6149 15.7859 3.24763 16.3761 3.2611 16.5408C3.27601 16.7231 3.31463 16.7926 3.46155 16.9016C3.59423 17 4.19237 17 5.38863 17H18.6109C19.8072 17 20.4053 17 20.538 16.9016C20.6849 16.7926 20.7235 16.7231 20.7384 16.5408C20.7519 16.3761 20.3846 15.7859 19.6501 14.6054C18.7793 13.206 17.9998 11.0902 17.9998 8Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
                {notificationAvailable && (
                  <div className="notificationCountCircle">
                    {notificationCount}
                  </div>
                )}
              </div>

              <div
                className={`navProfileContainer ${
                  showProfile ? "profileActiveDetails" : ""
                }`}
                onClick={handleProfileClick}
              >
                <img
                  src={
                    "https://s3-alpha-sig.figma.com/img/9902/5026/ef545fce7a758188585b742e3d5aba25?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fEwFrsdK9jOHRGmMAKaa~pfqLETLTsLwzeqEV5NuQdR2~IjRG2cmUwXbwoK5P4iRQvWh993x5bJdRBA91KAKdEwE8U4e5c0dl4qhwUUoXbzVNGp8iKAmxxuMDUEAV538Fwl2bNq7gVsg5lBznWJhNHTl99W-i-OTqcjH6koweJLm2mw3yNm3c5rMDjhIzCGgOwLl7xWLIqZhtdAM~4Zu4NuzVzR8hIX6Z0hF~C~GH~EnxMY4uOsDEAVX4Wf0lxUwdq4G9Wqut7fZ11ZQiQysx7qcci6odULRTIDjEgRPBSP8qC2ARxCE3OdQTMvK538fYnvEgZovP5nMycfFeffY2Q__"
                  }
                  width="40"
                  height="40"
                  className="profile"
                  alt="pic"
                />

                <div className="nameStyling">
                  <span className="fullName">
                    {localStorage.getItem("fullName")?.toString()}
                  </span>
                  <br />
                  <span className="teamStyling">Team1</span>
                </div>
              </div>
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
