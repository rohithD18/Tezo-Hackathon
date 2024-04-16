import { FC, useState } from "react";
import React from "react";
import { TeamEvents } from "./TeamEvents";
import "../styles/Schedule.css";
import { IEvents } from "../Interfaces";
import { EventsData as Data } from "../services/EventData";
//  import EventsData from "../services/EventData"

export const Schedule: React.FC = () => {
  const [currEventData, setCurrEventData] = useState<IEvents[]>(Data);
  
  // const validUpcomingEvents: boolean = true;
 
  const upcomingEvents: IEvents[] = currEventData.filter(
    (item) => item.Status === "Upcoming"
  );
  return (
    <div className="Schedule">
      <TeamEvents upcomingEvents={upcomingEvents} validUpcomingEvents={true} />
      <TeamEvents upcomingEvents={currEventData} validUpcomingEvents={false} />
    </div>
  );
};
