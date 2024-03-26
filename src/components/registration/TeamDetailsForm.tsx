import React, { useEffect, useState } from "react";
// import Members from "./Members";
import profileImg from "../../assets/profilepic.jpg";
import CheckBoxIcon from "../CheckBoxIcon";
import { membersArray } from "./MembersA";
import { ITeams, ITeamMems } from "../../Interfaces";
// import membersArray from "../../Memebers.json";

const TeamDetailsForm: React.FC = () => {
  const [teamName, setTeamName] = useState<string>("");
  const [captain, setCaptain] = useState<string>();
  const [selectedId, setSelectedId] = useState<number>(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [teamDetails, setTeamDetails] = useState<ITeams>({
    Id: 1,
    TeamName: "",
    TeamMembers: [],
    Rank: 0,
    Score: 0,
  });
  const [fileInput, setFileInput] = useState<HTMLInputElement | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };
  const handleClick = (index: number) => {
    setSelectedId(index);
  };
  useEffect(() => {
    setCaptain(membersArray[selectedId]?.Name);
    membersArray.forEach(
      (item, index) => (item.IsCaptain = index === selectedId ? true : false)
    );
    setTeamDetails((prevObject) => ({
      ...prevObject,
      TeamName: teamName,
      TeamMembers: membersArray,
    }));
  }, [selectedId, captain, teamName]);
  // console.log(teamDetails);

  return (
    <div>
      <p id="selectMemHead">Team Details</p>
      <p id="infoHeading1">
        Your team will be represented by this name throughout the platform
      </p>
      <div className="profilePicSelectDiv">
        <p>Team Logo</p>
        <p style={{ fontSize: "16px" }}>
          Add a team logo to personalise the team
        </p>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e)}
          style={{ display: "none" }}
          ref={(fileInput) => {
            setFileInput(fileInput);
          }} // For accessing the input element
        />
        <img
          onClick={() => fileInput?.click()}
          src={selectedFile ? URL.createObjectURL(selectedFile) : profileImg}
          alt="Profile"
        />
      </div>
      <div className="teamNameInpDiv">
        <p>Team Name</p>
        <input
          type="text"
          placeholder="Enter a team name"
          onChange={(e) => setTeamName(e.target.value)}
        />
      </div>
      <div className="selectCaptainSec">
        <p id="captainLbl">Select a captain</p>
        <div className="selectACaptianDiv">
          {membersArray.map((item, index) => {
            return (
              <div
                key={index}
                className="mapMemberDiv"
                onClick={() => handleClick(index)}
              >
                <CheckBoxIcon
                  // isClicked={dataFromCheckBoxIcon}
                  setSelectedId={setSelectedId}
                  index={index}
                  selectedId={selectedId}
                />
                <img src={profileImg} alt="profile" />
                <p>
                  {item?.Name} <br />
                  <span>{item?.EmailAddress}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamDetailsForm;
