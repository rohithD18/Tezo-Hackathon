import { useEffect, useState } from "react";
import { ITeams } from "../Interfaces";
import {
  IAllEvents,
  IAllProject,
  IAllTeams,
  IAllUsers,
  IPointsTable,
  ITeamMember,
} from "./Interface/HackathonInterface";
import {
  getAllTeamMembers,
  getAllUsers,
  getEvents,
  getPointsTable,
  getProjects,
  getTeams,
} from "./Services";
import { membersArray } from "./FormServices";

export const useFecthApis = () => {
  const [allTeams, setAllTeams] = useState<IAllTeams[]>([]);
  const [allProjects, setAllProjects] = useState<IAllProject[]>([]);
  const [allTeamMembers, setAllTeamMembers] = useState<ITeamMember[]>([]);
  const [pointsTable, setPointsTable] = useState<IPointsTable[]>([]);
  const [allEvents, setAllEvents] = useState<IAllEvents[]>([]);
  const [usersData, setUsersData] = useState<IAllUsers[]>([]);
  useEffect(() => {
    getTeams().then((res) => setAllTeams(res));
    getProjects().then((res) => setAllProjects(res));
    getAllTeamMembers().then((res) => setAllTeamMembers(res));
    getPointsTable().then((res) => setPointsTable(res));
    getEvents().then((res) => setAllEvents(res));
    getAllUsers()
      .then((res) => setUsersData(res))
      .catch((err) => console.error(err));
  }, []);
  return {
    allTeams,
    allProjects,
    allTeamMembers,
    pointsTable,
    allEvents,
    usersData,
  };
};

export const useFetch = (
  queary: string,
  setQueary: (message: string) => void
) => {
  const [isQA, setIsQA] = useState<boolean>(false);
  const [usersData, setUsersData] = useState<IAllUsers[]>([]);
  useEffect(() => {
    getAllUsers().then((res) => {
      setUsersData(res);
    });
  });
  const getAMember = (value: string) => {
    const member = usersData.filter((entry) =>
      entry.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    return member;
  };
  useEffect(() => {
    if (membersArray.filter((item) => item?.department === 1).length > 0) {
      setIsQA(true);
    }
    if (membersArray.length > 7) {
      alert("Your team limit has achieved!");
      membersArray.splice(7, 1);
    } else {
      if (queary.length > 3) {
        if (
          membersArray.filter(
            (item) => item?.name === getAMember(queary)[0]?.name
          ).length > 0 ||
          getAMember(queary).length === 0
        ) {
          getAMember(queary).length === 0
            ? alert("no user with " + queary)
            : alert("Alredy present");
          // setQueary("");
        } else {
          membersArray.filter((item) => item?.department === 4).length === 1 &&
          getAMember(queary)[0]?.department === 4
            ? alert("You already have a QA")
            : getAMember(queary)[0]?.isRegistered
            ? alert(queary + " is registered in an other team")
            : membersArray.push(getAMember(queary)[0]);
          setQueary("");
        }
      }
    }
  }, [queary, setQueary]);

  return { queary, isQA, membersArray, usersData };
};
export const useCount = () => {
  const [countParticipant, setCountparticipants] = useState<number>(0);
  const [countRegisteredTeams, setCountRegisteredTeams] = useState<number>(0);
  const [countSubmittedProjects, setCountSubmittedProjects] =
    useState<number>(0);
  useEffect(() => {
    const fetchUserCounts = async () => {
      try {
        const allUsers: IAllUsers[] = await getAllUsers();
        const allTeams: IAllTeams[] = await getTeams();
        const allProject: IAllProject[] = await getProjects();
        const registeredUsersCount = allUsers.filter(
          (user) => user.isRegistered
        ).length;
        setCountparticipants(registeredUsersCount);
        setCountRegisteredTeams(allTeams.length);
        setCountSubmittedProjects(allProject.length); // For now, set to 20 as an example, but it should be fetched from your data
      } catch (error) {
        console.error("Error fetching user counts:", error);
      }
    };

    fetchUserCounts();
  }, []);
  return { countParticipant, countRegisteredTeams, countSubmittedProjects };
};
