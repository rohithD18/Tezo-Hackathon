import React, { useState } from "react";
import "./App.css";
import { Login } from "./components/Login";
import Registration from "./components/registration/Registration";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { Schedule } from "./components/Schedule";
import MyTeam from "./components/MyTeam";
import NavBarCopy from "./components/NavBarCopy";
import MyProject from "./components/MyProject/MyProject";

import  HomePage  from "./components/HomePage";
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
        <>
        <Login setUserName={setUserName} />
        <NavBarCopy />
        <HomePage isRegister={false}/>
        </>
      ) : (
        <>
          <NavBarCopy />
          <Routes>
            <Route path="/" Component={() => <HomePage isRegister={true} />} />

            <Route path="/Registraion-Form" Component={Registration} />
            <Route path="/Schedule" Component={Schedule} />
            <Route path="/Teams" Component={MyTeam} />
            <Route path="/MyProject" Component={MyProject} />

          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
