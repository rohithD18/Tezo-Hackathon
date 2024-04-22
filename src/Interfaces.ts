export interface IMembers {
  Id: number;
  Name: string;
  email: string;
}
export interface IEvents {
  id: number;
TeamName: string;
  image?: string;
  teamShedule?: string;
  captain?: string;
  topic?: string;
  SubmissionDate?: Date | string;
  Status?: string;
  review?: boolean;
  ProjectSubmissionScore?:number
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
  SubmissionDate: string;
  review?:boolean;
  projectSubmissionScore?:number
}
export interface IUsers {
  Id: number;
  Name: string;
  EmailAddress: string;
  Department: string;
  IsCaptain: boolean;
  IsRegistered?:boolean;
  RegisteredOn?: Date | string;
  TeamName?:string
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
  isRegistered:boolean
}
 export interface IProjectSubmissionForm {
  Id: number;
  ProjectName: string;
  topic:string,
  description:string,
  briefDescription:string,
  uploadFile:string
  TeamId: number;
}
export interface IProjectSubmissionFormError{
  topicError:string,
    descriptionError:string,
    briefDescriptionError:string,
    uploadFileError:string
}

