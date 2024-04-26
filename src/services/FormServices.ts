import { useEffect, useState } from "react";
import {
  IAllProject,
  IAllTeams,
  IAllUsers,
  IRegister,
  ITeamMember,
} from "./Interface/HackathonInterface";
import {
  getAllTeamMembers,
  getAllUsers,
  getProjects,
  getTeamById,
  getTeamMembersByTeam,
  getTeams,
  getUserById,
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
  console.log(id, "jh");
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

export const useFetchTeamDetails = () => {
  const [teamNameFetch, setTeamName] = useState<string>();
  const [teamMembersFetch, setTeamMembers] = useState<ITeamMember[]>();
  useEffect(() => {
    getLoggedInId().then((res) => {
      if (res) {
        getMyTeamId(res).then((res) => {
          if (res) {
            getTeamMembersByTeam(res).then((teamData) => {
              const getUserPromises = teamData.map((item: ITeamMember) =>
                getUserById(item.personId).then((userData: IAllUsers) => ({
                  ...item,
                  userData: userData,
                }))
              );
              Promise.all(getUserPromises).then((updatedTeamMembers) => {
                setTeamMembers(updatedTeamMembers);
              });
            });
            getTeamById(res).then((teamData) => {
              setTeamName(teamData.teamName);
            });
          }
        });
      }
    });
  }, []);

  return { teamNameFetch, teamMembersFetch };
};

const blobSasUrl =
  "https://tezohackathonblob.blob.core.windows.net/?sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2024-06-01T02:37:44Z&st=2024-04-25T18:37:44Z&spr=https&sig=t3OOJvN5hkeUncwcLUclzDydJTBVQHZcVaDKCm3fXEA%3D";

const blobServiceClient = new BlobServiceClient(blobSasUrl);

const containerName = "hackathoncontainer";
const blobAccountName = "tezohackathonblob";

const containerClient = blobServiceClient.getContainerClient(containerName);
export const uploadFileToBlob = async (file: File) => {
  const promises = [];
  const options = { blobHTTPHeaders: { blobContentType: file?.type } };
  const blockBlobClient = containerClient.getBlockBlobClient(file?.name);
  promises.push(blockBlobClient.uploadData(file, options));
  await Promise.all(promises);
  // console.log(promises);
  return blockBlobClient.url;
};

export const uploadFileSToBlob = async (files: File[]) => {
  const promises = [];
  let documentUrls: string[] = [];
  for (const file of files) {
    const options = { blobHTTPHeaders: { blobContentType: file.type } };
    const blockBlobClient = containerClient.getBlockBlobClient(file.name);
    promises.push(blockBlobClient.uploadData(file, options));
    documentUrls.push(blockBlobClient.url);
  }
  await Promise.all(promises);
  // console.log(documentUrls);

  return documentUrls;
};
export const deleteFileFromBlob = async (file: File) => {
  try {
    await containerClient.deleteBlob(file.name);
  } catch (err) {
    console.error(err);
  }
};
