import React, { useState } from "react";
import "./App.css";
import { Login } from "./components/Login";
import Registration from "./components/registration/Registration";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { Schedule } from "./components/Schedule";
import MyTeam from "./components/MyTeam";
import NavBarCopy from "./components/NavBarCopy";
import SubmissionClosed from "./components/submissionStatus/SubmissionClosed";
import SubmissionFailed from "./components/submissionStatus/FailedAndSuccessStatus";
import SessionInvitation from "./components/submissionStatus/SessionInvitation";
import SubmissionAccepeted from "./components/submissionStatus/SubmissionAccepeted";
import RejectedRework from "./components/submissionStatus/RejectedRework";
const App: React.FC = () => {
  console.log("userNameeeee", localStorage.getItem("username")?.toString());
  const [user, setUser] = useState<string>("");
  const setUserName = (data: string) => {
    setUser(data);
  };
  console.log("user", user);

  return (
    <div className="App">
      {!user && !localStorage.getItem("username")?.toString() ? (
        <Login setUserName={setUserName} />
      ) : (
        <>
          <NavBarCopy />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/Registration-Form" Component={Registration} />
            <Route path="/Schedule" Component={Schedule} />
            <Route path="/Teams" Component={MyTeam} />
            <Route path="/Rules" Component={RejectedRework} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
