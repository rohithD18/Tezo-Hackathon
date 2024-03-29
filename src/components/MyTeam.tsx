import React, { useState } from "react";
import "../styles/MyTeam.css";
import { teamMembersArray } from "../components/TeamMembers";
import SubNavBar from "./SubNavBar";
import AllTeams from "./AllTeams";
const MyTeam = () => {
  const [showAll, setShowAll] = useState(true);
  return (
    <div className="root1">
      <SubNavBar setShowAll={setShowAll} />
      <div className="row">
        {showAll ? (
          <div>
            <AllTeams />
          </div>
        ) : (
          teamMembersArray.map((item: any, index: any) => (
            <div className="cardStyling  col-sm-4 mb-3" key={index}>
              <img
                src={item.profileUrl}
                width={64}
                height={64}
                className="imgStyling"
                alt="profile"
              ></img>
              <div className="memberDetails">
                <label className="name">{item.name}</label>
                <label className="emailStyling">{item.email}</label>
                <label className="empIdStyling">
                  Emp. ID {item.employeeId}
                </label>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyTeam;
