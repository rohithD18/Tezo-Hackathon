export interface IApplications {
  Id: number;
  TeamName: string;
  ProjectName: string;
  TeamCaptian: string;
  ProjectedSubmitted: boolean;
  SubmissionDate: Date | string;
  Status: string;
  ProjectDescription: string;
  review?: boolean;
  score?: number;
}
