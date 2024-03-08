import React, { useState } from "react";
import "./App.css";
import { Login } from "./components/Login";
import Registration from "./components/registration/Registration";
import MenuSection from "./components/MenuSection";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useMsal } from "@azure/msal-react";
import { Schedule } from "./components/Schedule";
import MyTeam from "./components/MyTeam";
import NavBarCopy from "./components/NavBarCopy";

const App: React.FC = () => {
  console.log("userNameeeee", localStorage.getItem("username")?.toString());

  return (
    <div className="App">
      {!localStorage.getItem("username")?.toString() ? (
        <Login />
      ) : (
        <Routes>
          <Route path="/" Component={Home} />

          <Route path="/Registraion-Form" Component={Registration} />
          <Route path="/Schedule" Component={Schedule} />
          <Route path="/Teams" Component={MyTeam} />
        </Routes>
      )}
    </div>
  );
};

export default App;
