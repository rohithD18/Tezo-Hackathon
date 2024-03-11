import '../styles/NavBar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/Logo.png'
import profilepic from '../assets/profilepic.jpg'
import { useState } from 'react';
function NavBarCopy() {
  const [activeItem, setActiveItem] = useState<null|string>();
  
  const handleItemClick = (itemName:string) => {
    setActiveItem(itemName);
  };
  return (
    <>
      <div className="container-fluid custom-navbar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-1">
              <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
            </div>
            <div className="col-8">
              <ul className="nav">
                <li className="nav-item">
                  <a className={`nav-link navLinkItem ${activeItem === 'Home' ? 'itemActive disable-hover' : ''}`}
        onClick={() => handleItemClick('Home')} href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link navLinkItem ${activeItem === 'schedule' ? 'itemActive disable-hover' : ''}`}
        onClick={() => handleItemClick('schedule')} href="#schedule">Schedule</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link navLinkItem ${activeItem === 'myproject' ? 'itemActive disable-hover' : ''}`}
        onClick={() => handleItemClick('myproject')} href="#myproject">MyProject</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link navLinkItem ${activeItem === 'teams' ? 'itemActive disable-hover' : ''}`}
        onClick={() => handleItemClick('teams')} href="#teams">Teams</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link navLinkItem ${activeItem === 'rules' ? 'itemActive disable-hover' : ''}`}
        onClick={() => handleItemClick('rules')} href="#rules">Rules</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link navLinkItem ${activeItem === 'updates' ? 'itemActive disable-hover' : ''}`}
        onClick={() => handleItemClick('updates')} href="#updates">Updates</a>
                </li>
              </ul>
            </div>
            <div className="col-3 d-flex justify-content-end">
              <div className="row align-items-center">
                <div className="col-3 iconDivStyling">
                  <i className="far fa-bell text-white icon-class"></i>
                </div>
                <div className="col-4">
                  <img src={profilepic} width="38" height="38" className="profile ms-3" alt="Profile" />
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
    </>
    
  );
}

export default NavBarCopy;