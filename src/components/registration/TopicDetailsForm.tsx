import React, { useEffect, useState } from "react";
import {
  RegistrationForm,
  registerTeam,
  useMembersData,
} from "../../services/FormServices";
interface IProps {
  setCurrentForm: (message: string) => void;
}
const TopicDetailsForm: React.FC<IProps> = (props: IProps) => {
  const [projectName, setProjectName] = useState<string>("");
  const [technology, setTechnology] = useState<string>("");
  const [projectDesc, setProjectDesc] = useState<string>("");

  const { usersData } = useMembersData();

  const handleSubmit = () => {
    RegistrationForm.description = projectDesc;
    RegistrationForm.projectName = projectName;
    RegistrationForm.technologies = technology.split(/[,\s]+/);
    RegistrationForm.adminId = usersData.filter(
      (item) =>
        item.email ===
        localStorage.getItem("username")?.toString().toLocaleLowerCase()
    )[0].id;
    RegistrationForm.registeredDate = new Date();
    registerTeam(RegistrationForm)
      .then((res) => {
        props.setCurrentForm("RegisterSuccess");
        console.log(res, "ressss");
      })
      .catch((err) => {
        err && props.setCurrentForm("RegisterFailed");
        console.error(err, "err");
      });
  };
  return (
    <div>
      <p id="selectMemHead">Project Details</p>
      <p id="infoHeading1">
        Please enter the details of the project you will be working on
      </p>
      <div className="topicSec">
        <p>Project Name</p>
        <input
          type="text"
          placeholder="Enter the topic"
          onChange={(e) => setProjectName(e.target.value)}
        />
      </div>
      <div className="topicSec">
        <p>Technology</p>
        <input
          type="text"
          placeholder="Enter the technology"
          onChange={(e) => setTechnology(e.target.value)}
        />
      </div>
      <div className="descriptionSec">
        <p>Project Description</p>
        <textarea
          placeholder="Enter the topic description"
          onChange={(e) => setProjectDesc(e.target.value)}
        ></textarea>
      </div>
      <div className="nextCancelDiv">
        <button
          onClick={() => props.setCurrentForm("SelectMembersForm")}
          id="cancelBtn"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          id="nextBtn"
          // disabled={
          //   projectName.length < 5 ||
          //   technology.length < 3 ||
          //   projectDesc.length < 10
          // }
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default TopicDetailsForm;
