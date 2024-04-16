import React, { useState } from "react";
import "../styles/UpcomingEvents.css";
import { IEvents } from "../Interfaces";
import InputSearch from "./InputSearch";

interface IProps {
  upcomingEvents: IEvents[];
  validUpcomingEvents: boolean;
}

export const TeamEvents: React.FC<IProps> = ({
  upcomingEvents,
  validUpcomingEvents,
}: IProps) => {
  const [querySearch, setQuerySearch] = useState<string>();

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
      {upcomingEvents.map((item) => (
        <div
          key={item.id}
          className={
            validUpcomingEvents ? "upcomingEventList" : "allEventsList"
          }
        >
          <div>
            <img src={item.image} alt="Team Event" id="teamLogo" />
          </div>
          <div>
            <div>{item.TeamName.toUpperCase()}</div>
            <div>
            <div>
                {typeof item.SubmissionDate === 'string'
                  ? item.SubmissionDate.split(',')[0]
                  : item.SubmissionDate instanceof Date // Check if it's a Date object
                    ? item.SubmissionDate.toLocaleDateString() // Format the Date object as a string
                    : "--"} 
              </div>
              <div id="dot"></div>
              <div>{typeof item.SubmissionDate === 'string' // Check if it's a string
                  ? item.SubmissionDate.split(' ')[1] // Extract time part
                  : item.SubmissionDate instanceof Date // Check if it's a Date object
                    ? item.SubmissionDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) // Format the Date object as time
                    : "--"} </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
