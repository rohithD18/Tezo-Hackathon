import React, { useEffect, useState } from "react";
import "../../styles/registrationStyles/Registration.css";
import "../../styles/MyProject/ProjectSubmission.css";
import "../../styles/MyProject/Demo.css";
import { ProjectDetail } from "./ProjectDetails";
import { ProjectDemo } from "./Demo";
import { ProjectSubmission } from "./ProjectSubmission";
import { IProjectDetail } from "../../Interfaces";
import { IProjectInfo } from "../../Interfaces";
import {projectInfoArray} from '../../services/ProjectInfoDetails'
interface MyProjectProps {
  onSubmit: (data: IProjectInfo) => void;
}
const MyProject: React.FC = () => {
  
  const [currentProjectForm, setCurrentProjectForm] =useState<string>("ProjectDetailForm");
  const [formData, setFormData] = useState<IProjectInfo[]>(projectInfoArray);
  const [duplicateData,setDuplicateData]=useState<IProjectInfo[]|null>();
  const handleSubmit = (data: IProjectInfo) => {
    setFormData(prevData => [...prevData, data]);
    console.log("Form Data:", data);
  };
  const renderCurrentForm = () => {
    console.log(currentProjectForm)
    if (currentProjectForm === "ProjectDetailForm") {
      setDuplicateData(null);
    } else if (currentProjectForm === "ProjectSubmissionForm" || currentProjectForm === "ProjectDescriptionForm") {
      // Assuming you have an array of items named 'currentProjectFormArray' containing objects with 'teamid' property
      const x = formData.filter(item => item.TeamId === 1);
      setDuplicateData(x);
    

    }
  useEffect(() => {
    renderCurrentForm();
  }, [currentProjectForm]);
 
  }
  
  return (
    <div className="registerHome">
      {/* <div className="navThroughFormD1"> */}
      <div className="sideSteps">
        <div>
          <h6 id="h6Tag"> Step 1 of 3</h6>
        </div>
        <div className="navThrough">
          <div className="circles">
            <div>
              {" "}
              <p id="currentStep">1</p>{" "}
              <hr
                id={
                  currentProjectForm !== "ProjectDetailForm"
                    ? "currentHr"
                    : "notReachedHr"
                }
              />
            </div>
            <div>
              {" "}
              <p
                id={
                  currentProjectForm !== "ProjectDetailForm"
                    ? "currentStep"
                    : "notReached"
                }
              >
                2
              </p>{" "}
              <hr
                id={
                  currentProjectForm === "ProjectDescripitionForm"
                    ? "currentHr"
                    : "notReachedHr"
                }
              />
            </div>
            <div>
              {" "}
              <p
                id={
                  currentProjectForm === "ProjectDescripitionForm"
                    ? "currentStep"
                    : "notReached"
                }
              >
                3
              </p>
            </div>
          </div>
          <div className="namesOfRegister">
            <p>
              Topic Details <br /> <span>Step Description</span>
            </p>
            <p>
              Project submission <br /> <span>Step Description</span>
            </p>
            <p>
              Demo <br /> <span>Step Description</span>
            </p>
          </div>
        </div>
      </div>
      <div
        className={
          currentProjectForm === "ProjectDescripitionForm"
            ? "topicForm"
            : "formSection1"
        }
       
      >
        {currentProjectForm === "ProjectDetailForm" ? (
          <ProjectDetail onSubmit={handleSubmit} setDuplicateData={(data:IProjectInfo[])=>{setDuplicateData(data)}} />
        ) : currentProjectForm === "ProjectSubmissionForm" ? (
          <ProjectSubmission onSubmit={handleSubmit} setDuplicateData={(data:IProjectInfo[])=>{setDuplicateData(data)}}
             />
        ) : (
          <ProjectDemo onSubmit={handleSubmit} setDuplicateData={(data:IProjectInfo[])=>{setDuplicateData(data)}} />
        )}
        <div className="nextCancelDiv">
          <button
            onClick={() => setCurrentProjectForm("ProjectDetailForm")}
            id="cancelBtn"
          >
            Cancel
          </button>

          <button
            onClick={() =>
              setCurrentProjectForm(
                currentProjectForm === "ProjectDetailForm"
                  ? "ProjectSubmissionForm"
                  : "ProjectDescripitionForm"
              )
            }
            id="nextBtn"
          >
            {currentProjectForm === "ProjectDetailForm" ? "Next" : "Submit"}
          </button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default MyProject;
