import React, { useEffect, useState } from "react";
import "../../styles/dashboard/Users.css";
import { UsersData } from "../../services/Data";

import { IUsers } from "../../Interfaces";
import profilepic from "../../assets/profilepic.jpg";
import PaginationSection from "../pagination/PaginationSection";
import DashboardNav from "./DashboardNav";
import InputSearch from "../InputSearch";
import {UserEditPopUp} from "./UserEditPopUp";
import { getAllTeamMembers, getAllUsers, getTeamById } from "../../services/Services";
import { IAllTeams, IAllUsers, ITeamMember } from "../../services/Interface/HackathonInterface";
interface teamUser extends IAllUsers{
  email: string;
  isAdmin: boolean;
}
const Users = () => {
  const [currUserData, setCurrUserData] = useState<{ user: IAllUsers; team?: IAllTeams }[]>([]);
  const [displayOnUser, setDisplayOnUser] = useState<{ user: IAllUsers; team?: IAllTeams }[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState<{ user: IAllUsers; team?: IAllTeams }[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popUpValue, setPopUpValue] = useState<string>("");
  // const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [userData, setUserDetailsData] = useState<IAllUsers>();
  
  const handleOpenPopup = (button:string) => {
    setIsPopupOpen(true);
    setPopUpValue(button)
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const handleUserDetailsData = (data: IAllUsers) => {
    setUserDetailsData(data);
  };
 
  useEffect(() => {

    Promise.all([getAllUsers(), getAllTeamMembers()]).then(([userData, teamData]) => {
      Promise.all(
        userData
          .filter((user) => user.isRegistered)
          .map((user) => {
            const team = teamData.find((team) => team.personId === user.id);
            if (team) {
              return getTeamById(team.teamId).then((currentTeam) => ({
                user,
                team: currentTeam // Add the team data to the team object
              }));
            } else {
              return Promise.resolve({ user, team: undefined });// Resolve with null if team is not found
            }
          })
      ).then((combinedData) => {
        // Filter out null values (teams not found)
        setCurrUserData(combinedData);
        
      });
    });
    
    
  }, []);
  useEffect(() => {
    const filtered = searchQuery 
    ? currUserData.filter((user) =>
        user.user.name && user.user.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : currUserData;
    console.log("filtere",currUserData)
    setFilteredData(filtered);
  }, [currUserData, searchQuery]);
  const formatDate = (date: Date | string): string => {
    if (typeof date === "string") {
      return date;
    } else {
      const day = date.getDate();
      const month = date.toLocaleString("en-US", { month: "short" });
      return `${day}, ${month}`;
    }
  };
  const updateEvents = (teamName:string) => {
    if(teamName==="delete")
       {
        const updateItems = currUserData.map((item:any) => {
          if (item.Name === userData?.name) {
            return {
              ...item,
            RegisteredOn: "",
            TeamName:"--",
        IsRegistered:false,
            };
          }
          return item;
        });
        console.log(updateItems)
        setCurrUserData(updateItems);

    } 
    else{
    // if (UsersData != undefined) {
     const updateItems = currUserData.map((item:any) => {
        if (item.Name === userData?.name) {
          return {
            ...item,
          TeamName: teamName,
          };
        }
        return item;
      });
      console.log(updateItems)
      setCurrUserData(updateItems);
    }
    
  };

  return (
    <>
      <div className="UserManagement">
        <div className="UsersScreen1">
          <span className="tableTitle">Users</span>
          <InputSearch
            currentScreen={"SelectMembers"}
            setQuerySearch={setSearchQuery}
          />
        </div>
        <div className="userDisplayTable">
          <table className="table">
            <thead className="tableRow">
              <th className="headingTitle">Name</th>
              <th className="headingTitle">Email Address</th>
              <th className="headingTitle">Team Name</th>
              <th className="headingTitle">Registered on</th>
              <th className="headingTitle">Actions</th>
            </thead>

            {displayOnUser.map((user, index) => (
              <tr
                className="tableRowDataUser"
                key={index}
                onClick={() => handleUserDetailsData(user.user)}
                >
                
                  <td className="rowTitle">
                    <span
                      style={{ background: "none" }}
                      className="captTitleDataSpan"
                    >
                      <img
                        src={profilepic}
                        alt="img"
                        style={{
                          width: "24px",
                          height: "24px",
                          background: "none",
                          border: "none",
                        }}
                      />
                      {user.user.name}
                    </span>
                  </td>
                  <td className="rowTitle">{user.user.email}</td>
                  <td className="rowTitle">
                    {user.team?.teamName!=""? user.team?.teamName:"--"}
                  </td>
               
                  <td className="rowTitle">
                    {user.user.isRegistered? (user.team?.registeredDate && formatDate(user.team?.registeredDate)):"--"}
                  </td>
                  <td className="rowTitle">
                   
      <svg width="36" height="36" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" id="editAndDeleteStyling" onClick={()=>handleOpenPopup("edit")}>
<path d="M1.87604 17.1159C1.92198 16.7024 1.94496 16.4957 2.00751 16.3025C2.06301 16.131 2.14143 15.9679 2.24064 15.8174C2.35246 15.6478 2.49955 15.5008 2.79373 15.2066L16 2.0003C17.1046 0.895732 18.8955 0.895734 20 2.0003C21.1046 3.10487 21.1046 4.89573 20 6.0003L6.79373 19.2066C6.49955 19.5008 6.35245 19.6479 6.18289 19.7597C6.03245 19.8589 5.86929 19.9373 5.69785 19.9928C5.5046 20.0553 5.29786 20.0783 4.88437 20.1243L1.5 20.5003L1.87604 17.1159Z" stroke="#B4B4B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg width="36" height="36" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg" id="editAndDeleteStyling" onClick={()=>handleOpenPopup("delete")}>
<path d="M14 5V4.2C14 3.0799 14 2.51984 13.782 2.09202C13.5903 1.71569 13.2843 1.40973 12.908 1.21799C12.4802 1 11.9201 1 10.8 1H9.2C8.07989 1 7.51984 1 7.09202 1.21799C6.71569 1.40973 6.40973 1.71569 6.21799 2.09202C6 2.51984 6 3.0799 6 4.2V5M1 5H19M17 5V16.2C17 17.8802 17 18.7202 16.673 19.362C16.3854 19.9265 15.9265 20.3854 15.362 20.673C14.7202 21 13.8802 21 12.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V5" stroke="#B4B4B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  </td>
                </tr>
              ))}
            </table>
        
        <div className="userPagination">
        <PaginationSection
          setCurrentItem={setDisplayOnUser}
          data={filteredData}
          screen="users"
        />
      
        </div>
      </div>
      {isPopupOpen && <UserEditPopUp    onClose={handleClosePopup} userData={userData} updateEvents={updateEvents} popUpValue={popUpValue}/>}
      {/* {isDeletePopupOpen && <UserEditPopUp    onClose={handleClosePopup}  updateEvents={updateEvents}/>} */}
      </div>
    </>
  );
};

export default Users;
