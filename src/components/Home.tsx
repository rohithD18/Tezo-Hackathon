import React from "react";
import bgImage from "../assets/bgImage.jpg";
import "../styles/Home.css";
import NavBarCopy from "./NavBarCopy";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="hex">
      <div className="bottomShape">
        <div className="introDiv">
          <h1>
            Join the Tezo <br /> Hackathon!
          </h1>
          <p>Welcome to Tezo Hackathon</p>
          <button
            onClick={() => navigate("/Registraion-Form")}
            id="registerBtn"
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
