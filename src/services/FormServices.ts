import { useEffect, useState } from "react";
import {
  IAllProject,
  IAllTeams,
  IAllUsers,
  IRegister,
} from "./Interface/HackathonInterface";
import {
  getAllTeamMembers,
  getAllUsers,
  getProjects,
  getTeams,
} from "./Services";
import axios from "axios";
import { userEmail } from "./Profile";
import { IProject } from "../Interfaces";
import { toDate } from "date-fns";
import {
  AnonymousCredential,
  BlobServiceClient,
  ContainerClient,
  StorageSharedKeyCredential,
} from "@azure/storage-blob";

export const membersArray: IAllUsers[] = [];

// const userEmail: string | null = localStorage.getItem("username");
const BASE_URL = "https://tezohackathonwebapi.azurewebsites.net/api";

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
  id: 0,
  projectName: "",
  description: "",
  projectStatus: 0,
  detailedDescription: "",
  projectRegisteredDate: new Date(),
  submittedDate: new Date(),
  presentationDate: new Date(),
  comments: "",
  teamId: 0,
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
export const getMyTeamId = (id: number) => {
  const myTeamId = getAllTeamMembers()
    .then((res) => {
      return res.filter((item) => item.personId === id)[0]?.teamId;
    })
    .catch((err) => console.log(err));
  return myTeamId;
};

export const registerTeam = async (Form: IRegister) => {
  await axios.post(`${BASE_URL}/Registration/register/loggedInId/445`, Form, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  // .then((res) => console.log("res"))
  // .catch((error) => console.error("err", error));
};
