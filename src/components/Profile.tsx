import React, { useEffect, useState } from "react";
import "../styles/Profile.css";
import image from "../assets/image.png";
import { ITeamMems, IUsers } from "../Interfaces";
import { userName } from "../services/Profile";
import { userEmail } from "../services/Profile";
import {
  getTeamById,
  getTeamMembersByTeam,
  getUserById,
} from "../services/Services";
import {
  getLoggedInId,
  getMyTeamId,
  useFetchTeamDetails,
} from "../services/FormServices";
import {
  IAllUsers,
  ITeamMember,
} from "../services/Interface/HackathonInterface";
import { TeamMemberRole } from "../services/enums";
const Profile = () => {
  // const Name: string = "Venkatesh";
  const { teamNameFetch, teamMembersFetch } = useFetchTeamDetails();
  // const TeamName: string = "Team One";
  // const Email: string = "venkatesh.g@gmail.com";
  // const [teamName, setTeamName] = useState<string>();
  // const [teamMembers, setTeamMembers] = useState<ITeamMember[] >();

  useEffect(() => {
    // getLoggedInId().then((res) => { if(res){
    //   getMyTeamId(res).then((res) => {
    //     if(res){
    //     getTeamMembersByTeam(res).then((teamData) => {
    //       const getUserPromises = teamData.map((item: ITeamMember) =>
    //         getUserById(item.personId).then((userData: IAllUsers) => ({
    //           ...item,
    //           userData: userData
    //         }))
    //       );
    //       Promise.all(getUserPromises).then((updatedTeamMembers) => {
    //        setTeamMembers(updatedTeamMembers)
    //       });
    //     });
    //     getTeamById(res).then((teamData) => {
    //       setTeamName(teamData.teamName);
    //     });
    //   }
    // });
    // }
    // });
    // if(teamNameFetch && teamMembersFetch){
    //  setTeamName(teamNameFetch);
    //  setTeamMembers(teamMembersFetch)
    //   }
    // Teams.forEach((item) => {
    //   if (TeamName === item.TeamName) {
    //     setTeamMembers(item.TeamMembers);
    //     setTeamName(item.TeamName);
    //   }
    // });
  }, []);
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
          <label className="profileNameInProfile">{userName}</label>
          <label className="emailStyling">{userEmail}</label>
          <label className="empIdStyling">Emp. ID 2456</label>
        </div>
      </div>
      <label className="title">My Team {`(${teamNameFetch})`} </label>
      <div className="row">
        {teamMembersFetch &&
          teamMembersFetch.map((item: ITeamMember, index: number) => (
            <div
              className="cardStyling  col-sm-3 mb-3"
              key={index}
              id={index === teamMembersFetch.length - 1 ? "blurred" : ""}
            >
              <img
                src={image}
                alt=""
                width={64}
                height={64}
                className="imgStyling"
              />
              <div className="memberDetails">
                <label className="name">{item.userData?.name}</label>
                <label className="emailStyling">{item.userData?.email}</label>
                <label className="empIdStyling">
                  Emp. ID {item.userData?.employeeId}
                </label>
              </div>

              {item.role === TeamMemberRole.Captain && (
                <label className="captain">captain</label>
              )}
              {index === teamMembersFetch.length - 1 && (
                <label className="invitationPending">Invitation Pending</label>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Profile;
