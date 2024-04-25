import React, { useEffect, useState } from "react";
import "../../styles/registrationStyles/Registration.css";
import profilePic from "../../assets/profilepic.jpg";
import { IAllUsers } from "../../services/Interface/HackathonInterface";
import { getUserByName, updateUser } from "../../services/Services";
interface IProps {
  teamMembers: IAllUsers[];
}
const Members: React.FC<IProps> = (props: IProps) => {
  const { teamMembers } = props;
  const [memebers, setMembers] = useState<IAllUsers[]>(teamMembers);
  const [isDelete, setisDelete] = useState<boolean>(false);

  const handleDelete = (name: string, index: number) => {
    teamMembers.splice(index, 1);
    setisDelete(!isDelete);

    getUserByName(name).then((res) => updateUser(res, "delete"));
  };

  useEffect(() => {
    setMembers(teamMembers);
  }, [isDelete]);
  return (
    <div className="membersSection">
      {memebers.map((item, index) => {
        return (
          <div key={index} className="contentMEM">
            <p id="idOfMem">{index + 1}.</p>
            <p id="nameEmail">
              <img src={profilePic} alt="profile" />
              <span>
                <b>{item?.name}</b> <b id="email">{item?.email} </b>
              </span>
            </p>
            <p id="trashIcon" onClick={() => handleDelete(item?.name, index)}>
              {" "}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6"
                  stroke="#B4B4B4"
                />
              </svg>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Members;
