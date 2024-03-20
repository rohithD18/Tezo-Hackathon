import React, { useEffect, useState } from 'react'
import "../styles/TeamDetails.css";
import { useParams } from 'react-router-dom';
import InputSearch from "./InputSearch";
import image from "../assets/image.png"
import { ITeamMembers, Teams } from '../services/Data';
const TeamDetails = () => {
    const { teamNameParam } = useParams();
    const [teamName,setTeamName]=useState<string|undefined>();
    const [teamMembers, setTeamMembers] = useState<ITeamMembers[]|undefined>();
      
      useEffect(() => {
        Teams.forEach(item => {
            if( teamNameParam === item.TeamName){
             setTeamMembers(item.TeamMembers);
             setTeamName(item.TeamName)
            };
          });
        console.log(teamMembers)
      }, [teamNameParam]);
  return (
          <div className="root">
            <div className='search'>
                <InputSearch/>
            </div>
            <div className='teamName'>
                <label id='initials'>
             {teamName && teamName
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()}
            </label>
            {teamName}
            </div>
            <label className='title'> Team Members</label>
      <div className="row">
          {teamMembers && teamMembers.map((item: any, index: any) => (
            <div className="cardStyling  col-sm-3 mb-3" key={index}>
              <img
                src={image}
                width={64}
                height={64}
                className="imgStyling"
              ></img>
              <div className="memberDetails">
                <label className="name">{item.Name}</label>
                <label className="emailStyling">{item.Email}</label>
                <label className="empIdStyling">
                  Emp. ID {item.Id}
                </label>
              </div>
              {item.IsCaptain && <label className='captain'>captain</label>}
            </div>
          ))}
        
      </div>
    </div>
  )
}

export default TeamDetails
