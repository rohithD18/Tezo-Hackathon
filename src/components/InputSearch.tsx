import React, { useEffect, useState } from "react";
import "../styles/InputSearch.css";
import { getAUser } from "../services/Services";
import { Teams } from "../services/Data";
// import { getAUser } from "../services/Services";
// import { MsalProvider, useIsAuthenticated, useMsal } from "@azure/msal-react";
// import {
//   InteractionStatus,
//   PublicClientApplication,
// } from "@azure/msal-browser";
// import { msalConfig } from "../authConfig";
// const pca = new PublicClientApplication(msalConfig);
const InputSearch: React.FC = () => {
  
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [teamNames,setTeamNames]=useState<string[]>();
  const [filteredTeams,setFilteredTeams]=useState<string[]>();
  // const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
 
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    // instance
    //   .acquireTokenSilent({
    //     scopes: ["openid", "profile", "user.read"],
    //     authority:
    //       "https://login.microsoftonline.com/865cc515-a530-4538-8ef8-072b7b2be759",
    //   })
    //   .then((response) => {
    //     console.log(response.accessToken);
    //     // getAUser(response.accessToken)
    //     //   .then((res) => console.log(res))
    //     //   .catch((err) => console.error(err));
    //   })
    //   .catch((err) => console.error("eror", err));
    getAUser();
    setSearchQuery(e.target.value);
    handleSearch(e.target.value);
  };
  
  const handleSearch = (query:string) => {
    if (query.trim() === '') {
      setFilteredTeams([]);
    } else {
      const filtered = teamNames&& teamNames.filter(item => item.toLowerCase().includes(query.toLowerCase()));
      setFilteredTeams(filtered);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    
    if (e.key === 'Enter' && filteredTeams&& filteredTeams.length > 0) {
      window.location.href = `/teams/${encodeURIComponent(filteredTeams[0])}`;
      e.preventDefault();
    }
    
  };
  // const handleSelectItem = (item: string) => {
  //   setSelectedItem(item);
  // };
  const handleClickItem = (item: string, e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.preventDefault();
    window.location.href = `/teams/${encodeURIComponent(item)}`;
    
  };
  useEffect(() => {
    setTeamNames(Teams.map(team => team.TeamName));
    
  },[]);
  return (
    <div className="inputWithSearchIcon">
      <input
        type="text"
        placeholder="Search by Team Name"
        value={searchQuery} 
        onChange={handleChange}
        onKeyDown={handleKeyDown} 
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
        <ul className="dropdown">
          {filteredTeams.map((team, index) => (
            <li key={index} className="dropDownItem" onClick={(e) => {
             
                  // handleSelectItem(team);
                  handleClickItem(team, e); 
                }} 
            id={selectedItem === team ? 'selected' : ''}>{team}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputSearch;
