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
          Click to upload team logo to personalise the team{"  "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="18"
            fill="currentColor"
            className="bi bi-upload"
            viewBox="0 0 16 16"
            fontWeight="700"
          >
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
          </svg>{" "}
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
