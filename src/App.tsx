import React, { useState } from "react";
import "./App.css";
import { Login } from "./components/Login";
import { Route, Routes } from "react-router-dom";
import { Schedule } from "./components/Schedule";
import MyTeam from "./components/MyTeam";
import NavBarCopy from "./components/NavBarCopy";
import SubmissionClosed from "./components/submissionStatus/SubmissionClosed";
import SubmissionFailed from "./components/submissionStatus/FailedAndSuccessStatus";
import SessionInvitation from "./components/submissionStatus/SessionInvitation";
import SubmissionAccepeted from "./components/submissionStatus/SubmissionAccepeted";
import RejectedRework from "./components/submissionStatus/RejectedRework";
import HomePage from "./components/HomePage";
import MyProject from "./components/MyProject/MyProject";
import Application from "./components/dashboard/Application";
import Dashboard from "./components/dashboard/Dashboard";
import AllTeams from "./components/AllTeams";
import RegistrationForm from "./components/registration/RegistrationForm";
import TeamDetails from "./components/TeamDetails";
import Profile from "./components/Profile";

const App: React.FC = () => {
  console.log("userNameeeee", localStorage.getItem("username")?.toString());
  const [user, setUser] = useState<string>("");
  const setUserName = (data: string) => {
    setUser(data);
  };
  // console.log("user", user);

  return (
    <div className="App">
      {!user && !localStorage.getItem("username")?.toString() ? (
        <Login setUserName={setUserName} />
      ) : (
        <>
          <NavBarCopy />
          <Routes>
            <Route path="/" Component={() => <HomePage isRegister={false} />} />
            <Route path="/registration-form" Component={RegistrationForm} />
            <Route path="/schedule" Component={Schedule} />
            <Route path="/teams" Component={MyTeam} />
            <Route path="/teams/:teamNameParam" Component={TeamDetails} />
            <Route path="/rules" Component={RejectedRework} />
            <Route path="/myProject" Component={MyProject} />
            <Route path="/allteams" Component={AllTeams} />
            <Route path="/dashboard/" Component={Dashboard} />
            <Route path="/dashboard/:id" Component={Dashboard} />
            <Route path="/profile" Component={Profile} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
