import React, { useEffect, useState } from "react";
import "../styles/TeamDetails.css";
import { useLocation, useParams } from "react-router-dom";
import InputSearch from "./InputSearch";
import image from "../assets/image.png";
import { Teams } from "../services/Data";
import { getFilteredTeams, getTeamMembersByTeam, getTeams, getUserById } from "../services/Services";
import { ITeamMembers, ITeamMems, IUsers } from "../Interfaces";
import { IAllUsers, ITeamMember } from "../services/Interface/HackathonInterface";
import { TeamMemberRole } from "../services/enums";
import { useFetchTeamDetails } from "../services/SubServices";
const TeamDetails = () => {
  const { teamNameParam } = useParams();
  const location = useLocation(); // Get the current location object
  const { state } = location;
  const { id } = state || {};
  // const history = useHistory();
  const [teamName, setTeamName] = useState<string | undefined>();
  // const [teamId, setTeamId] = useState<number| undefined>();
  const [teamMembers, setTeamMembers] = useState<ITeamMember[] | undefined>();
  // const [teamNameFromService,setTeamNameFromService]=useState<string|undefined>();
  const [querySearch, setQuerySearch] = useState<string>("");
  useEffect(() => {
    // console.log(state && id,"id")
    let teamId:number
    console.log(teamNameParam,querySearch)

    const fetchTeam = async (value:string) => {
      try {
        const result = await getTeams();
        result.forEach((item) => {
          if (value.replace(/\s+/g, '_') === item.teamName.replace(/\s+/g, '_')) {
            
            setTeamName(item.teamName);
            teamId=item.id
            fetchTeamDetails();
          }
        });
        
      } catch (error) {
        console.error(error);
      }
    };
    const fetchTeamDetails = async () => {
      try {
        if(teamId!=undefined){
        const result = await getTeamMembersByTeam(teamId);
        if (result.length !== 0) {
          const updatedTeamMembers: Promise<ITeamMember>[] = result.map((member) => {
            return getUserById(member.personId).then((userData: IAllUsers) => {
              return { ...member, userData };
            });
          });
          
          Promise.all(updatedTeamMembers).then((updatedMembers) => {
            setTeamMembers(updatedMembers);
          });
      
       
      };
    }
      } 
      
      catch (error) {
        console.error(error);
      }
    };

    fetchTeam(querySearch?querySearch:teamNameParam ? teamNameParam: "")
    querySearch && window.history.pushState({}, "", `/teams/${querySearch.replace(/\s+/g, '_')}`);
  }, [querySearch,teamNameParam]);
    
  return (
    <div className="root">
      <div className="search">
        <InputSearch
          setQuerySearch={setQuerySearch}
          currentScreen={"TeamDetails"}
        />
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
          teamMembers.map((item: ITeamMember, index: number) => (
            <div className="cardStyling  col-sm-3 mb-3" key={index}>
              <img
                src={image}
                width={64}
                height={64}
                className="imgStyling"
                alt="styling"
              ></img>
              <div className="memberDetails">
                <label className="name">{item.userData?.name}</label>
                <label className="emailStyling">{item.userData?.email}</label>
                <label className="empIdStyling">Emp. ID {item.userData?.employeeId}</label>
              </div>
              {item.role===TeamMemberRole.Captain && <label className="captain">captain</label>}
            </div>
          ))}
      </div>
    </div>
  );
};

export default TeamDetails;
