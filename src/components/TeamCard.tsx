import React, { useEffect, useState } from "react";
import "../styles/TeamCard.css";
import { ITeamData } from "../services/Interface/TeamData";
import star01 from "../assets/star01.png";
import Ellipse810 from "../assets/Ellipse810.png";
import { FaHashtag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  IAllTeams,
  ITeamMember,
} from "../services/Interface/HackathonInterface";
import { getTeamMembersByTeam, getUserById } from "../services/Services";
import { TeamMemberRole } from "../services/enums";
type Props = {
  data: IAllTeams;
};

const TeamCard: React.FC<Props> = (props: Props) => {
  const { data } = props;
  const navigate = useNavigate();
  const [captainName, setCaptainName] = useState<string>("");
  useEffect(() => {
    let captain: ITeamMember;
    const fetchData = async () => {
      try {
        const result = await getTeamMembersByTeam(data.id);

        if (result.length !== 0) {
          captain = result.filter(
            (user) => user.role === TeamMemberRole.Captain
          )[0];

          fetchCaptain();
        }
      } catch (error) {
        console.error(error);
      }
    };
    const fetchCaptain = async () => {
      try {
        const result = await getUserById(captain.personId);
        setCaptainName(result.name);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [data.id]);
  return (
    <>
      <div
        style={{ cursor: "pointer" }}
        onClick={() =>
          navigate(`/teams/${data.teamName.replace(/\s+/g, "_")}`, {
            state: { id: data.id },
          })
        }
      >
        <div className="cardAll" key={data.id}>
          <div className="card1">
            <div className="cardLogo">
              <div className="cardgroup">
                {/* <span
                  className={`cardRank ${
                    data?.rank === 1
                      ? "rank1"
                      : data.rank === 2
                      ? "rank2"
                      : data.rank === 3
                      ? "rank3"
                      : ""
                  }`}
                >
                  {data?.rank}
                </span> */}
                <FaHashtag className="hashIcon" />
              </div>
              <div className="cardPoint1">
                <div className="cardPoint2">
                  <img className="starIcon" src={star01} alt="star01" />
                  {/* <span className="cardPoint">{data.points} pts</span> */}
                </div>
              </div>
            </div>
            <div className="team">
              <span className="teamNames">{data.teamName}</span>
            </div>
          </div>
          <div className="card2">
            <span className="captainTitle">Captain</span>
            <div className="cardCaptain">
              <img
                className="captainImage"
                src={Ellipse810}
                alt="captainImage"
              />
              <span className="captainName">{captainName}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
