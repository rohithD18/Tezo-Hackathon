export interface IAllUsers {
  Id: number;
  Name: string;
  Email: string;
  EmployeeId: string;
  Department: number;
  ProfilePic: string;
  Role: string;
  IsRegistered: boolean;
  RegisteredDate: Date;
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
export interface IAllTeams {
  Id: number;
  TeamName: string;
  TeamLogo: string;
}
export interface ITeamMember {
  Id: number;
  TeamId: number;
  PersonId: number;
  Role: number;
  IsAdmin: boolean;
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
