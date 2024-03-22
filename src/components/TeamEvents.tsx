import React, { useState } from "react";
// import InputSearch from "./InputSearch";
import "../styles/UpcomingEvents.css";
import { IEvents } from "../Interfaces";
import InputSearch from "./InputSearch";
interface IProps {
  upcomingEvents: Array<IEvents>;
  validUpcomingEvents: boolean;
}
export const TeamEvents: React.FC<IProps> = ({
  upcomingEvents,
  validUpcomingEvents,
}: IProps) => {
  const [querySearch, setQuerySearch] = useState<string>();
  return (
    <div>
      {validUpcomingEvents ? (
        <div className="upcomingEventStyle">Upcoming Events</div>
      ) : (
        <div className="allEvents">
          <div>All Events</div>
          <InputSearch setQuerySearch={setQuerySearch} />
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
            <div>{item.teamName.toUpperCase()}</div>
            <div>
              <div>8 october </div>
              <div id="dot"></div>
              <div>11.45PM</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
