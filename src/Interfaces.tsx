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
export interface Ipdf{
  name:string;
  size:number;
  type:string
}
export interface IProjectDetail {
  id: number;
  Topic:string;
  TopicDescripition:string;
  ProposedSolution:string;
  pdf:Ipdf[]
}

