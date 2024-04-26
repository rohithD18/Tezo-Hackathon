import React, { FC, useEffect, useState } from "react";
import { TeamEvents } from "./TeamEvents";
import "../styles/Schedule.css";
import {
  IAllEvents,
  IAllTeams,
} from "../services/Interface/HackathonInterface";
import { getEvents, getTeams } from "../services/Services";
import dayjs from "dayjs";
import InputSearch from "./InputSearch";

export const Schedule: FC = () => {
  const [currEventData, setCurrEventData] = useState<IAllEvents[]>([]);
  const [querySearch, setQuerySearch] = useState<string>();
  const [teams, setTeams] = useState<IAllTeams[]>([]);
  const today = dayjs();

  // useEffect(() => {
  //   const fetchTeamMembers1 = async () => {
  //     try {
  //       const result = await getEvents();
  //       setCurrEventData(result); // Initialize currEventData1 with all events
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   const fetchTeamsData = async () => {
  //     try {
  //       const fetchedTeams = await getTeams();
  //       setTeams(fetchedTeams);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchTeamsData();
  //   fetchTeamMembers1();
  // }, []);

  useEffect(() => {
    const fetchTeamsData = async () => {
      try {
        const fetchedTeams = await getTeams();
        setTeams(fetchedTeams);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchTeamMembers1 = async () => {
      try {
        const result = await getEvents();
        if (querySearch && querySearch.length >= 3) {
          setCurrEventData(
            result.filter((event) =>
              teams.some(
                (team) =>
                  team.id === event.teamId &&
                  team.teamName.includes(querySearch)
              )
            )
          );
        } else {
          setCurrEventData(result);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTeamsData();
    fetchTeamMembers1();
  }, [querySearch, teams]);

  
  return (
    <div className="Schedule">
      <TeamEvents upcomingEvents={currEventData?.filter(
      (item) => dayjs(item.time) > today
    )} validUpcomingEvents={true}  setQuerySearch={setQuerySearch} />
      <div>
        <TeamEvents
          upcomingEvents={currEventData}
          validUpcomingEvents={false}
       setQuerySearch={setQuerySearch}
        />
      </div>
    </div>
  );
};
