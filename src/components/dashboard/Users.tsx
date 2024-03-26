import React, { useEffect, useState } from "react";
import "../../styles/dashboard/Users.css";
import { UserData } from "../../services/UserData";
import { IUser } from "../../Interfaces";
import profilepic from "../../assets/profilepic.jpg";
import PaginationSection from "../pagination/PaginationSection";
import DashboardNav from "./DashboardNav";

const Users = () => {
  const [currUserData, setCurrUserData] = useState<
    IUser[]
  >([]);
  const [displayOnUser, setDisplayOnUser] = useState<
    IUser[]
  >([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState<IUser[]>([]);

  useEffect(() => {
   
    setCurrUserData(UserData);
  }, []);

  useEffect(() => {
    const filtered = currUserData.filter((application: IUser) =>
      application.TeamName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [currUserData, searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const formatDate = (date: Date | string): string => {
    if (typeof date === "string") {
      return date
    } else {
      const day = date.getDate();
      const month = date.toLocaleString('en-US', { month: 'short' });
      return `${day}, ${month}`;
    }
  };

  
  return (
    <><DashboardNav/>
    <div className="UserManagement">
      <div className="UsersScreen1">
            <span className="tableTitle">Users</span>
            <div className="searchBox">
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
                <input
                  type="search"
                  name=""
                  className="searchInput"
                  placeholder="Search by Team Name"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>

            
        
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
                  className="tableRowData"
                  key={index}
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
                      {user.Name}
                    </span>
                  </td>
                  <td className="rowTitle">{user.EmailAddress}</td>
                  <td className="rowTitle">{user.TeamName}</td>
               
                  <td className="rowTitle">
                    {formatDate(user.RegisteredOn)}
                  </td>
                  <td className="rowTitle">
                   
      <svg width="36" height="36" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" id="editAndDeleteStyling">
<path d="M1.87604 17.1159C1.92198 16.7024 1.94496 16.4957 2.00751 16.3025C2.06301 16.131 2.14143 15.9679 2.24064 15.8174C2.35246 15.6478 2.49955 15.5008 2.79373 15.2066L16 2.0003C17.1046 0.895732 18.8955 0.895734 20 2.0003C21.1046 3.10487 21.1046 4.89573 20 6.0003L6.79373 19.2066C6.49955 19.5008 6.35245 19.6479 6.18289 19.7597C6.03245 19.8589 5.86929 19.9373 5.69785 19.9928C5.5046 20.0553 5.29786 20.0783 4.88437 20.1243L1.5 20.5003L1.87604 17.1159Z" stroke="#B4B4B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg width="36" height="36" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg" id="editAndDeleteStyling">
<path d="M14 5V4.2C14 3.0799 14 2.51984 13.782 2.09202C13.5903 1.71569 13.2843 1.40973 12.908 1.21799C12.4802 1 11.9201 1 10.8 1H9.2C8.07989 1 7.51984 1 7.09202 1.21799C6.71569 1.40973 6.40973 1.71569 6.21799 2.09202C6 2.51984 6 3.0799 6 4.2V5M1 5H19M17 5V16.2C17 17.8802 17 18.7202 16.673 19.362C16.3854 19.9265 15.9265 20.3854 15.362 20.673C14.7202 21 13.8802 21 12.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V5" stroke="#B4B4B4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  </td>
                </tr>
              ))}
            </table>
        
        <div className="applicationPagination"></div>
        <PaginationSection
          setCurrentItem={setDisplayOnUser}
          data={filteredData}
        />
      </div>
      </div>
    </>
  );
};

export default Users;
