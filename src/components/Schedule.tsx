import { FC, useEffect, useState } from "react";
import React from "react";
import { TeamEvents } from "./TeamEvents";
import "../styles/Schedule.css";
// import { IEvents } from "../Interfaces";
import  {IAllEvents}  from "../services/Interface/HackathonInterface";
import { EventsData as Data } from "../services/EventData";
import { getEvents } from "../services/Services";
import { getTodayDate } from "@mui/x-date-pickers/internals";
import dayjs from "dayjs";
//  import EventsData from "../services/EventData"

export const Schedule: React.FC = () => {
  const [currEventData, setCurrEventData] = useState<IAllEvents[]>([]);
  useEffect(() => {
    const fetchTeamMembers1 = async () => {
      try {
        const result = await getEvents();
        console.log(result)
        
        setCurrEventData(result);
         // Assuming the response is an array of team members
      } catch (error) {
        console.error(error);
      }
    };

    fetchTeamMembers1();
  }, []);
  const today = dayjs(); 
  
   const validUpcomingEvents: boolean = true;
   const upcomingEvents: IAllEvents[] = currEventData.filter(
    (item) => dayjs(item.time) > today
  );
  return (
    <div className="Schedule">
      <TeamEvents upcomingEvents={upcomingEvents} validUpcomingEvents={true} />
      <TeamEvents upcomingEvents={currEventData} validUpcomingEvents={false} /> 
    </div>
  );
};
