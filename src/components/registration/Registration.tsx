import React from "react";
import NavThroughForm from "./NavThroughForm";
import "../../styles/registrationStyles/Registration.css";

const Registration: React.FC = () => {
  return (
    <div className="registerHome">
      {/* <div className="navRegister">
        <a className="aTag" href="/" style={{ color: "gray" }}>
          Home
        </a>{" "}
        /{" "}
        <a className="aTag" href="#R">
          Register
        </a>
      </div> */}
      <NavThroughForm />
    </div>
  );
};

export default Registration;
