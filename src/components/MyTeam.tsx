import React, { useState } from "react";
import "../styles/MyTeam.css";
import { teamMembersArray } from "../components/TeamMembers";
import SubNavBar from "./SubNavBar";
import AllTeams from "./AllTeams";
import { useFetchTeamDetails } from "../services/FormServices";
import { ITeamMember } from "../services/Interface/HackathonInterface";
const MyTeam = () => {
  const [showAll, setShowAll] = useState(true);
  const {teamMembersFetch}=useFetchTeamDetails();
  return (
    <div className="root1">
      <SubNavBar setShowAll={setShowAll} />
      <div className="row">
        {showAll ? (
          <div>
            <AllTeams />
          </div>
        ) : (
          teamMembersFetch && teamMembersFetch.map((item: ITeamMember, index: number) => (
            <div className="cardStyling  col-sm-4 mb-3" key={index}>
              <img
                src={item.userData?.profilePicture}
                width={64}
                height={64}
                className="imgStyling"
                alt="profile"
              ></img>
              <div className="memberDetails">
                <label className="name">{item.userData?.name}</label>
                <label className="emailStyling">{item.userData?.email}</label>
                <label className="empIdStyling">
                  Emp. ID {item.userData?.employeeId}
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
