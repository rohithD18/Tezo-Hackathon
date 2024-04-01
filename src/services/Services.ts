import axios from "axios";
import { Teams } from "../services/Data";
import { membersArray } from "../components/registration/MembersA";
import { UsersData } from "./Data";
import { useEffect, useState } from "react";
import { IEvents, ITeams, IUsers } from "../Interfaces";
import { EventsData } from "./EventData";
export const getAMember = (value: string) => {
  const member = UsersData.filter((entry) =>
    entry.Name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  );
  console.log("memeber", member);
  // AllTeams.TeamMembers[0] = member[0];
  return member;
};
// export const getArrayItems = (Data:IEvents[]) => {

// AllTeams.TeamMembers[0] = member[0];
//   return Data;
// };
export const useFetch = (
  queary: string,
  setQueary: (message: string) => void
) => {
  // const [queary, setQueary] = useState<string>("");
  const [isQA, setIsQA] = useState<boolean>(false);
  // console.log(membersArray, isQA);

  useEffect(() => {
    if (membersArray.filter((item) => item?.Department === "QA").length > 0) {
      setIsQA(true);
    }
    if (membersArray.length > 7) {
      alert("Your team limit has achieved!");
      membersArray.splice(7, 1);
    } else {
      if (queary.length > 3) {
        if (
          membersArray.filter(
            (item) => item?.Name === getAMember(queary)[0]?.Name
          ).length > 0 ||
          getAMember(queary).length === 0
        ) {
          getAMember(queary).length === 0
            ? alert("no user with " + queary)
            : alert("Alredy present");
          // setQueary("");
        } else {
          membersArray.filter((item) => item?.Department === "QA").length ===
            1 && getAMember(queary)[0]?.Department === "QA"
            ? alert("You already have a QA")
            : membersArray.push(getAMember(queary)[0]);
          setQueary("");
        }
      }
    }
  }, [queary, setQueary]);

  return { queary, isQA, membersArray };
};
export const getFilteredTeams = (name: string): ITeams[] => {
  const filtered = Teams.filter((item) =>
    item.TeamName.toLowerCase().includes(name.toLowerCase())
  );
  console.log(filtered);
  return filtered;
};
export const getFilteredMembers = (name: string): IUsers[] => {
  const filtered = UsersData.filter((item) =>
    item.Name.toLowerCase().includes(name.toLowerCase())
  );
  console.log(filtered, membersArray);
  return filtered.slice(0, 6);
};
export const combineDateAndTime = (date: Date, time: string): Date => {
  const [timePart, amPm] = time.split(" ");
  let [hoursStr, minutesStr] = timePart.split(":");
  let hours = parseInt(hoursStr, 10);
  let minutes = parseInt(minutesStr, 10);

  if (amPm === "PM" && hours < 12) {
    hours += 12;
  } else if (amPm === "AM" && hours === 12) {
    hours = 0;
  }
  const combinedDate = new Date(date);
  combinedDate.setHours(hours, minutes);
  return combinedDate;
};
export const addNewEvent = (newEvent: any) => {
  // let status = "";
  // let captain = "";

  const team = EventsData.find(
    (team) => team.teamName === newEvent.selectedOption
  );
  // const today = new Date();
  // const dateObj = new Date(newEvent.formattedDate);
  // dateObj.setHours(0, 0, 0, 0);
  // today.setHours(0, 0, 0, 0);
  // if (dateObj < today) {
  //   status = "Pending";
  // } else {
  //   status = "Upcoming";
  // }

  // const captainName=team ? team.captainName : undefined;
  // EventsData.push( {
  //   id: EventsData.length+1,
  //   teamName: newEvent.teamName,
  //   captain: team?.captain,
  //   topic: "Topic X - Exploring the depths of Artificial Intelligence",
  //   dateAndTime:combineDateAndTime(newEvent.formattedDate,newEvent.formattedTime),
  //   status: status,
  //   review: false
  // },);
  console.log(
    combineDateAndTime(newEvent.formattedDate, newEvent.formattedTime)
  );
  return {
    id: EventsData.length + 1,
    teamName: newEvent.selectedOption,
    captain: team?.captain ? team.captain :"Captain H",
    topic: "Topic X - Exploring the depths of Artificial Intelligence",
    dateAndTime: combineDateAndTime(
      newEvent.formattedDate,
      newEvent.formattedTime
    ),
    status: "Upcoming",
    review: false,
  };
};
