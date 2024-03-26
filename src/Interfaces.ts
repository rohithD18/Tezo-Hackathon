export interface IMembers {
  Id: number;
  Name: string;
  email: string;
}
export interface IEvents {
  id: number;
  teamName: string;
  image: string;
  teamShedule: string;
}
export interface ITeamMembers {
  name: string;
  email: string;
  employeeId: string;
  profileUrl: string;
}

export interface IJudges {
  name: string;
  email: string;
  role: string;
  profileUrl: string;
}

export interface Ipdf {
  name: string;
  size: number;
  type: string;
}
export interface IProjectDetail {
  id: number;
  Topic: string;
  TopicDescripition: string;
  ProposedSolution: string;
  pdf: Ipdf[];
}
export interface IProject {
  id: number;
  TeamName: string;
  descripition: string;
  Status: string;
  submittedOn: string;
}
export interface IUsers {
  Id: number;
  Name: string;
  EmailAddress: string;
  Department: string;
  IsCaptain: boolean;
}
export interface ITeamMems {
  Id: number;
  Name: string;
  Email: string;
  IsCaptain: boolean;
  IsQualityAnalyst: boolean;
  IsDeveloper: boolean;
}

export interface ITeams {
  Id: number;
  TeamName: string;
  TeamMembers: IUsers[];
  Rank: number;
  Score: number;
}

export interface IUser {
  Name: string;
  EmailAddress: string;
  TeamName: string;
  RegisteredOn: Date | string;
}
