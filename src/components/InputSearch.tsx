import React, { useState } from "react";
import "../styles/InputSearch.css";
import { ITeams } from "../Interfaces";
import { getFilteredTeams } from "../services/Services";
// import { getAUser } from "../services/Services";
// import { MsalProvider, useIsAuthenticated, useMsal } from "@azure/msal-react";
// import {
//   InteractionStatus,
//   PublicClientApplication,
// } from "@azure/msal-browser";
// import { msalConfig } from "../authConfig";
// const pca = new PublicClientApplication(msalConfig);
interface SearchComponentProps {
  setQuerySearch: (query: string) => void;
}

const InputSearch:  React.FC<SearchComponentProps>= ({ setQuerySearch }) => {
  // const [searchQ, setSearchQ] = useState<string>("");

  // useEffect(() => {

  //   searchQ.length > 2 && getAUser(searchQ);
  //   console.log("aaaaaaaaaa", searchQ, searchQ.length);
  // }, [searchQ]);
  // const isAuthenticated = useIsAuthenticated();
  // useEffect(() => {
  //   console.log(isAuthenticated, inProgress, instance);
  //   if (!isAuthenticated && inProgress === InteractionStatus.None) {
  //     instance.loginPopup();
  //   }
  // }, [isAuthenticated, inProgress, instance]);
  const [filteredTeams,setFilteredTeams]=useState<ITeams[]>();
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value.trim() === '') {
      setFilteredTeams([]);
    } else {
      setFilteredTeams(getFilteredTeams(e.target.value));
    }

  return (
    <div className="inputWithSearchIcon">
      <input
        type="text"
        value={inputValue}
        placeholder="Search by Team Name"
        onChange={handleChange}
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
      {filteredTeams && filteredTeams.length > 0 && (
        <ul className="dropdownSearch">
          {filteredTeams.map((team, index) => (
            <li key={index} className="dropDownItem" onClick={(e) => {
             
                  // handleSelectItem(team);
                  handleClickItem(team.TeamName); 
                }} 
            >{team.TeamName}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputSearch;
