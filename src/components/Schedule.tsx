import { FC } from "react";
import React from "react";
import { TeamEvents } from "./TeamEvents";
import "../styles/Schedule.css";
import { IEvents } from "../Interfaces";
export const Schedule: React.FC = () => {
  // const validUpcomingEvents: boolean = true;
  const teamEvents: IEvents[] = [
    {
      id: 1,
      TeamName: "Team Alpha",
      image:
        "https://s3-alpha-sig.figma.com/img/7789/09af/14395bada5649dc518ae110e1af8eebc?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lcfhgZSG1V6pH4iUJ~aK4slRxWOvtYJF4QGm0~hwD56jO50Jujl8K~kBLwI3j~21tejg2QntFFfaWWwqCaB5bdSSEd-MqAN-CNAfCSZjpXpnTyh-w16MD5rjCDfNUS~4Ekf2NpKISqmQi2H0n2kaQHKlU~zmCpRwvGmBe5mYnePP3ZdknY73m58V1RffOBP9OAv1vf7ywEL3potE3T~miYVkok9p~jIm2HieP8a6nKIACTCEgReY7Fl0p321uGEdKeVqOFR79kdHYOC5H6Vwk6T8K6UWLEvCVGVGOyr5SOda5j226JVfXGI4WBpRldMbNqp936Uqqll~K-hPqovt-Q__",
      teamShedule: "122/12/12",
    },
    {
      id: 2,
      TeamName: "Team Alpha",
      image:
        "https://s3-alpha-sig.figma.com/img/7789/09af/14395bada5649dc518ae110e1af8eebc?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lcfhgZSG1V6pH4iUJ~aK4slRxWOvtYJF4QGm0~hwD56jO50Jujl8K~kBLwI3j~21tejg2QntFFfaWWwqCaB5bdSSEd-MqAN-CNAfCSZjpXpnTyh-w16MD5rjCDfNUS~4Ekf2NpKISqmQi2H0n2kaQHKlU~zmCpRwvGmBe5mYnePP3ZdknY73m58V1RffOBP9OAv1vf7ywEL3potE3T~miYVkok9p~jIm2HieP8a6nKIACTCEgReY7Fl0p321uGEdKeVqOFR79kdHYOC5H6Vwk6T8K6UWLEvCVGVGOyr5SOda5j226JVfXGI4WBpRldMbNqp936Uqqll~K-hPqovt-Q__",
      teamShedule: "12/12/12",
    },
    {
      id: 3,
      TeamName: "Team Alpha",
      image:
        "https://s3-alpha-sig.figma.com/img/7789/09af/14395bada5649dc518ae110e1af8eebc?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lcfhgZSG1V6pH4iUJ~aK4slRxWOvtYJF4QGm0~hwD56jO50Jujl8K~kBLwI3j~21tejg2QntFFfaWWwqCaB5bdSSEd-MqAN-CNAfCSZjpXpnTyh-w16MD5rjCDfNUS~4Ekf2NpKISqmQi2H0n2kaQHKlU~zmCpRwvGmBe5mYnePP3ZdknY73m58V1RffOBP9OAv1vf7ywEL3potE3T~miYVkok9p~jIm2HieP8a6nKIACTCEgReY7Fl0p321uGEdKeVqOFR79kdHYOC5H6Vwk6T8K6UWLEvCVGVGOyr5SOda5j226JVfXGI4WBpRldMbNqp936Uqqll~K-hPqovt-Q__",
      teamShedule: "12/12/12",
    },
  ];
  const upcomingEvents: IEvents[] = teamEvents.filter(
    (item) => item.teamShedule === "12/12/12"
  );
  return (
    <div className="Schedule">
      <TeamEvents upcomingEvents={upcomingEvents} validUpcomingEvents={true} />
      <TeamEvents upcomingEvents={teamEvents} validUpcomingEvents={false} />
    </div>
  );
};
