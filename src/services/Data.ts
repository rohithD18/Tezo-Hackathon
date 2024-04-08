import { ITeams, IUsers } from "../Interfaces";

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

function getRandomDate(): Date {
  const start = new Date(2022, 0, 1); // Start date (Jan 1, 2022)
  const end = new Date(); // Current date

  // Get a random time between start and end dates
  const randomTime =
    start.getTime() + Math.random() * (end.getTime() - start.getTime());

  return new Date(randomTime);
}
export const ApplicationData: IApplications[] = [
  {
    Id: 1,
    TeamName: "Team One",
    ProjectName: "Project One Application Manager",
    TeamCaptian: "Captain One",
    ProjectedSubmitted: false,
    SubmissionDate: getRandomDate(),
    Status: "Accepted",
    ProjectDescription: "Description",
  },
  {
    Id: 2,
    TeamName: "Team Two",
    ProjectName: "Project Two",
    TeamCaptian: "Captain Two",
    ProjectedSubmitted: true,
    SubmissionDate: getRandomDate(),
    Status: "Rejected",
    ProjectDescription: "Description for second team",
  },
  {
    Id: 3,
    TeamName: "Team Three",
    ProjectName: "Project Three",
    TeamCaptian: "Captain Three",
    ProjectedSubmitted: true,
    SubmissionDate: getRandomDate(),
    Status: "Accepted",
    ProjectDescription: "Description for third team",
  },
  {
    Id: 4,
    TeamName: "Team Four",
    ProjectName: "Project Four",
    TeamCaptian: "Captain Four",
    ProjectedSubmitted: true,
    SubmissionDate: getRandomDate(),
    Status: "Accepted",
    ProjectDescription: "Description for fourth team",
  },
  {
    Id: 5,
    TeamName: "Team Five",
    ProjectName: "Project Five",
    TeamCaptian: "Captain Five",
    ProjectedSubmitted: false,
    SubmissionDate: getRandomDate(),
    Status: "Pending",
    ProjectDescription: "Description for fifth team",
  },
  {
    Id: 6,
    TeamName: "Team Six",
    ProjectName: "Project Six",
    TeamCaptian: "Captain Six",
    ProjectedSubmitted: true,
    SubmissionDate: getRandomDate(),
    Status: "Accepted",
    ProjectDescription: "Description for sixth team",
  },
  {
    Id: 7,
    TeamName: "Team Seven",
    ProjectName: "Project Seven",
    TeamCaptian: "Captain Seven",
    ProjectedSubmitted: false,
    SubmissionDate: getRandomDate(),
    Status: "Rejected",
    ProjectDescription: "Description for seventh team",
  },
  {
    Id: 8,
    TeamName: "Team Eight",
    ProjectName: "Project Eight",
    TeamCaptian: "Captain Eight",
    ProjectedSubmitted: true,
    SubmissionDate: getRandomDate(),
    Status: "Pending",
    ProjectDescription: "Description for eighth team",
  },
  {
    Id: 9,
    TeamName: "Team Nine",
    ProjectName: "Project Nine",
    TeamCaptian: "Captain Nine",
    ProjectedSubmitted: true,
    SubmissionDate: getRandomDate(),
    Status: "Accepted",
    ProjectDescription: "Description for ninth team",
  },
  {
    Id: 10,
    TeamName: "Team Ten",
    ProjectName: "Project Ten",
    TeamCaptian: "Captain Ten",
    ProjectedSubmitted: true,
    SubmissionDate: getRandomDate(),
    Status: "Accepted",
    ProjectDescription: "Description for tenth team",
  },
  {
    Id: 11,
    TeamName: "Team Eleven",
    ProjectName: "Project Eleven",
    TeamCaptian: "Captain Eleven",
    ProjectedSubmitted: true,
    SubmissionDate: new Date(),
    Status: "Accepted",
    ProjectDescription: "Description for eleventh team",
  },
  {
    Id: 12,
    TeamName: "Team Twelve",
    ProjectName: "Project Twelve",
    TeamCaptian: "Captain Twelve",
    ProjectedSubmitted: true,
    SubmissionDate: getRandomDate(),
    Status: "Pending",
    ProjectDescription: "Description for twelfth team",
  },
  {
    Id: 13,
    TeamName: "Team Twelve",
    ProjectName: "Project Twelve",
    TeamCaptian: "Captain Twelve",
    ProjectedSubmitted: true,
    SubmissionDate: getRandomDate(),
    Status: "Pending",
    ProjectDescription: "Description for twelfth team",
  },
  {
    Id: 14,
    TeamName: "Team Twelve",
    ProjectName: "Project Twelve",
    TeamCaptian: "Captain Twelve",
    ProjectedSubmitted: true,
    SubmissionDate: getRandomDate(),
    Status: "Pending",
    ProjectDescription: "Description for twelfth team",
  },
  {
    Id: 15,
    TeamName: "Team Twelve",
    ProjectName: "Project Twelve",
    TeamCaptian: "Captain Twelve",
    ProjectedSubmitted: true,
    SubmissionDate: getRandomDate(),
    Status: "Pending",
    ProjectDescription: "Description for twelfth team",
  },
  {
    Id: 16,
    TeamName: "Team Twelve",
    ProjectName: "Project Twelve",
    TeamCaptian: "Captain Twelve",
    ProjectedSubmitted: true,
    SubmissionDate: getRandomDate(),
    Status: "Pending",
    ProjectDescription: "Description for twelfth team",
  },
  {
    Id: 17,
    TeamName: "Team Twelve",
    ProjectName: "Project Twelve",
    TeamCaptian: "Captain Twelve",
    ProjectedSubmitted: true,
    SubmissionDate: getRandomDate(),
    Status: "Pending",
    ProjectDescription: "Description for twelfth team",
  },
  {
    Id: 18,
    TeamName: "Team Twelve",
    ProjectName: "Project Twelve",
    TeamCaptian: "Captain Twelve",
    ProjectedSubmitted: true,
    SubmissionDate: getRandomDate(),
    Status: "Pending",
    ProjectDescription: "Description for twelfth team",
  },
  {
    Id: 19,
    TeamName: "Team Twelve",
    ProjectName: "Project Twelve",
    TeamCaptian: "Captain Twelve",
    ProjectedSubmitted: true,
    SubmissionDate: getRandomDate(),
    Status: "Pending",
    ProjectDescription: "Description for twelfth team",
  },
  {
    Id: 20,
    TeamName: "Team Twelve",
    ProjectName: "Project Twelve",
    TeamCaptian: "Captain Twelve",
    ProjectedSubmitted: true,
    SubmissionDate: getRandomDate(),
    Status: "Pending",
    ProjectDescription: "Description for twelfth team",
  },
  {
    Id: 21,
    TeamName: "Team Twelve",
    ProjectName: "Project Twelve",
    TeamCaptian: "Captain Twelve",
    ProjectedSubmitted: true,
    SubmissionDate: getRandomDate(),
    Status: "Pending",
    ProjectDescription: "Description for twelfth team",
  },
  {
    Id: 22,
    TeamName: "Team Twelve",
    ProjectName: "Project Twelve",
    TeamCaptian: "Captain Twelve",
    ProjectedSubmitted: true,
    SubmissionDate: getRandomDate(),
    Status: "Pending",
    ProjectDescription: "Description for twelfth team",
  },
  {
    Id: 23,
    TeamName: "Team Twelve",
    ProjectName: "Project Twelve",
    TeamCaptian: "Captain Twelve",
    ProjectedSubmitted: true,
    SubmissionDate: getRandomDate(),
    Status: "Pending",
    ProjectDescription: "Description for twelfth team",
  },
  {
    Id: 24,
    TeamName: "Team Twelve",
    ProjectName: "Project Twelve",
    TeamCaptian: "Captain Twelve",
    ProjectedSubmitted: true,
    SubmissionDate: getRandomDate(),
    Status: "Pending",
    ProjectDescription: "Description for twelfth team",
  },
  {
    Id: 25,
    TeamName: "Team Twelve",
    ProjectName: "Project Twelve",
    TeamCaptian: "Captain Twelve",
    ProjectedSubmitted: true,
    SubmissionDate: getRandomDate(),
    Status: "Pending",
    ProjectDescription: "Description for twelfth team",
  },
];

export const Teams: ITeams[] = [
  {
    Id: 1,
    TeamName: "Team One",
    TeamMembers: [
      {
        Id: 1,
        Name: "Rohith",
        EmailAddress: "rohith.d@technovert.com",
        IsCaptain: true,
        Department: "Developer",
      },
      {
        Id: 2,
        Name: "Naveen",
        EmailAddress: "naveen.t@technovert.com",
        IsCaptain: false,
        Department: "Developer",
      },
      {
        Id: 3,
        Name: "Likitha K",
        EmailAddress: "likitha.k@technovert.com",
        IsCaptain: false,
        Department: "Developer",
      },
      {
        Id: 4,
        Name: "Swati G",
        EmailAddress: "swati.g@technovert.com",
        IsCaptain: false,
        Department: "Developer",
      },
      {
        Id: 5,
        Name: "Prashanth E",
        EmailAddress: "prashanth.e@technovert.com",
        IsCaptain: false,
        Department: "QA",
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
        EmailAddress: "gnani.g@technovert.com",
        IsCaptain: true,
        Department: "Developer",
      },
      {
        Id: 2,
        Name: "Naresh Chakali",
        EmailAddress: "naresh.c@technovert.com",
        IsCaptain: false,
        Department: "Developer",
      },
      {
        Id: 3,
        Name: "Tarun V",
        EmailAddress: "tarun.v@technovert.com",
        IsCaptain: false,
        Department: "Developer",
      },
      {
        Id: 4,
        Name: "Naga Shashank G",
        EmailAddress: "shahshank.g@technovert.com",
        IsCaptain: false,
        Department: "Developer",
      },
      {
        Id: 5,
        Name: "Aditya N",
        EmailAddress: "aditya.n@technovert.com",
        IsCaptain: false,
        Department: "QA",
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
        EmailAddress: "saif.a@technovert.com",
        IsCaptain: true,
        Department: "Developer",
      },
      {
        Id: 2,
        Name: "Rishab O",
        EmailAddress: "rishab.o@technovert.com",
        IsCaptain: false,
        Department: "Developer",
      },
      {
        Id: 3,
        Name: "Krishna C",
        EmailAddress: "krishna.c@technovert.com",
        IsCaptain: false,
        Department: "Developer",
      },
      {
        Id: 4,
        Name: "Aditya S",
        EmailAddress: "aditya.s@technovert.com",
        IsCaptain: false,
        Department: "Developer",
      },
      {
        Id: 5,
        Name: "Praneeth",
        EmailAddress: "praneeth.t@technovert.com",
        IsCaptain: false,
        Department: "QA",
      },
      {
        Id: 6,
        Name: "Pavan K",
        EmailAddress: "pavan.k@technovert.com",
        IsCaptain: false,
        Department: "Developer",
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
        EmailAddress: "anudeep.m@technovert.com",
        IsCaptain: true,
        Department: "Developer",
      },
      {
        Id: 2,
        Name: "Sharath",
        EmailAddress: "Sharath.t@technovert.com",
        IsCaptain: false,
        Department: "Developer",
      },
      {
        Id: 3,
        Name: "Karthik K",
        EmailAddress: "karthik.k@technovert.com",
        IsCaptain: false,
        Department: "Developer",
      },
      {
        Id: 4,
        Name: "Sathish G",
        EmailAddress: "sathish.g@technovert.com",
        IsCaptain: false,
        Department: "Developer",
      },
      {
        Id: 5,
        Name: "Viraj A",
        EmailAddress: "viraj.a@technovert.com",
        IsCaptain: false,
        Department: "QA",
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
        EmailAddress: "Kiran.m@technovert.com",
        IsCaptain: true,
        Department: "Developer",
      },
      {
        Id: 2,
        Name: "Satya Sai K",
        EmailAddress: "sataya.k@technovert.com",
        IsCaptain: false,
        Department: "Developer",
      },
      {
        Id: 3,
        Name: "Shubham M",
        EmailAddress: "Shubham.m@technovert.com",
        IsCaptain: false,
        Department: "Developer",
      },
      {
        Id: 4,
        Name: "Arif M",
        EmailAddress: "arif.m@technovert.com",
        IsCaptain: false,
        Department: "Developer",
      },
      {
        Id: 5,
        Name: "Sathosh G",
        EmailAddress: "santhosh.g@technovert.com",
        IsCaptain: false,
        Department: "Developer",
      },
      {
        Id: 6,
        Name: "Veeresh G",
        EmailAddress: "veeresh.g@technovert.com",
        IsCaptain: false,
        Department: "Developer",
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
        EmailAddress: "abcde.f@technovert.com",
        IsCaptain: true,
        Department: "Developer",
      },
      {
        Id: 2,
        Name: "Ghijk L",
        EmailAddress: "ghijl.lk@technovert.com",
        IsCaptain: false,
        Department: "Developer",
      },
      {
        Id: 3,
        Name: "Mnopq M",
        EmailAddress: "mnopq.m@technovert.com",
        IsCaptain: false,
        Department: "Developer",
      },
      {
        Id: 4,
        Name: "Rstuv M",
        EmailAddress: "rstuv.m@technovert.com",
        IsCaptain: false,
        Department: "Developer",
      },
      {
        Id: 5,
        Name: "Wxyxa G",
        EmailAddress: "wxyza.g@technovert.com",
        IsCaptain: false,
        Department: "QA",
      },
      {
        Id: 6,
        Name: "Bcdefg G",
        EmailAddress: "bcdefg.g@technovert.com",
        IsCaptain: false,
        Department: "Developer",
      },
    ],
    Rank: 6,
    Score: 24,
  },
];

export const UsersData: IUsers[] = [
  {
    Id: 1,
    Name: "Emma Smith",
    EmailAddress: "emma.smith@example.com",
    Department: "QA",
    IsCaptain: false,
  },
  {
    Id: 2,
    Name: "James Johnson",
    EmailAddress: "james.johnson@example.com",
    Department: "Digital Transformation",
    IsCaptain: false,
  },
  {
    Id: 3,
    Name: "Olivia Brown",
    EmailAddress: "olivia.brown@example.com",
    Department: "Product Engineering",
    IsCaptain: false,
  },
  {
    Id: 4,
    Name: "William Wilson",
    EmailAddress: "william.wilson@example.com",
    Department: "Data Analytics",
    IsCaptain: false,
  },
  {
    Id: 5,
    Name: "Ava Taylor",
    EmailAddress: "ava.taylor@example.com",
    Department: "Digital Marketing",
    IsCaptain: false,
  },
  {
    Id: 6,
    Name: "Alexander Lee",
    EmailAddress: "alexander.lee@example.com",
    Department: "Digital Transformation",
    IsCaptain: false,
  },
  {
    Id: 7,
    Name: "Mia Martinez",
    EmailAddress: "mia.martinez@example.com",
    Department: "Data Analytics",
    IsCaptain: false,
  },
  {
    Id: 8,
    Name: "Ethan Anderson",
    EmailAddress: "ethan.anderson@example.com",
    Department: "Data Analytics",
    IsCaptain: false,
  },
  {
    Id: 9,
    Name: "Sophia Thomas",
    EmailAddress: "sophia.thomas@example.com",
    Department: "Digital Transformation",
    IsCaptain: false,
  },
  {
    Id: 10,
    Name: "Isabella Jackson",
    EmailAddress: "isabella.jackson@example.com",
    Department: "Data Analytics",
    IsCaptain: false,
  },
  {
    Id: 11,
    Name: "Michael White",
    EmailAddress: "michael.white@example.com",
    Department: "QA",
    IsCaptain: false,
  },
  {
    Id: 12,
    Name: "Charlotte Harris",
    EmailAddress: "charlotte.harris@example.com",
    Department: "Digital Transformation",
    IsCaptain: false,
  },
  {
    Id: 13,
    Name: "Liam Martin",
    EmailAddress: "liam.martin@example.com",
    Department: "Digital Marketing",
    IsCaptain: false,
  },
  {
    Id: 14,
    Name: "Amelia Thompson",
    EmailAddress: "amelia.thompson@example.com",
    Department: "Product Engineering",
    IsCaptain: false,
  },
  {
    Id: 15,
    Name: "Benjamin Garcia",
    EmailAddress: "benjamin.garcia@example.com",
    Department: "Digital Marketing",
    IsCaptain: false,
  },
  {
    Id: 16,
    Name: "Harper Martinez",
    EmailAddress: "harper.martinez@example.com",
    Department: "Product Engineering",
    IsCaptain: false,
  },
  {
    Id: 17,
    Name: "Emma Martinez",
    EmailAddress: "harper.martinez@example.com",
    Department: "Digital Transformation",
    IsCaptain: false,
  },
  {
    Id: 18,
    Name: "Dudam Martinez",
    EmailAddress: "harper.martinez@example.com",
    Department: "QA",
    IsCaptain: false,
  },
];
