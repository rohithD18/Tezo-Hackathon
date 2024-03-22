import React, { useState } from "react";
import "../styles/TeamCard.css";
import { ITeamData } from "../services/Interface/TeamData";
import star01 from "../assets/star01.png";
import Ellipse810 from "../assets/Ellipse810.png";
import { FaHashtag } from "react-icons/fa";
import {Teams} from "../services/Data";
import { ITeamMembers } from "../services/Data";
import MyTeam from "./MyTeam";
import { Link } from "react-router-dom";
type Props = {
  data: ITeamData;
};

const TeamCard: React.FC<Props> = (props: Props) => {
  const { data } = props;
  const handleCardClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  
    e.preventDefault()
    window.location.href =`/teams/${data.teamName}`;
  };
  return (
    <>
         <a href={`/teams/${data.teamName}`} style={{textDecoration:"none"}} >
    <div className="cardAll" key={data.id} onClick={handleCardClick}>
   
      <div className="card1">
        <div className="cardLogo">
          <div className="cardgroup">
            <span
              className={`cardRank ${
                data.rank === 1
                  ? "rank1"
                  : data.rank === 2
                  ? "rank2"
                  : data.rank === 3
                  ? "rank3"
                  : ""
              }`}
            >
              {data.rank}
            </span>
            <FaHashtag className="hashIcon" />
          </div>
          <div className="cardPoint1">
            <div className="cardPoint2">
              <img className="starIcon" src={star01} alt="star01" />
              <span className="cardPoint">{data.points} pts</span>
            </div>
          </div>
        </div>
        <div className="team">
          <span className="teamName">{data.teamName}</span>
        </div>
      </div>
      <div className="card2">
        <span className="captainTitle">Captain</span>
        <div className="cardCaptain">
          <img className="captainImage" src={Ellipse810} alt="captainImage" />
          <span className="captainName">{data.captainName}</span>
        </div>
      </div>
      
    </div>
  </a>
    
    </>
  );
};

export default TeamCard;
