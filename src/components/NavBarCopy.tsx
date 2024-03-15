import "../styles/NavBar.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../assets/hackathonLogo.png";
import profilepic from "../assets/profilepic.jpg";
function NavBarCopy() {
  return (
    <div className="container-fluid custom-navbar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-1">
            <img
              src={logo}
              width="30px"
              height="30px"
              // className="d-inline-block align-top"
              alt="Logo"
            />
          </div>
          <div className="col-8">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link navLinkItem" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navLinkItem" href="/Schedule">
                  Schedule
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navLinkItem" href="/MyProject">
                  MyProject
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navLinkItem" href="/Teams">
                  Teams
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navLinkItem" href="#rules">
                  Rules
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navLinkItem" href="#updates">
                  Updates
                </a>
              </li>
            </ul>
          </div>
          <div className="col-3 d-flex justify-content-end">
            <div className="row align-items-center">
              <div className="col-4 iconDivStyling">
                <i className="fas fa-bell text-white"></i>
              </div>
              <div className="col-4">
                <img
                  src={profilepic}
                  width="38"
                  height="38"
                  className="profile ms-3"
                  alt="Profile"
                />
              </div>
              <div className="col-4 text-start">
                <div className="nameStyling">Venkatesh</div>
                <div className="teamStyling">Team1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBarCopy;
