import React, { useState } from "react";
import InputSearch from "../InputSearch";
import Dropdown from "../Dropdown";
import Members from "./Members";
import { useFetch } from "../../services/Services";

const SelectMember: React.FC = () => {
  const [querySearch, setQuerySearch] = useState<string>("");
  const { isQA, isLimitAchieved, membersArray } = useFetch(
    querySearch,
    setQuerySearch
  );

  const greenChecksvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="rgb(43 196 107)"
      className="bi bi-check-circle-fill"
      viewBox="0 0 16 17"
      style={{ marginRight: "6px" }}
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
    </svg>
  );
  const fadedChecksvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="rgb(180 180 180)"
      className="bi bi-check-circle-fill"
      viewBox="0 0 16 17"
      style={{ marginRight: "6px" }}
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
    </svg>
  );
  return (
    <div>
      <p id="selectMemHead">Select Members</p>
      <p id="infoHeading1">
        An email invite will be sent on your behalf to the selected members
      </p>
      <div className="searchIcon">
        <InputSearch setQuerySearch={setQuerySearch} />
        <Dropdown />
      </div>
      <div className="rulForTeam">
        <p>Your team must have:</p>
        <p id="svgP">
          {isQA ? greenChecksvg : fadedChecksvg} 1 Quality Analyst
        </p>
        <p id="svgP">
          {membersArray.length > 4 ? greenChecksvg : fadedChecksvg} At least 5
          members
        </p>
        <p id="svgP">
          {isLimitAchieved ? greenChecksvg : fadedChecksvg} Maximum of 7 members
        </p>
      </div>
      <div className="teamMembersDiv">
        <div className="membersNav">
          <p>Selected Members</p>
          <p>
            {"("}
            {membersArray.length} of 7 selected{")"}
          </p>
        </div>
        {/* <div> */}
        <Members teamMembers={membersArray} />
      </div>
    </div>
  );
};

export default SelectMember;
