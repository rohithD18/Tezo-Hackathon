import React, { useEffect, useState } from "react";
import { IAllEvents, IAllTeams } from "../services/Interface/HackathonInterface";
import "../styles/UpcomingEvents.css";
import { getTeams } from "../services/Services";
import InputSearch from "./InputSearch";

interface IProps {
  upcomingEvents: IAllEvents[];
  validUpcomingEvents: boolean;
}

export const TeamEvents: React.FC<IProps> = ({
  upcomingEvents,
  validUpcomingEvents,
}: IProps) => {
  const [querySearch, setQuerySearch] = useState<string>();
  const [teams, setTeams] = useState<IAllTeams[]|any>([]);

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
  }, []);

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
        const teamDetail = teams.filter((team: { Id: number; }) => team.Id === item.id);
        return (
          <div
            key={item.id}
            className={
              validUpcomingEvents ? "upcomingEventList" : "allEventsList"
            }
          >
            <div>
              <img src={teamDetail?.logo} alt="Team Logo" id="teamLogo" />
            </div>
            <div>
              <div>{teamDetail?.teamName.toUpperCase()}</div>
              {/* <div>
                {typeof item.SubmissionDate === "string" ? (
                  item.SubmissionDate.split(",")[0]
                ) : item.SubmissionDate instanceof Date ? (
                  item.SubmissionDate.toLocaleDateString()
                ) : (
                  "--"
                )}
                <div id="dot"></div>
                {typeof item.SubmissionDate === "string" ? (
                  item.SubmissionDate.split(" ")[1]
                ) : item.SubmissionDate instanceof Date ? (
                  item.SubmissionDate.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                ) : (
                  "--"
                )}
              </div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};
