export interface IAllUsers {
  id: number;
  name: string;
  email: string;
  employeeId: string;
  department: number;
  profilePicture: string;
  role: number;
  isRegistered: boolean;
  registeredDate: Date;
}
export interface IAllProject {
  id: number;
  projectName: string;
  description: string;
  projectStatus: number;
  detailedDescription: string;
  projectRegisteredDate: Date;
  submittedDate: Date;
  presentationDate: Date;
  comments: string;
  teamId: number;
}
export interface IAllProjectFiles {
  Id: number;
  ProjectId: number;
  ProjectFile: string;
}

export interface IAllTeams {
  id: number;
  teamName: string;
  teamLogo: string;
  registeredDate:Date
}
export interface ITeamMember {
  id: number;
  teamId: number;
  personId: number;
  role: number;
  isAdmin: boolean;
  userData?:IAllUsers
}
export interface EventManagement {
  data: IAllEvents;
  captain:string ;
  teamName:string;
  status:string;
  review:boolean
}
export interface IProjectManagement {
  data: IAllProject;
  review:boolean,
  teamName:string,
  captain?:string,
  isSubmitted?:boolean,
  status?:number
}
export interface IPointsTable {
  id: number;
  teamId: number;
  // Team: Team;
  Team: string;
  registrationScore: number;
  projectSubmissionScore: number;
  projectDemoScore: number;
  overAllScore: number;
} 

export interface IAllEvents { 
  id: number;
  teamId: number;
  TeamMemberId:number;
  topic:string;
  time:Date
 
}

export interface IRegister {
  teamName: string;
  teamLogo: string;
  captainId: number;
  registeredDate: Date;
  adminId: number;
  projectName: string;
  description: string;
  userIds: number[];
  technologies: string[];
}
export interface ITechnology {
  id: number;
  technologyName: string;
  projectId: string;
}
