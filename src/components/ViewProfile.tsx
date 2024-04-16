import React, { useEffect, useState } from "react";
import ic_round_close from "../assets/ic_round_close.png";
import Group7334 from "../assets/Group7334.png";

import userIcon from "../assets/userIcon.png";
import "../styles/ViewProfile.css";
import { LogInLogOutComp } from "./Login";

type Props = {
  setShowProfile: (message: boolean) => void;
};

const ViewProfile: React.FC<Props> = ({ setShowProfile }: Props) => {
  const [isDashboard, setIsDashboard] = useState(false);
  const handleCancel = () => {
    setShowProfile(false);
  };
  useEffect(() => {
    window.location.pathname === "/dashboard" && setIsDashboard(true);
  }, []);

  return (
    <div
      className="profileContainer"
      style={isDashboard ? { left: "80.4%" } : { left: "68.6%" }}
    >
      <div className="profileDiv">
        <span className="cancelContainer">
          <img
            src={ic_round_close}
            alt="cancel"
            className="profileViewCancel"
            onClick={handleCancel}
          />
        </span>
        <span className="emailSpan">
          {localStorage.getItem("username".toString())}
        </span>
        <div className="profilePicDiv">
          <div className="profileGroup">
            <img src={Group7334} alt="profilePic" className="profileGroupImg" />
          </div>
          <div className="profileNameContainer">
            <span className="profileName">
              {localStorage.getItem("fullName")?.toString()}
            </span>
          </div>
        </div>
        <div className="profilePicDiv2">
          <a href={`/profile`} style={{ textDecoration: "none" }}>
            <button className="btn1">
              <div className="Statelayer">
                <span className="iconBox">
                  <img src={userIcon} alt="userIcon" className="icon" />
                </span>
                <label htmlFor="text" className="IblViewProfile">
                  View Profile
                </label>
              </div>
            </button>
          </a>
          <LogInLogOutComp />
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
