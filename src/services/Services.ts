import axios,{AxiosResponse} from "axios";
import { Teams } from "../services/Data";
import { membersArray } from "../components/registration/MembersA";
import { UsersData } from "./Data";
import { useEffect, useState } from "react";
import { IProject, ITeams, IUsers } from "../Interfaces";
import { EventsData } from "./EventData";
import { Projects } from "./ProjectManagementEvents";
import { projectInfoArray } from "./ProjectInfoDetails";
// import { IProjectInfo } from "../Interfaces";
import { IAllEvents, IAllProject, IAllTeams, IAllUsers, ITeamMember } from "./Interface/HackathonInterface";

const BASE_URL = 'https://tezohackathonwebapi.azurewebsites.net/api';
export const getAMember = (value: string) => {
  const member = UsersData.filter((entry) =>
    entry.Name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  );
  console.log("memeber", member);
  // AllTeams.TeamMembers[0] = member[0];
  return member;
};

export const useFetch = (
  queary: string,
  setQueary: (message: string) => void
) => {
  const [isQA, setIsQA] = useState<boolean>(false);

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
  return filtered.slice(0, 6);
};
export const getFilteredMembers = (name: string): IUsers[] => {
  const filtered = UsersData.filter((item) =>
    item.Name.toLowerCase().includes(name.toLowerCase())
  );
  console.log(filtered, membersArray);
  return filtered.slice(0, 6);
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
    captain: team?.captain ? team.captain :"Captain H",
    topic: "Topic X - Exploring the depths of Artificial Intelligence",
    SubmissionDate: combineDateAndTime(
      newEvent.formattedDate,
      newEvent.formattedTime
    ),
    Status: "Upcoming",
    review: false,
  };
};

export const getTeams = async (): Promise<AxiosResponse<IAllTeams[]>> => {
  return axios.get(`${BASE_URL}/team`)
  .then(response => {
    return response.data;
  })
  .catch(error => {
    return Promise.reject(`Error fetching data: ${error}`);
  });
};
export const getAllTeamMembers = async (): Promise<AxiosResponse<ITeamMember[]>> => {
  return axios.get(`${BASE_URL}/TeamMembers`)
  .then(response => {
    return response.data;
  })
  .catch(error => {
    throw new Error(`Error fetching team members: ${error}`);
  });
};
export const getTeamById = async (teamId:number): Promise<AxiosResponse<any>> => {
  return axios.get(`${BASE_URL}/Team/getTeamById/${teamId}`)
  .then(response => {
    return response.data;
  })
  .catch(error => {
    throw new Error(`Error fetching team members: ${error}`);
  });
};
export const AddTeam = async (Id:number,TeamName:string,
  TeamLogo:string,loggedInId:number): Promise<AxiosResponse<any>> => {
  return axios.get(`${BASE_URL}/Team/addTeam/loggedInId/${loggedInId}`)
  .then(response => {
    return response.data;
  })
  .catch(error => {
    throw new Error(`Error fetching team members: ${error}`);
  });
};
export const RemoveTeam = async (teamId:number,loggedInId:number): Promise<AxiosResponse<any>> => {
  return axios.get(`${BASE_URL}/Team/removeTeam/loggedInId/{loggedInId}`)
  .then(response => {
    return response.data;
  })
  .catch(error => {
    throw new Error(`Error fetching team members: ${error}`);
  });
};
export const getTeamMembersByTeam= async (
  teamId:number): Promise<any> => {
  return axios.get(`${BASE_URL}TeamMembers/getTeamMemebersByTeam/${teamId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(`Error : ${error}`);
    });
};
export const AddTeamMembers= async (
  teamId:number): Promise<any> => {
  return axios.get(`${BASE_URL}TeamMembers/getTeamMemebersByTeam/${teamId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(`Error : ${error}`);
    });
};
export const getAllUsers = async (): Promise<IAllUsers[]> => {
  return axios.get(`${BASE_URL}/Person`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(`Error fetching team members: ${error}`);
    });
};
export const getUserById = async (id:number): Promise<IAllUsers> => {
  return axios.get(`${BASE_URL}/Person/getUserById/${id}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(`Error : ${error}`);
    });
};
export const removeUser = async (userId:number): Promise<any> => {
  return axios.get(`${BASE_URL}/Person/RemoveUser/${userId}/loggedInId/{loggedInId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(`Error : ${error}`);
    });
};
export const updateUser = async (user:IAllUsers): Promise<any> => {
  return axios.get(`${BASE_URL}/Person/updateUser/loggedInId/${user.Id}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(`Error : ${error}`);
    });
};
export const getUserByName = async (userName:string): Promise<IAllUsers> => {
  return axios.get(`${BASE_URL}/Person/getUserByName/${userName}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(`Error : ${error}`);
    });
};
export const getUserByEmail = async (email:string): Promise<IAllUsers> => {
  return axios.get(`${BASE_URL}/Person/getUserByName/${email}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(`Error : ${error}`);
    });
};
export const getProjects = async (): Promise<IAllProject[]> => {
  return axios.get(`${BASE_URL}/Project`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(`Error : ${error}`);
    });
};
export const getProjectById = async (projectId:number): Promise<IAllProject> => {
  return axios.get(`${BASE_URL}/Person/getProjectById/${projectId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(`Error : ${error}`);
    });
};
export const getProjectByTeamId = async (teamId:number): Promise<IAllProject> => {
  return axios.get(`${BASE_URL}/Person/getProjectByTeamId/${teamId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(`Error : ${error}`);
    });
};
export const AddProject= async (): Promise<IAllProject> => {
  return axios.get(`${BASE_URL}/Project/addProject/loggedInId/{loggedInId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(`Error : ${error}`);
    });
};
export const UpdateProject= async (): Promise<any> => {
  return axios.get(`${BASE_URL}/Project/updateProject/loggedInId/{loggedInId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      // throw new Error(`Error : ${error}`);

    });
};
export const DeleteProject= async (projectId:number,loggedInId:number): Promise<any> => {
  return axios.get(`${BASE_URL}/Project/removeProject/${projectId}/loggedInId/${loggedInId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(`Error : ${error}`);
    });
};
export const GetProjectFiles= async (): Promise<any> => {
  return axios.get(`${BASE_URL}/ProjectFiles`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(`Error : ${error}`);
    });
};
export const GetProjectFilesByProjectId= async (projectId:number): Promise<any> => {
  return axios.get(`${BASE_URL}/ProjectFiles/getProjectFilesByProjectId/${projectId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(`Error : ${error}`);
    });
};
export const AddProjectFile= async (Id:number,
  ProjectId:number,ProjectFile:string ): Promise<any> => {
  return axios.get(`${BASE_URL}/ProjectFiles/addProjectFile/loggedInId/{loggedInId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(`Error : ${error}`);
    });
};
export const AddProjectFiles= async (Id:number,
  ProjectId:number,ProjectFile:string ): Promise<any> => {
  return axios.get(`${BASE_URL}/ProjectFiles/addProjectFiles/loggedInId/{loggedInId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(`Error : ${error}`);
    });
};
export const DeleteProjectFile= async (
  ProjectFileId:number): Promise<any> => {
  return axios.get(`${BASE_URL}/ProjectFiles/deleteProjectFile/${ProjectFileId}/loggedInId/{loggedInId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw new Error(`Error : ${error}`);
    });
};
export const getEvents=async ():Promise<IAllEvents[]> => {
  return axios.get(`${BASE_URL}/Events`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(error);
    });

}
export const register=async (loggedInId:number):Promise<any> => {
  return axios.get(`${BASE_URL}/Registration/register/loggedInId/${loggedInId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(error);
    });

}

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