import React, { useState } from "react";
// import Members from "./Members";
import profileImg from "../../assets/profilepic.jpg";
import CheckBoxIcon from "../CheckBoxIcon";
import { membersArray } from "./MembersA";
// import membersArray from "../../Memebers.json";

const TeamDetailsForm: React.FC = () => {
  // const [isSelected, setIsSelected] = useState(false);
  const [selectedId, setSelectedId] = useState<number>(0);
  // const dataFromCheckBoxIcon = (data) => {
  //   setIsSelected(data); // or set the data to a state
  // };

  return (
    <div>
      <h5>Team Details</h5>
      <p>Your team will be represented by this name throughout the platform</p>
      <div className="profilePicSelectDiv">
        <p>Team Logo</p>
        <p style={{ fontSize: "14px" }}>
          Add a team logo to personalise the team
        </p>
        <img src={profileImg} alt="Profile" />
      </div>
      <div className="teamNameInpDiv">
        <p>Team Name</p>
        <input type="text" placeholder="Enter a team name" />
      </div>
      <div className="selectCaptainSec">
        <p id="captainLbl">Select a captain</p>
        <div className="selectACaptianDiv">
          {membersArray.map((item, index) => {
            return (
              <div
                key={index}
                className="mapMemberDiv"
                onClick={() => setSelectedId(index)}
              >
                <CheckBoxIcon
                  // isClicked={dataFromCheckBoxIcon}
                  setSelectedId={setSelectedId}
                  index={index}
                  selectedId={selectedId}
                />
                {/*  {" "}
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value={item}
                  /> */}
                <img src={profileImg} alt="profile" />
                <p>
                  {item.Name} <br />
                  <span>{item.email}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className="teamMembersDiv">
        <div className="nextCancelDiv">
          <button id="cancelBtn">Cancel</button>
          <button id="nextBtn">Next</button>
        </div>
      </div> */}
    </div>
  );
};

export default TeamDetailsForm;
