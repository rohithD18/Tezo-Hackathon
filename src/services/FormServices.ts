import { useEffect, useState } from "react";
import { IAllUsers, IRegister } from "./Interface/HackathonInterface";
import { getAllUsers, useFetch } from "./Services";
import axios from "axios";

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
