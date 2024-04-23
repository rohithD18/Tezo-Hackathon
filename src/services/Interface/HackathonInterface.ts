export interface IAllUsers {
  id: number;
  name: string;
  email: string;
  employeeId: string;
  department: number;
  profilePicture: string;
  role: string;
  isRegistered: boolean;
  registeredDate: Date;
}
export interface IAllProject {
  Id: number;
  ProjectName: string;
  Description: string;
  ProjectStatus: number;
  DetailedDescription: string;
  ProjectRegisteredDate: Date;
  SubmittedDate: Date;
  PresentationDate: Date;
  Comments: string;
  TeamId: number;
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

export interface IPointsTable {
  Id: number;
  TeamId: number;
  // Team: Team;
  Team: string;
  RegistrationScore: number;
  ProjectSubmissionScore: number;
  ProjectDemoScore: number;
  OverAllScore: number;
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
