import React, { useEffect, useState } from "react";
import profileImg from "../../assets/profilepic.jpg";
import CheckBoxIcon from "../CheckBoxIcon";
import { membersArray } from "./MembersA";
import { ITeams } from "../../Interfaces";

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
        <p style={{ fontSize: "16px" }} onClick={() => fileInput?.click()}>
          Click to {selectedFile ? "change" : "upload"} team logo to personalise
          the team
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
        {!selectedFile ? (
          <svg
            onClick={() => fileInput?.click()}
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="44"
            fill="rgba(140, 140, 140, 1)"
            className="bi bi-file-earmark-arrow-up-fill"
            viewBox="0 0 16 16"
          >
            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M6.354 9.854a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 8.707V12.5a.5.5 0 0 1-1 0V8.707z" />
          </svg>
        ) : (
          <img
            onClick={() => fileInput?.click()}
            src={selectedFile ? URL.createObjectURL(selectedFile) : profileImg}
            alt="Profile"
          />
        )}
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
