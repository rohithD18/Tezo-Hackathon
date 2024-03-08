import React from "react";
import bgImage from "../assets/bgImage.jpg";
import "../styles/Home.css";
import NavBarCopy from "./NavBarCopy";

const Home: React.FC = () => {
  return (
    <div className="hex">
      <NavBarCopy />
      <div className="bottomShape">
        <div className="introDiv">
          <h1>
            Join the Tezo <br /> Hackathon!
          </h1>
          <p>Welcome to Tezo Hackathon</p>
          <button id="registerBtn">Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
