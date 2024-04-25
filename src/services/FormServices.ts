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
// const sasToken =
//   "sv=2022-11-02&ss=bfqt&srt=c&sp=rwdlacupiytfx&se=2024-06-05T18:49:17Z&st=2024-04-25T10:49:17Z&spr=https&sig=eF8Klt1S%2FyoYlXPWtbM1kRUjPeG0CMC0TiBcOfgCbzo%3D"; // Fill string with your SAS token
// const containerName = "hackathoncontainer";
// const storageAccountName = "tezohackathonblob";
// // THIS IS SAMPLE CODE ONLY - NOT MEANT FOR PRODUCTION USE

// // Feature flag - disable storage feature to app if not configured

// // return list of blobs in container to display
// const getBlobsInContainer = async (containerClient: ContainerClient) => {
//   const returnedBlobUrls = [];
//   // get list of blobs in container
//   // eslint-disable-next-line
//   for await (const blob of containerClient.listBlobsFlat()) {
//     // if image is public, just construct URL
//     returnedBlobUrls.push(
//       `https://${storageAccountName}.blob.core.windows.net/${containerName}/${blob.name}`
//     );
//   }

//   return returnedBlobUrls;
// };

// const createBlobInContainer = async (
//   containerClient: ContainerClient,
//   file: File
// ) => {
//   // create blobClient for container
//   const blobClient = containerClient.getBlockBlobClient(file.name);

//   // set mimetype as determined from browser with file upload control
//   const options = { blobHTTPHeaders: { blobContentType: file.type } };

//   // upload file
//   await blobClient.uploadData(file, options);
//   await blobClient.setMetadata({ UserName: "Rohith" });
// };

// export const uploadFileToBlob = async (file: File | null) => {
//   if (!file) return [];

//   const sharedKey = new AnonymousCredential();
//   // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
//   const blobService = new BlobServiceClient(
//     `https://${storageAccountName}.blob.core.windows.net/`,
//     sharedKey
//   );
//   // get Container - full public read access
//   const containerClient = blobService.getContainerClient(containerName);

//   // upload file
//   await createBlobInContainer(containerClient, file);

//   // get list of blobs in container
//   return getBlobsInContainer(containerClient);
// };
// </snippet_uploadFileToBlob>
