export interface IApplications {
  Id: number;
  TeamName: string;
  ProjectName: string;
  TeamCaptian: string;
  ProjectedSubmitted: boolean;
  SubmissionDate: Date | string;
  Status: string;
  ProjectDescription: string;
}

function getRandomDate(): Date {
  const start = new Date(2022, 0, 1); // Start date (Jan 1, 2022)
  const end = new Date(); // Current date

  // Get a random time between start and end dates
  const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());

  return new Date(randomTime);
}
export const ApplicationData: IApplications[] = [
  
  {
    Id: 1,
    TeamName: "Rohith D",
    ProjectName: "Project One Application Manager",
    TeamCaptian: "Captain One",
    ProjectedSubmitted: false,
    SubmissionDate: getRandomDate(),
    Status: "Accepted",
    ProjectDescription: "Description",
  },
  {
    Id: 2,
    TeamName: "Naveen T",
    ProjectName: "Project Two",
    TeamCaptian: "Captain Two",
    ProjectedSubmitted: true,
    SubmissionDate: getRandomDate(),
    Status: "Rejected",
    ProjectDescription: "Description for second team",
  },
  {
    Id: 3,
    TeamName: "Swati G",
    ProjectName: "Project Three",
    TeamCaptian: "Captain Three",
    ProjectedSubmitted: true,
    SubmissionDate: getRandomDate(),
    Status: "Accepted",
    ProjectDescription: "Description for third team",
  },
  {
    Id: 4,
    TeamName: "Likitha K",
    ProjectName: "Project Four",
    TeamCaptian: "Captain Four",
    ProjectedSubmitted: true,
    SubmissionDate: getRandomDate(),
    Status: "Accepted",
    ProjectDescription: "Description for fourth team",
  },
  {
    Id: 5,
    TeamName: "Gnani G",
    ProjectName: "Project Five",
    TeamCaptian: "Captain Five",
    ProjectedSubmitted: false,
    SubmissionDate: getRandomDate(),
    Status: "Pending",
    ProjectDescription: "Description for fifth team",
  },
  {
    Id: 6,
    TeamName: "Naresh Chakali",
    ProjectName: "Project Six",
    TeamCaptian: "Captain Six",
    ProjectedSubmitted: true,
    SubmissionDate: getRandomDate(),
    Status: "Accepted",
    ProjectDescription: "Description for sixth team",
  },
  {
    Id: 7,
    TeamName: "John Doe",
    ProjectName: "Project Seven",
    TeamCaptian: "Captain Seven",
    ProjectedSubmitted: false,
    SubmissionDate: getRandomDate(),
    Status: "Rejected",
    ProjectDescription: "Description for seventh team",
  },
  {
    Id: 8,
    TeamName: "Jane Smith",
    ProjectName: "Project Eight",
    TeamCaptian: "Captain Eight",
    ProjectedSubmitted: true,
    SubmissionDate: getRandomDate(),
    Status: "Pending",
    ProjectDescription: "Description for eighth team",
  },
  {
    Id: 9,
    TeamName: "Alice Johnson",
    ProjectName: "Project Nine",
    TeamCaptian: "Captain Nine",
    ProjectedSubmitted: true,
    SubmissionDate: getRandomDate(),
    Status: "Accepted",
    ProjectDescription: "Description for ninth team",
  },
  {
    Id: 10,
    TeamName: "Michael Scott",
    ProjectName: "Project Ten",
    TeamCaptian: "Captain Ten",
    ProjectedSubmitted: true,
    SubmissionDate: getRandomDate(),
    Status: "Accepted",
    ProjectDescription: "Description for tenth team",
  },
  {
    Id: 11,
    TeamName: "Andy Bernard",
    ProjectName: "Project Eleven",
    TeamCaptian: "Captain Eleven",
    ProjectedSubmitted: true,
    SubmissionDate: new Date(),
    Status: "Accepted",
    ProjectDescription: "Description for eleventh team",
  },
  {
    Id: 12,
    TeamName: "Dwight Schrute",
    ProjectName: "Project Twelve",
    TeamCaptian: "Captain Twelve",
    ProjectedSubmitted: true,
    SubmissionDate:getRandomDate(),
    Status: "Pending",
    ProjectDescription: "Description for twelfth team",
  },
];

export interface ITeamMembers {
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
  TeamMembers: ITeamMembers[];
  Rank: number;
  Score: number;
}
export const Teams: ITeams[] = [
  {
    Id: 1,
    TeamName: "Team One",
    TeamMembers: [
      {
        Id: 1,
        Name: "Rohith",
        Email: "rohith.d@technovert.com",
        IsCaptain: true,
        IsQualityAnalyst: false,
        IsDeveloper: true,
      },
      {
        Id: 2,
        Name: "Naveen",
        Email: "naveen.t@technovert.com",
        IsCaptain: false,
        IsQualityAnalyst: false,
        IsDeveloper: true,
      },
      {
        Id: 3,
        Name: "Likitha K",
        Email: "likitha.k@technovert.com",
        IsCaptain: false,
        IsQualityAnalyst: false,
        IsDeveloper: true,
      },
      {
        Id: 4,
        Name: "Swati G",
        Email: "swati.g@technovert.com",
        IsCaptain: false,
        IsQualityAnalyst: false,
        IsDeveloper: true,
      },
      {
        Id: 5,
        Name: "Prashanth E",
        Email: "prashanth.e@technovert.com",
        IsCaptain: false,
        IsQualityAnalyst: true,
        IsDeveloper: false,
      },
    ],
    Rank: 1,
    Score: 45,
  },
  {
    Id: 2,
    TeamName: "Team Two",
    TeamMembers: [
      {
        Id: 1,
        Name: "Gnani",
        Email: "gnani.g@technovert.com",
        IsCaptain: true,
        IsQualityAnalyst: false,
        IsDeveloper: true,
      },
      {
        Id: 2,
        Name: "Naresh Chakali",
        Email: "naresh.c@technovert.com",
        IsCaptain: false,
        IsQualityAnalyst: false,
        IsDeveloper: true,
      },
      {
        Id: 3,
        Name: "Tarun V",
        Email: "tarun.v@technovert.com",
        IsCaptain: false,
        IsQualityAnalyst: false,
        IsDeveloper: true,
      },
      {
        Id: 4,
        Name: "Naga Shashank G",
        Email: "shahshank.g@technovert.com",
        IsCaptain: false,
        IsQualityAnalyst: false,
        IsDeveloper: true,
      },
      {
        Id: 5,
        Name: "Aditya N",
        Email: "aditya.n@technovert.com",
        IsCaptain: false,
        IsQualityAnalyst: true,
        IsDeveloper: false,
      },
    ],
    Rank: 2,
    Score: 40,
  },
  {
    Id: 3,
    TeamName: "Team Three",
    TeamMembers: [
      {
        Id: 1,
        Name: "Afrid Saif",
        Email: "saif.a@technovert.com",
        IsCaptain: true,
        IsQualityAnalyst: false,
        IsDeveloper: true,
      },
      {
        Id: 2,
        Name: "Rishab O",
        Email: "rishab.o@technovert.com",
        IsCaptain: false,
        IsQualityAnalyst: false,
        IsDeveloper: true,
      },
      {
        Id: 3,
        Name: "Krishna C",
        Email: "krishna.c@technovert.com",
        IsCaptain: false,
        IsQualityAnalyst: false,
        IsDeveloper: true,
      },
      {
        Id: 4,
        Name: "Aditya S",
        Email: "aditya.s@technovert.com",
        IsCaptain: false,
        IsQualityAnalyst: false,
        IsDeveloper: true,
      },
      {
        Id: 5,
        Name: "Praneeth",
        Email: "praneeth.t@technovert.com",
        IsCaptain: false,
        IsQualityAnalyst: true,
        IsDeveloper: false,
      },
      {
        Id: 6,
        Name: "Pavan K",
        Email: "pavan.k@technovert.com",
        IsCaptain: false,
        IsQualityAnalyst: false,
        IsDeveloper: true,
      },
    ],
    Rank: 5,
    Score: 25,
  },
  {
    Id: 4,
    TeamName: "Team Four",
    TeamMembers: [
      {
        Id: 1,
        Name: "Anudeep M",
        Email: "anudeep.m@technovert.com",
        IsCaptain: true,
        IsQualityAnalyst: false,
        IsDeveloper: true,
      },
      {
        Id: 2,
        Name: "Sharath",
        Email: "Sharath.t@technovert.com",
        IsCaptain: false,
        IsQualityAnalyst: false,
        IsDeveloper: true,
      },
      {
        Id: 3,
        Name: "Karthik K",
        Email: "karthik.k@technovert.com",
        IsCaptain: false,
        IsQualityAnalyst: false,
        IsDeveloper: true,
      },
      {
        Id: 4,
        Name: "Sathish G",
        Email: "sathish.g@technovert.com",
        IsCaptain: false,
        IsQualityAnalyst: false,
        IsDeveloper: true,
      },
      {
        Id: 5,
        Name: "Viraj A",
        Email: "viraj.a@technovert.com",
        IsCaptain: false,
        IsQualityAnalyst: true,
        IsDeveloper: false,
      },
    ],
    Rank: 3,
    Score: 35,
  },
  {
    Id: 5,
    TeamName: "Team Five",
    TeamMembers: [
      {
        Id: 1,
        Name: "Kiran M",
        Email: "Kiran.m@technovert.com",
        IsCaptain: true,
        IsQualityAnalyst: false,
        IsDeveloper: true,
      },
      {
        Id: 2,
        Name: "Satya Sai K",
        Email: "sataya.k@technovert.com",
        IsCaptain: false,
        IsQualityAnalyst: false,
        IsDeveloper: true,
      },
      {
        Id: 3,
        Name: "Shubham M",
        Email: "Shubham.m@technovert.com",
        IsCaptain: false,
        IsQualityAnalyst: false,
        IsDeveloper: true,
      },
      {
        Id: 4,
        Name: "Arif M",
        Email: "arif.m@technovert.com",
        IsCaptain: false,
        IsQualityAnalyst: false,
        IsDeveloper: true,
      },
      {
        Id: 5,
        Name: "Sathosh G",
        Email: "santhosh.g@technovert.com",
        IsCaptain: false,
        IsQualityAnalyst: true,
        IsDeveloper: false,
      },
      {
        Id: 6,
        Name: "Veeresh G",
        Email: "veeresh.g@technovert.com",
        IsCaptain: false,
        IsQualityAnalyst: false,
        IsDeveloper: true,
      },
    ],
    Rank: 4,
    Score: 30,
  },
  {
    Id: 6,
    TeamName: "Team Six",
    TeamMembers: [
      {
        Id: 1,
        Name: "Abcde F",
        Email: "abcde.f@technovert.com",
        IsCaptain: true,
        IsQualityAnalyst: false,
        IsDeveloper: true,
      },
      {
        Id: 2,
        Name: "Ghijk L",
        Email: "ghijl.lk@technovert.com",
        IsCaptain: false,
        IsQualityAnalyst: false,
        IsDeveloper: true,
      },
      {
        Id: 3,
        Name: "Mnopq M",
        Email: "mnopq.m@technovert.com",
        IsCaptain: false,
        IsQualityAnalyst: false,
        IsDeveloper: true,
      },
      {
        Id: 4,
        Name: "Rstuv M",
        Email: "rstuv.m@technovert.com",
        IsCaptain: false,
        IsQualityAnalyst: false,
        IsDeveloper: true,
      },
      {
        Id: 5,
        Name: "Wxyxa G",
        Email: "wxyza.g@technovert.com",
        IsCaptain: false,
        IsQualityAnalyst: true,
        IsDeveloper: false,
      },
      {
        Id: 6,
        Name: "Bcdefg G",
        Email: "bcdefg.g@technovert.com",
        IsCaptain: false,
        IsQualityAnalyst: false,
        IsDeveloper: true,
      },
    ],
    Rank: 6,
    Score: 24,
  },
];
