import React from "react";
import "./App.css";
import { Login } from "./components/Login";
import Registration from "./components/registration/Registration";
import MenuSection from "./components/MenuSection";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useMsal } from "@azure/msal-react";
import { Schedule } from "./components/Schedule";
import MyTeam from "./components/MyTeam";

const App: React.FC = () => {
  const { instance } = useMsal();
  const myAccounts = instance.getAllAccounts();
  console.log(myAccounts);

  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" Component={Home} /> */}
        <Route path="/" Component={Registration} />

        {/* <Route path="/Registraion-Form" Component={Registration} /> */}
      </Routes>
    </div>
  );
};

export default App;
