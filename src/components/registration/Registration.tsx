import React from "react";
import NavThroughForm from "./NavThroughForm";
import "../../styles/registrationStyles/Registration.css";
import NavBarCopy from "../NavBarCopy";

const Registration: React.FC = () => {
  return (
    <div className="registerHome">
      <NavBarCopy />
      <div className="navRegister">
        <a className="aTag" href="#" style={{ color: "gray" }}>
          Home
        </a>{" "}
        /{" "}
        <a className="aTag" href="#">
          Register
        </a>
      </div>
      <NavThroughForm />
    </div>
  );
};

export default Registration;
