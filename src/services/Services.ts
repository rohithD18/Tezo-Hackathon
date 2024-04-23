import axios, { AxiosResponse } from "axios";
import { Teams } from "../services/Data";
import { UsersData } from "./Data";
import { useEffect, useState } from "react";
import { IProject, ITeams, IUsers } from "../Interfaces";
import { EventsData } from "./EventData";
import { Projects } from "./ProjectManagementEvents";
// import { IProjectInfo } from "../Interfaces";
import {
  IAllEvents,
  IAllProject,
  IAllProjectFiles,
  IAllTeams,
  IAllUsers,
  IRegister,
  IPointsTable,
  ITeamMember,
  ITechnology,
} from "./Interface/HackathonInterface";
import { membersArray } from "./FormServices";
const userEmail: string | null = localStorage.getItem("username");

const BASE_URL = "https://tezohackathonwebapi.azurewebsites.net/api";

export const getAllUsers = async (): Promise<IAllUsers[]> => {
  return axios
    .get(`${BASE_URL}/Person`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      // throw new Error(`Error fetching team members: ${error}`);
    });
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

export const getFilteredTeams = (name: string): Promise<IAllTeams[]> => {
  const filtered = getTeams().then((res) => {
    return res
      .filter((item) =>
        item.teamName.toLowerCase().includes(name.toLowerCase())
      )
      .slice(0, 6);
  });
  return filtered;
};
export const getFilteredMembers = (name: string): Promise<IAllUsers[]> => {
  const filtered = getAllUsers().then((res) => {
    return res
      .filter((item) => item.name.toLowerCase().includes(name.toLowerCase()))
      .slice(0, 6);
  });
  // console.log(filtered, membersArray);
  return filtered;
};
export const getFilteredProjects = (name: string): IProject[] => {
  const filtered = Projects.filter((item) =>
    item.TeamName.toLowerCase().includes(name.toLowerCase())
  );
  console.log(filtered);
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
    (team) => team.TeamName === newEvent.selectedOption
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
    TeamName: newEvent.selectedOption,
    captain: team?.captain ? team.captain : "Captain H",
    topic: "Topic X - Exploring the depths of Artificial Intelligence",
    SubmissionDate: combineDateAndTime(
      newEvent.formattedDate,
      newEvent.formattedTime
    ),
    Status: "Upcoming",
    review: false,
  };
};

export const getTeams = async (): Promise<IAllTeams[]> => {
  return axios
    .get(`${BASE_URL}/team`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getPointsTable = (): Promise<IPointsTable[]> => {
  return axios
    .get(`${BASE_URL}/PointsTable`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getPointOfATeam = async (
  teamId: number
): Promise<IPointsTable> => {
  return axios
    .get(`${BASE_URL}/PointsTable/getPointsOfATeam/${teamId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const addPointsTableRow = async (data: IPointsTable) => {
  axios
    .post(`${BASE_URL}/PointsTable/addPoints/loggedInId/{loggedInId}`, data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(`Error fetching data: ${error}`);
    });
};
export const getAllTeamMembers = async (): Promise<ITeamMember[]> => {
  return axios
    .get(`${BASE_URL}/TeamMembers`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getTeamById = async (teamId: number): Promise<IAllTeams> => {
  return axios
    .get(`${BASE_URL}/Team/getTeamById/${teamId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const addTeam = async (team: IAllTeams) => {
  axios
    .post(`${BASE_URL}/Team/addTeam/loggedInId/{loggedInId}`, team)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const removeTeam = async (teamId: number) => {
  axios
    .delete(`${BASE_URL}/Team/removeTeam/loggedInId/{loggedInId}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getTeamMembersByTeam = async (
  teamId: number
): Promise<ITeamMember[]> => {
  return axios
    .get(`${BASE_URL}/TeamMembers/getTeamMemebersByTeam/${teamId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(`Error : ${error}`);
    });
};
export const AddTeamMembers = async (teamMembers: ITeamMember[]) => {
  axios
    .post(
      `${BASE_URL}/TeamMembers/addTeamMembers/loggedInId/{loggedInId}`,
      teamMembers
    )
    .then((response) => {
      console.log(response);
    });
};

export const getUserById = async (id: number): Promise<IAllUsers> => {
  return axios
    .get(`${BASE_URL}/Person/getUserById/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(`Error : ${error}`);
    });
};
export const removeUser = async (userId: number) => {
  axios
    .delete(`${BASE_URL}/Person/RemoveUser/${userId}/loggedInId/{loggedInId}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const deleteTeamMember = async (teamMemberId: number) => {
  axios
    .delete(
      `${BASE_URL}/TeamMembers/RemoveTeamMember/${teamMemberId}/loggedInId/{loggedInId}`
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updatePoints = async (points: IPointsTable) => {
  axios
    .put(`${BASE_URL}/PointsTable/updatePoints/loggedInId/{loggedInId}`, points)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(`Error : ${error}`);
    });
};
export const deletePointsTable = async (points: IPointsTable) => {
  axios
    .delete(
      `${BASE_URL}/PointsTable/deletePointsOfATeam/${points.TeamId}/loggedInId/{loggedInId}`
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(`Error : ${error}`);
    });
};
export const getUserByName = async (userName: string): Promise<IAllUsers> => {
  return axios
    .get(`${BASE_URL}/Person/getUserByName/${userName}`)
    .then((response) => {
      return response.data[0];
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getUserByEmail = async (email: string): Promise<IAllUsers> => {
  // console.log(email);

  return axios
    .get(`${BASE_URL}/Person/getUserByEmail/${email.toLocaleLowerCase()}`)
    .then((response) => {
      // console.log(response);

      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const myData = (): IAllUsers => {
  var userData: IAllUsers = {
    department: 0,
    email: "",
    employeeId: "",
    id: 0,
    isRegistered: false,
    name: "",
    profilePicture: "",
    registeredDate: new Date(),
    role: "",
  };
  // console.log(userEmail);

  // getUserByEmail(userEmail ? userEmail : "").then((res) => {
  //   userData.epartment = res.Department;
  //   userData.EmployeeId = res.EmployeeId;
  //   userData.id = res.id;
  //   userData.IsRegistered = res.IsRegistered;
  //   userData.ProfilePic = res.ProfilePic;
  //   userData.RegisteredDate = res.RegisteredDate;
  //   userData.Role = res.Role;
  //   userData.email = res.email;
  //   userData.name = res.name;
  //   // console.log(res);
  // });
  return userData;
};

export const updateUser = async (user: IAllUsers, action: string) => {
  console.log(user);

  await axios
    .put(`${BASE_URL}/Person/updateUser/loggedInId/${user.id}`, {
      id: user.id,
      name: user.name,
      email: user.email,
      employeeId: user.employeeId,
      department: user.department,
      profilePicture: user.profilePicture,
      role: user.role,
      isRegistered: action === "delete" ? false : true,
      registeredDate: user.registeredDate,
    })
    .then((response) => {
      console.log("update User response", response);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getProjects = async (): Promise<IAllProject[]> => {
  return axios
    .get(`${BASE_URL}/Project`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getProjectById = async (
  projectId: number
): Promise<IAllProject> => {
  return axios
    .get(`${BASE_URL}/Person/getProjectById/${projectId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getProjectByTeamId = async (
  teamId: number
): Promise<IAllProject> => {
  return axios
    .get(`${BASE_URL}/Person/getProjectByTeamId/${teamId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const addProject = async (data: IAllProject) => {
  axios
    .post(`${BASE_URL}/Project/addProject/loggedInId/{loggedInId}`, data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const updateProject = async (data: IAllProject, loggedInId: number) => {
  axios
    .put(
      `${BASE_URL}/Project/updateProject/loggedInId/${loggedInId}`,
      {
        projectName: data.ProjectName,
        description: data.Description,
        projectStatus: data.ProjectStatus,
        detailedDescription: data.DetailedDescription,
        submittedDate: new Date(),
        comments: data.Comments,
        teamId: data.TeamId,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const deleteProject = async (projectId: number) => {
  axios
    .delete(
      `${BASE_URL}/Project/removeProject/${projectId}/loggedInId/{loggedInId}`
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getProjectFiles = async (): Promise<IAllProjectFiles[]> => {
  return axios
    .get(`${BASE_URL}/ProjectFiles`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getProjectFilesByProjectId = async (
  projectId: number
): Promise<IAllProjectFiles> => {
  return axios
    .get(`${BASE_URL}/ProjectFiles/getProjectFilesByProjectId/${projectId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const addProjectFile = async (data: IAllProjectFiles) => {
  axios
    .post(
      `${BASE_URL}/ProjectFiles/addProjectFile/loggedInId/{loggedInId}`,
      data
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const addProjectFiles = async (data: IAllProjectFiles[]) => {
  axios
    .post(
      `${BASE_URL}/ProjectFiles/addProjectFile/loggedInId/{loggedInId}`,
      data
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const deleteProjectFile = async (ProjectFileId: number) => {
  axios
    .delete(
      `${BASE_URL}/ProjectFiles/deleteProjectFile/${ProjectFileId}/loggedInId/{loggedInId}`
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getTechnologies = async (): Promise<ITechnology[]> => {
  return axios
    .get(`${BASE_URL}/Technology`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(`Error : ${error}`);
    });
};
export const addTechnologies = async (data: ITechnology) => {
  axios
    .post(
      `${BASE_URL}/Technology/addTechnologies/loggedInId/{loggedInId}`,
      data
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(`Error : ${error}`);
    });
};
export const addEvents = async (data: any) => {
  axios
    .post(`${BASE_URL}/Events/addEvent/loggedInId/{loggedInId}`, data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(`Error : ${error}`);
    });
};
export const UpdateTeamMembers = async (user: ITeamMember[]): Promise<any> => {
  axios
    .put(`${BASE_URL}/updateTeamMembers/loggedInId/{loggedInId}`, user)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getEvents = async (): Promise<IAllEvents[]> => {
  return axios
    .get(`${BASE_URL}/Events`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};
export const register = async (loggedInId: number): Promise<any> => {
  return axios
    .get(`${BASE_URL}/Registration/register/loggedInId/${loggedInId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

// export const updateDuplicateData = (key: string, value: string) => {
// Create a new project info object with the updated key and value
// const newData: IProjectInfo[] = [{
//     Id: 1,
//     ProjectName: "",
//     Description: key === "Description" ? value : "",
//     ProjectStatus: 0,
//     DetailedDescription: key === "DetailedDescription" ? value :"",
//     ProjectRegisteredDate: new Date(),
//     SubmittedDate: new Date(),
//     PresentationDate: new Date(),
//     Comments: "",
//     TeamId: 6
// }];
// return
// Call setDuplicateData with the new data
// };
