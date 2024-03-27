import React, { useEffect, useState } from "react";
import "../styles/Profile.css";
import image from "../assets/image.png";
import { Teams } from "../services/Data";
import { ITeamMems, IUsers } from "../Interfaces";
const Profile = () => {
  const Name: string = "Venkatesh";
  const TeamName: string = "Team One";
  const Email: string = "venkatesh.g@gmail.com";
  const [teamName, setTeamName] = useState<string | undefined>();
  const [teamMembers, setTeamMembers] = useState<IUsers[] | undefined>();

  useEffect(() => {
    Teams.forEach((item) => {
      if (TeamName === item.TeamName) {
        setTeamMembers(item.TeamMembers);
        setTeamName(item.TeamName);
      }
    });
  }, [TeamName]);
  return (
    <div className="root">
      {/* <div className='search'>
                <InputSearch/>
            </div> */}
      <div className="profileDetails">
        <img
          src={image}
          width={64}
          height={64}
          className="profileImg"
          alt="profile"
        ></img>
        <div className="profileMemberDetails">
          <label className="profileNameInProfile">{Name}</label>
          <label className="emailStyling">{Email}</label>
          <label className="empIdStyling">Emp. ID 2456</label>
        </div>
      </div>
      <label className="title">My Team(Alpha Team)</label>
      <div className="row">
        {teamMembers &&
          teamMembers.map((item: any, index: any) => (
            <div
              className="cardStyling  col-sm-3 mb-3"
              key={index}
              id={index === teamMembers.length - 1 ? "blurred" : ""}
            >
              <img
                src={image}
                width={64}
                height={64}
                className="imgStyling"
              ></img>
              <div className="memberDetails">
                <label className="name">{item.Name}</label>
                <label className="emailStyling">{item.Email}</label>
                <label className="empIdStyling">Emp. ID {item.Id}</label>
              </div>

              {item.IsCaptain && <label className="captain">captain</label>}
              {index === teamMembers.length - 1 && (
                <label className="invitationPending">Invitation Pending</label>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Profile;
