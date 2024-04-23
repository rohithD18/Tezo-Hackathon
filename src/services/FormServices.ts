import { useEffect, useState } from "react";
import { IAllProject, IAllTeams, IAllUsers, IRegister } from "./Interface/HackathonInterface";
import { getAllTeamMembers, getAllUsers, getProjects, getTeams, useFetch } from "./Services";
import axios from "axios";
import { userEmail } from "./Profile";
import { IProject } from "../Interfaces";
import { toDate } from "date-fns";

export const membersArray: IAllUsers[] = [];

// const userEmail: string | null = localStorage.getItem("username");
const BASE_URL = "https://tezohackathonwebapi.azurewebsites.net/api";
export const useMembersData = () => {
  const [usersData, setUsersData] = useState<IAllUsers[]>([]);
  useEffect(() => {
    getAllUsers().then((res) => {
      setUsersData(res);
    });
  });
  return { usersData };
};
export const useTeamData = () => {
  const [TeamsData, setTeamsData] = useState<IAllTeams[]>([]);
  useEffect(() => {
    getTeams().then((result) => {
      setTeamsData(result);
    });
  });
  return {TeamsData };
};
export const RegistrationForm: IRegister = {
  teamName: "",
  teamLogo: "",
  captainId: 0,
  registeredDate: new Date(),
  adminId: 0,
  projectName: "",
  description: "",
  userIds: [],
  technologies: [],
};
export const MyProjectForm: IAllProject = {
  Id: 0,
  ProjectName: "",
  Description: "",
  ProjectStatus: 0,
  DetailedDescription:"",
  ProjectRegisteredDate:new Date(),
  SubmittedDate:new Date(),
  PresentationDate: new Date(),
  Comments: "",
  TeamId:0,
};
export const getLoggedInId = () => {
  const loggedInId = getAllUsers()
    .then((res) => {
      return res.filter(
        (item) => item.email === userEmail?.toLocaleLowerCase()
      )[0].id;
    })
    .catch((err) => console.log(err));
  return loggedInId;
};
export const getMyTeamId = (id:number) => {
  const myTeamId = getAllTeamMembers()
    .then((res) => {
      return res.filter(item=>item.personId===id)[0].teamId
    })
    .catch((err) => console.log(err));
  return myTeamId;
};
export const useCount=()=>{
  const [countParticipant,setCountparticipants]=useState<number>(0);
  const [countRegisteredTeams,setCountRegisteredTeams]=useState<number>(0);
  const [countSubmittedProjects,setCountSubmittedProjects]=useState<number>(0);
  useEffect(() => {
      const fetchUserCounts = async () => {
          try {
              const allUsers: IAllUsers[] = await getAllUsers();
              const allTeams:IAllTeams[]= await getTeams();
              const allProject:IAllProject[]= await getProjects()
              const registeredUsersCount = allUsers.filter((user) => user.isRegistered).length;
              setCountparticipants(registeredUsersCount);
              setCountRegisteredTeams(allTeams.length);
              setCountSubmittedProjects(allProject.length); // For now, set to 20 as an example, but it should be fetched from your data
          } catch (error) {
              console.error("Error fetching user counts:", error);
          }
      };

      fetchUserCounts();
  }, []);
  return {countParticipant,countRegisteredTeams,countSubmittedProjects}
}

export const registerTeam = async (Form: IRegister) => {
  // console.log(Form);
  await axios.post(`${BASE_URL}/Registration/register/loggedInId/445`, Form, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  // .then((res) => console.log("res"))
  // .catch((error) => console.error("err", error));
};

export const getLoggedInId = () => {
  const loggedInId = getAllUsers()
    .then((res) => {
      return res.filter(
        (item) => item.email === userEmail?.toLocaleLowerCase()
      )[0].id;
    })
    .catch((err) => console.log(err));
  return loggedInId;
};
