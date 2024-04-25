import React, { useEffect, useState } from "react";
import { IAllEvents, IAllTeams } from "../services/Interface/HackathonInterface";
import "../styles/UpcomingEvents.css";
import { getTeams } from "../services/Services";
import InputSearch from "./InputSearch";

interface IProps {
  upcomingEvents: IAllEvents[];
  validUpcomingEvents: boolean;
  setQuerySearch:(query: string) => void
}

export const TeamEvents: React.FC<IProps> = ({
  upcomingEvents,
  validUpcomingEvents,
  setQuerySearch
}: IProps) => {
 
  const [teams, setTeams] = useState<IAllTeams[]>([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const fetchedTeams = await getTeams();
        setTeams(fetchedTeams);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTeams();
    
  }, [teams, upcomingEvents]);

  return (
    <div className="eventsSection">
      
      {validUpcomingEvents ? (
        <div className="upcomingEventStyle">Upcoming Events</div>
      ) : (
        <div className="allEvents">
          <div>All Events</div>
          <InputSearch
          setQuerySearch={setQuerySearch}
          currentScreen={"TeamEvents"}
        />
        </div>
      )}
      {upcomingEvents.map((item) => {
        const teamDetail = teams.filter((team) => team.id === item.teamId)[0];
        return (
          <div
            key={item.id}
            className={
              validUpcomingEvents ? "upcomingEventList" : "allEventsList"
            }
          >
            <div>
              <img src={teamDetail?.teamLogo?"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png":teamDetail?.teamLogo} alt="Team Logo" id="teamLogo" />
            </div>
            <div>
              <div>{teamDetail?.teamName?.toUpperCase()}</div>
              <div>
  {typeof item.time === "string" ? (
    <>
      {new Date(item.time).getDate()} {/* Day */}
      {' '}
      {new Date(item.time).toLocaleString('en-US', { month: 'long' })} {/* Month */}
      <div id="dot"></div>
      {new Date(item.time).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })} {/* Time */}
    </>
  ) : (
    "--"
  )}
</div>


            </div>
          </div>
        );
      })}
    </div>
  );
};
