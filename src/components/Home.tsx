import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import registrationImage from "../assets/registrationImage.png";
import { useNavigate } from "react-router-dom";
import { teamMembersArray } from "./TeamMembers";
import { ITeamMembers } from "../Interfaces";
import mainBG from "../assets/mainBG.png";
interface HomeProps {
  isRegister: boolean;
}
const Home: React.FC<HomeProps> = (props) => {
  const navigate = useNavigate();
  const [members, setMembers] = useState<ITeamMembers[]>(teamMembersArray);
  const visibleImages = members.slice(0, 3);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [buttonValue, setButtonValue] = useState<string>("");
  useEffect(() => {
    if (props.isRegister) {
      setTitle("Secure Your Spot at the Forefront! 🚀");
      setDescription(
        "Be among the first five teams to REGISTER and SUBMIT your project topics for an exclusive REVIEW by our esteemed judges. Stand out, get noticed, and pave your way to a VIP ONE-ON-ONE session"
      );
      setButtonValue("Register Now");
    } else {
      setTitle("Welcome to Tezo Hackathon!");
      setDescription("You’re registered for this hackathon");
      setButtonValue("Enter a submission");
    }
  }, [props.isRegister]);
  return (
    <div className="hex">
      <div className="bottomShape">
        <div className="introDiv">
          <div id="backgroundImage1">
            <div className="left">
              <div className="members">
                <div className="profileContainer">
                  {visibleImages.map((item, index) => (
                    <img
                      src={item.profileUrl}
                      key={index}
                      alt={`profile ${index}`}
                      style={{ left: `${index * 10}px` }}
                      className="profileIcon"
                    ></img>
                  ))}
                </div>
                <label className="noOfMembers">
                  {" "}
                  + {members.length} participating
                </label>
              </div>
              <h1 className="header">{title}</h1>
              <p className="description">{description}</p>
              <button
                onClick={() => navigate("/registration-form")}
                id="registerBtn"
              >
                {buttonValue}
              </button>
            </div>
          </div>
          <div id="backgroundImage2">
            <div className="right">
              <img
                src={registrationImage}
                alt="Registration pic"
                width={550}
                height={500}
                style={{ paddingBottom: 0 }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
