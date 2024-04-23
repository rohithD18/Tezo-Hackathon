import {
  IAllProject,
  IAllTeams,
  IAllUsers,
  IPointsTable,
  ITeamMember,
} from "./Interface/HackathonInterface";

export const AllUsers: IAllUsers[] = [
  {
    id: 1,
    name: "John Doe",
    email: "likitha.k@example.com",
    employeeId: "EMP001",
    department: 101,
    profilePicture: "Software Engineer",
    role: "Admin",
    isRegistered: true,
    registeredDate: new Date(),
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    employeeId: "EMP002",
    department: 2,
    profilePicture: "Data Analyst",
    role: "Analyst",
    isRegistered: true,
    registeredDate: new Date(),
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    employeeId: "EMP003",
    department: 1,
    profilePicture: "UI/UX Designer",
    role: "Designer",
    isRegistered: true,
    registeredDate: new Date(),
  },
  {
    id: 4,
    name: "Bob Williams",
    email: "bob.williams@example.com",
    employeeId: "EMP004",
    department: 2,
    profilePicture: "Project Manager",
    role: "Manager",
    isRegistered: true,
    registeredDate: new Date(),
  },
  {
    id: 5,
    name: "Emily Brown",
    email: "emily.brown@example.com",
    employeeId: "EMP005",
    department: 2,
    profilePicture: "Marketing Specialist",
    role: "Specialist",
    isRegistered: true,
    registeredDate: new Date(),
  },
  {
    id: 6,
    name: "Michael Davis",
    email: "michael.davis@example.com",
    employeeId: "EMP006",
    department: 2,
    profilePicture: "Financial Analyst",
    role: "Analyst",
    isRegistered: true,
    registeredDate: new Date(),
  },
  {
    id: 7,
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    employeeId: "EMP007",
    department: 1,
    profilePicture: "HR Manager",
    role: "Manager",
    isRegistered: true,
    registeredDate: new Date(),
  },
  {
    id: 8,
    name: "David Martinez",
    email: "david.martinez@example.com",
    employeeId: "EMP008",
    department: 2,
    profilePicture: "Software Developer",
    role: "Developer",
    isRegistered: true,
    registeredDate: new Date(),
  },
  {
    id: 9,
    name: "Olivia Taylor",
    email: "olivia.taylor@example.com",
    employeeId: "EMP009",
    department: 1,
    profilePicture: "System Administrator",
    role: "Administrator",
    isRegistered: true,
    registeredDate: new Date(),
  },
  {
    id: 10,
    name: "James Moore",
    email: "james.moore@example.com",
    employeeId: "EMP010",
    department: 2,
    profilePicture: "Data Scientist",
    role: "Scientist",
    isRegistered: true,
    registeredDate: new Date(),
  },
  {
    id: 11,
    name: "Sophia Clark",
    email: "sophia.clark@example.com",
    employeeId: "EMP011",
    department: 2,
    profilePicture: "Quality Assurance Analyst",
    role: "Analyst",
    isRegistered: true,
    registeredDate: new Date(),
  },
  {
    id: 12,
    name: "Daniel Lee",
    email: "daniel.lee@example.com",
    employeeId: "EMP012",
    department: 2,
    profilePicture: "Network Engineer",
    role: "Engineer",
    isRegistered: true,
    registeredDate: new Date(),
  },
  {
    id: 13,
    name: "Ava Rodriguez",
    email: "ava.rodriguez@example.com",
    employeeId: "EMP013",
    department: 2,
    profilePicture: "Content Writer",
    role: "Writer",
    isRegistered: true,
    registeredDate: new Date(),
  },
  {
    id: 14,
    name: "Ethan Hall",
    email: "ethan.hall@example.com",
    employeeId: "EMP014",
    department: 2,
    profilePicture: "Business Analyst",
    role: "Analyst",
    isRegistered: true,
    registeredDate: new Date(),
  },
  {
    id: 15,
    name: "Mia Garcia",
    email: "mia.garcia@example.com",
    employeeId: "EMP015",
    department: 2,
    profilePicture: "Graphic Designer",
    role: "Designer",
    isRegistered: true,
    registeredDate: new Date(),
  },
  {
    id: 16,
    name: "Likitha Kattamudi",
    email: "likitha.k@Technovert.com",
    employeeId: "EMP016",
    department: 2,
    profilePicture: "Technical Support Specialist",
    role: "Admin",
    isRegistered: true,
    registeredDate: new Date(),
  },
  {
    id: 17,
    name: "Isabella Hernandez",
    email: "isabella.hernandez@example.com",
    employeeId: "EMP017",
    department: 2,
    profilePicture: "Product Manager",
    role: "Manager",
    isRegistered: true,
    registeredDate: new Date(),
  },
  {
    id: 18,
    name: "William Young",
    email: "william.young@example.com",
    employeeId: "EMP018",
    department: 2,
    profilePicture: "Sales Representative",
    role: "Representative",
    isRegistered: true,
    registeredDate: new Date(),
  },
  {
    id: 19,
    name: "Rohith Dudam",
    email: "rohith.d@Technovert.com",
    employeeId: "EMP019",
    department: 2,
    profilePicture: "Customer Service Representative",
    role: "Admin",
    isRegistered: true,
    registeredDate: new Date(),
  },
  {
    id: 20,
    name: "Liam Rivera",
    email: "liam.rivera@example.com",
    employeeId: "EMP020",
    department: 2,
    profilePicture: "Legal Advisor",
    role: "Admin",
    isRegistered: true,
    registeredDate: new Date(),
  },
];
console.log(AllUsers);

export const AllProject: IAllProject[] = [
  {
    Id: 1,
    ProjectName: "Project 1",
    Description: "Description of Project 1",
    ProjectStatus: 1,
    DetailedDescription: "Detailed description of Project 1",
    ProjectRegisteredDate: new Date(),
    SubmittedDate: new Date(),
    PresentationDate: new Date(),
    Comments: "Comments for Project 1",
    TeamId: 1,
  },
  {
    Id: 2,
    ProjectName: "Project 2",
    Description: "Description of Project 2",
    ProjectStatus: 2,
    DetailedDescription: "Detailed description of Project 2",
    ProjectRegisteredDate: new Date(),
    SubmittedDate: new Date(),
    PresentationDate: new Date(),
    Comments: "Comments for Project 2",
    TeamId: 2,
  },
  {
    Id: 3,
    ProjectName: "Project 3",
    Description: "Description of Project 3",
    ProjectStatus: 3,
    DetailedDescription: "Detailed description of Project 3",
    ProjectRegisteredDate: new Date(),
    SubmittedDate: new Date(),
    PresentationDate: new Date(),
    Comments: "Comments for Project 3",
    TeamId: 3,
  },
  {
    Id: 4,
    ProjectName: "Project 4",
    Description: "Description of Project 4",
    ProjectStatus: 4,
    DetailedDescription: "Detailed description of Project 4",
    ProjectRegisteredDate: new Date(),
    SubmittedDate: new Date(),
    PresentationDate: new Date(),
    Comments: "Comments for Project 4",
    TeamId: 4,
  },
  {
    Id: 5,
    ProjectName: "Project 5",
    Description: "Description of Project 5",
    ProjectStatus: 5,
    DetailedDescription: "Detailed description of Project 5",
    ProjectRegisteredDate: new Date(),
    SubmittedDate: new Date(),
    PresentationDate: new Date(),
    Comments: "Comments for Project 5",
    TeamId: 5,
  },
  {
    Id: 6,
    ProjectName: "Project 6",
    Description: "Description of Project 6",
    ProjectStatus: 1,
    DetailedDescription: "Detailed description of Project 6",
    ProjectRegisteredDate: new Date(),
    SubmittedDate: new Date(),
    PresentationDate: new Date(),
    Comments: "Comments for Project 6",
    TeamId: 6,
  },
  {
    Id: 7,
    ProjectName: "Project 7",
    Description: "Description of Project 7",
    ProjectStatus: 2,
    DetailedDescription: "Detailed description of Project 7",
    ProjectRegisteredDate: new Date(),
    SubmittedDate: new Date(),
    PresentationDate: new Date(),
    Comments: "Comments for Project 7",
    TeamId: 7,
  },
  {
    Id: 8,
    ProjectName: "Project 8",
    Description: "Description of Project 8",
    ProjectStatus: 3,
    DetailedDescription: "Detailed description of Project 8",
    ProjectRegisteredDate: new Date(),
    SubmittedDate: new Date(),
    PresentationDate: new Date(),
    Comments: "Comments for Project 8",
    TeamId: 8,
  },
  {
    Id: 9,
    ProjectName: "Project 9",
    Description: "Description of Project 9",
    ProjectStatus: 4,
    DetailedDescription: "Detailed description of Project 9",
    ProjectRegisteredDate: new Date(),
    SubmittedDate: new Date(),
    PresentationDate: new Date(),
    Comments: "Comments for Project 9",
    TeamId: 9,
  },
  {
    Id: 10,
    ProjectName: "Project 10",
    Description: "Description of Project 10",
    ProjectStatus: 5,
    DetailedDescription: "Detailed description of Project 10",
    ProjectRegisteredDate: new Date(),
    SubmittedDate: new Date(),
    PresentationDate: new Date(),
    Comments: "Comments for Project 10",
    TeamId: 10,
  },
];

console.log(AllProject);

export const AllTeams: IAllTeams[] = [
  { id: 1, teamName: "Team 1", teamLogo: "logo_url_for_team_1" },
  { id: 2, teamName: "Team 2", teamLogo: "logo_url_for_team_2" },
  { id: 3, teamName: "Team 3", teamLogo: "logo_url_for_team_3" },
  { id: 4, teamName: "Team 4", teamLogo: "logo_url_for_team_4" },
  { id: 5, teamName: "Team 5", teamLogo: "logo_url_for_team_5" },
  { id: 6, teamName: "Team 6", teamLogo: "logo_url_for_team_6" },
  { id: 7, teamName: "Team 7", teamLogo: "logo_url_for_team_7" },
  { id: 8, teamName: "Team 8", teamLogo: "logo_url_for_team_8" },
  { id: 9, teamName: "Team 9", teamLogo: "logo_url_for_team_9" },
  { id: 10, teamName: "Team 10", teamLogo: "logo_url_for_team_10" },
  { id: 11, teamName: "Team 11", teamLogo: "logo_url_for_team_11" },
  { id: 12, teamName: "Team 12", teamLogo: "logo_url_for_team_12" },
  { id: 13, teamName: "Team 13", teamLogo: "logo_url_for_team_13" },
  { id: 14, teamName: "Team 14", teamLogo: "logo_url_for_team_14" },
  { id: 15, teamName: "Team 15", teamLogo: "logo_url_for_team_15" },
  { id: 16, teamName: "Team 16", teamLogo: "logo_url_for_team_16" },
  { id: 17, teamName: "Team 17", teamLogo: "logo_url_for_team_17" },
  { id: 18, teamName: "Team 18", teamLogo: "logo_url_for_team_18" },
  { id: 19, teamName: "Team 19", teamLogo: "logo_url_for_team_19" },
  { id: 20, teamName: "Team 20", teamLogo: "logo_url_for_team_20" },
];

console.log(AllTeams);
export const TeamMember: ITeamMember[] = [
  { id: 1, teamId: 1, personId: 1, role: 1, isAdmin: true },
  { id: 2, teamId: 1, personId: 2, role: 2, isAdmin: false },
  { id: 3, teamId: 2, personId: 3, role: 1, isAdmin: true },
  { id: 4, teamId: 2, personId: 4, role: 2, isAdmin: false },
  { id: 5, teamId: 3, personId: 5, role: 1, isAdmin: true },
  { id: 6, teamId: 3, personId: 6, role: 2, isAdmin: false },
  { id: 7, teamId: 4, personId: 7, role: 1, isAdmin: true },
  { id: 8, teamId: 4, personId: 8, role: 2, isAdmin: false },
  { id: 9, teamId: 5, personId: 9, role: 1, isAdmin: true },
  { id: 10, teamId: 5, personId: 10, role: 2, isAdmin: false },
  { id: 11, teamId: 6, personId: 11, role: 1, isAdmin: true },
  { id: 12, teamId: 6, personId: 12, role: 2, isAdmin: false },
  { id: 13, teamId: 7, personId: 13, role: 1, isAdmin: true },
  { id: 14, teamId: 7, personId: 14, role: 2, isAdmin: false },
  { id: 15, teamId: 8, personId: 15, role: 1, isAdmin: true },
  { id: 16, teamId: 8, personId: 16, role: 2, isAdmin: false },
  { id: 17, teamId: 9, personId: 17, role: 1, isAdmin: true },
  { id: 18, teamId: 9, personId: 18, role: 2, isAdmin: false },
  { id: 19, teamId: 10, personId: 19, role: 1, isAdmin: true },
  { id: 20, teamId: 10, personId: 20, role: 2, isAdmin: false },
];
console.log(TeamMember);

export const PointsTable: IPointsTable[] = [
  {
    Id: 1,
    TeamId: 1,
    Team: "Team A",
    RegistrationScore: 85,
    ProjectSubmissionScore: 90,
    ProjectDemoScore: 80,
    OverAllScore: 88,
  },
  {
    Id: 2,
    TeamId: 2,
    Team: "Team B",
    RegistrationScore: 80,
    ProjectSubmissionScore: 85,
    ProjectDemoScore: 75,
    OverAllScore: 80,
  },
  {
    Id: 3,
    TeamId: 3,
    Team: "Team C",
    RegistrationScore: 90,
    ProjectSubmissionScore: 88,
    ProjectDemoScore: 82,
    OverAllScore: 87,
  },
  {
    Id: 4,
    TeamId: 4,
    Team: "Team D",
    RegistrationScore: 85,
    ProjectSubmissionScore: 90,
    ProjectDemoScore: 80,
    OverAllScore: 88,
  },
  {
    Id: 5,
    TeamId: 5,
    Team: "Team E",
    RegistrationScore: 80,
    ProjectSubmissionScore: 85,
    ProjectDemoScore: 75,
    OverAllScore: 80,
  },
  {
    Id: 6,
    TeamId: 6,
    Team: "Team F",
    RegistrationScore: 90,
    ProjectSubmissionScore: 88,
    ProjectDemoScore: 82,
    OverAllScore: 87,
  },
  {
    Id: 7,
    TeamId: 7,
    Team: "Team G",
    RegistrationScore: 85,
    ProjectSubmissionScore: 90,
    ProjectDemoScore: 80,
    OverAllScore: 88,
  },
  {
    Id: 8,
    TeamId: 8,
    Team: "Team H",
    RegistrationScore: 80,
    ProjectSubmissionScore: 85,
    ProjectDemoScore: 75,
    OverAllScore: 80,
  },
  {
    Id: 9,
    TeamId: 9,
    Team: "Team I",
    RegistrationScore: 90,
    ProjectSubmissionScore: 88,
    ProjectDemoScore: 82,
    OverAllScore: 87,
  },
  {
    Id: 10,
    TeamId: 10,
    Team: "Team J",
    RegistrationScore: 85,
    ProjectSubmissionScore: 90,
    ProjectDemoScore: 80,
    OverAllScore: 88,
  },
  {
    Id: 11,
    TeamId: 11,
    Team: "Team K",
    RegistrationScore: 80,
    ProjectSubmissionScore: 85,
    ProjectDemoScore: 75,
    OverAllScore: 80,
  },
  {
    Id: 12,
    TeamId: 12,
    Team: "Team L",
    RegistrationScore: 90,
    ProjectSubmissionScore: 88,
    ProjectDemoScore: 82,
    OverAllScore: 87,
  },
  {
    Id: 13,
    TeamId: 13,
    Team: "Team M",
    RegistrationScore: 85,
    ProjectSubmissionScore: 90,
    ProjectDemoScore: 80,
    OverAllScore: 88,
  },
  {
    Id: 14,
    TeamId: 14,
    Team: "Team N",
    RegistrationScore: 80,
    ProjectSubmissionScore: 85,
    ProjectDemoScore: 75,
    OverAllScore: 80,
  },
  {
    Id: 15,
    TeamId: 15,
    Team: "Team O",
    RegistrationScore: 90,
    ProjectSubmissionScore: 88,
    ProjectDemoScore: 82,
    OverAllScore: 87,
  },
  {
    Id: 16,
    TeamId: 16,
    Team: "Team P",
    RegistrationScore: 85,
    ProjectSubmissionScore: 90,
    ProjectDemoScore: 80,
    OverAllScore: 88,
  },
  {
    Id: 17,
    TeamId: 17,
    Team: "Team Q",
    RegistrationScore: 80,
    ProjectSubmissionScore: 85,
    ProjectDemoScore: 75,
    OverAllScore: 80,
  },
  {
    Id: 18,
    TeamId: 18,
    Team: "Team R",
    RegistrationScore: 90,
    ProjectSubmissionScore: 88,
    ProjectDemoScore: 82,
    OverAllScore: 87,
  },
  {
    Id: 19,
    TeamId: 19,
    Team: "Team S",
    RegistrationScore: 85,
    ProjectSubmissionScore: 90,
    ProjectDemoScore: 80,
    OverAllScore: 88,
  },
  {
    Id: 20,
    TeamId: 20,
    Team: "Team T",
    RegistrationScore: 80,
    ProjectSubmissionScore: 85,
    ProjectDemoScore: 75,
    OverAllScore: 80,
  },
];

console.log(PointsTable);
