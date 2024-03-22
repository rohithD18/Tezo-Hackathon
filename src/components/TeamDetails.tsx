import React, { useEffect, useState } from "react";
import "../styles/TeamDetails.css";
import { useParams } from "react-router-dom";
import InputSearch from "./InputSearch";
import image from "../assets/image.png";
import { Teams } from "../services/Data";
import { getFilteredTeams } from "../services/Services";
import { ITeamMembers, ITeamMems, IUsers } from "../Interfaces";
const TeamDetails = () => {
  const { teamNameParam } = useParams();
  // const history = useHistory();
  const [teamName, setTeamName] = useState<string | undefined>();
  const [teamMembers, setTeamMembers] = useState<IUsers[] | undefined>();
  // const [teamNameFromService,setTeamNameFromService]=useState<string|undefined>();
  const [querySearch, setQuerySearch] = useState<string>("");
  useEffect(() => {
    Teams.forEach((item) => {
      if (querySearch === item.TeamName) {
        setTeamMembers(item?.TeamMembers);
        setTeamName(item.TeamName);
      }
    });
    console.log("sss", teamNameParam, querySearch);

    querySearch && window.history.pushState({}, "", `/teams/${querySearch}`);
  }, [querySearch]); //
  useEffect(() => {
    Teams.forEach((item) => {
      if (teamNameParam === item.TeamName) {
        setTeamMembers(item.TeamMembers);
        setTeamName(item.TeamName);
      }
    });
  }, [teamNameParam]);

  // useEffect(() => {
  //   Teams.forEach(item => {
  //       if( teamNameParam === item.TeamName){
  //        setTeamMembers(item.TeamMembers);
  //        setTeamName(item.TeamName)
  //       };
  //     });
  // }, [teamNameFromService]);
  return (
    <div className="root">
      <div className="search">
        <InputSearch setQuerySearch={setQuerySearch} />
      </div>
      <div className="teamNameDiv">
        <label id="initials">
          {teamName &&
            teamName
              .split(" ")
              .map((word) => word[0])
              .join("")
              .toUpperCase()}
        </label>
        {teamName}
      </div>
      <label className="title"> Team Members</label>
      <div className="row">
        {teamMembers &&
          teamMembers.map((item: any, index: any) => (
            <div className="cardStyling  col-sm-3 mb-3" key={index}>
              <img
                src={image}
                width={64}
                height={64}
                className="imgStyling"
                alt="styling"
              ></img>
              <div className="memberDetails">
                <label className="name">{item.Name}</label>
                <label className="emailStyling">{item.Email}</label>
                <label className="empIdStyling">Emp. ID {item.Id}</label>
              </div>
              {item.IsCaptain && <label className="captain">captain</label>}
            </div>
          ))}
      </div>
    </div>
  );
};

export default TeamDetails;
