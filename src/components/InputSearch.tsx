import React, { useEffect, useState } from "react";
import "../styles/InputSearch.css";
import { IProject, ITeams, IUsers } from "../Interfaces";
import {
  getAllUsers,
  getFilteredMembers,
  getFilteredProjects,
  getFilteredTeams,
  getUserByEmail,
  getUserByName,
  updateUser,
} from "../services/Services";
import { IAllUsers } from "../services/Interface/HackathonInterface";
interface SearchComponentProps {
  setQuerySearch: (query: string) => void;
  currentScreen: string;
}

const InputSearch: React.FC<SearchComponentProps> = ({
  setQuerySearch,
  currentScreen,
}: SearchComponentProps) => {
  // console.log(currentScreen);

  const [filteredTeams, setFilteredTeams] = useState<ITeams[] | IProject[]>([]);
  const [filteredMembers, setFilteredMembers] = useState<IAllUsers[]>([]);

  const [inputValue, setInputValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value.trim() === "") {
      setFilteredTeams([]);
    } else if (currentScreen === "SelectMembers") {
      getFilteredMembers(e.target.value).then((res) => setFilteredMembers(res));
    } else if (currentScreen === "ProjectManagment") {
      setFilteredTeams(getFilteredProjects(e.target.value));
    } else {
      setFilteredTeams(getFilteredTeams(e.target.value));
    }
  };
  const handleClickItem = (item: string) => {
    if (item.trim() === "") {
      setFilteredTeams([]);
    } else {
      setQuerySearch(item);
      setInputValue("");
      setFilteredTeams([]);
      setFilteredMembers([]);
    }

    console.log(item);

    getUserByName(item).then((res) => updateUser(res, "register"));
  };
  const handlekeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setQuerySearch(inputValue);
      getUserByName(inputValue).then((res) => updateUser(res, "register"));
      setInputValue("");
      setFilteredMembers([]);
      setFilteredTeams([]);
    }
  };
  return (
    <div className="inputWithSearchIcon">
      <input
        type="text"
        value={inputValue}
        placeholder={
          currentScreen === "SelectMembers"
            ? "Search by Name"
            : "Search by Team Name"
        }
        onChange={handleChange}
        onKeyDown={(e) => handlekeyDown(e)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-search"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
      </svg>
      {filteredTeams.length > 0 ? (
        <ul className="dropdownSearch">
          {filteredTeams.map((team, index) => (
            <li
              key={index}
              className="dropDownItem"
              onClick={() => {
                // handleSelectItem(team);
                handleClickItem(team.TeamName);
              }}
            >
              {team.TeamName}
            </li>
          ))}
        </ul>
      ) : (
        filteredMembers.length > 0 && (
          <ul className="dropdownSearch">
            {filteredMembers.map((team, index) => (
              <li
                key={index}
                className="dropDownItem"
                onClick={() => {
                  // handleSelectItem(team);
                  handleClickItem(team.name);
                }}
              >
                {team.name}
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
};

export default InputSearch;
