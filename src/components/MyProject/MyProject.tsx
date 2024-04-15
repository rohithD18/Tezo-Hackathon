import React, { useEffect, useState } from "react";
import "../../styles/registrationStyles/Registration.css";
import "../../styles/MyProject/ProjectSubmission.css";
import "../../styles/MyProject/Demo.css";
import { ProjectDetail } from "./ProjectDetails";
import { ProjectDemo } from "./Demo";
import { ProjectSubmission } from "./ProjectSubmission";
import { IProjectDetail } from "../../Interfaces";
import ViewPdfModal from "./ViewPdfModal";
import { IProjectInfo } from "../../Interfaces";
import {projectInfoArray} from '../../services/ProjectInfoDetails';
import SubmissionFailed from '../../components/submissionStatus/FailedAndSuccessStatus'
interface MyProjectProps {
  onSubmit: (data: IProjectInfo) => void;
}
const MyProject: React.FC = () => {
  
  const [currentProjectForm, setCurrentProjectForm] =useState<string>("ProjectDetailForm");
  const [sucessSubmit,setSucessSubmit]=useState<boolean>(false);
  const [formData, setFormData] = useState<IProjectInfo[]>(projectInfoArray);
  const [duplicateData,setDuplicateData]=useState<IProjectInfo[]|null>();
  const handleSubmit = (data: IProjectInfo[]|null) => {
    if(currentProjectForm==="ProjectSubmissionForm"){
      console.log("vbnm");
      setSucessSubmit(true);
      setCurrentProjectForm("ProjectSubmissionForm")

    }
    if (data !== null) {
      setFormData(prevData => [...prevData, ...data]);
      console.log("Form Data:", formData);
    } else {
      console.log("No data to submit");
    }
  };
 const handleDataFromChild =(data:IProjectInfo[]|null)=>{
  if (data !== null) {
    setDuplicateData(data);
    console.log("Form Data:", formData);
  } else {
    console.log("No data to submit");
  }
 }
  useEffect(() => {
    console.log("formData:", formData);
    console.log("duplicateData:", duplicateData);
  }, [formData, duplicateData]);
  const [isPdfView, setIsPdfView] = useState<boolean>(false);
  
  return (
    <>
      {isPdfView ? (
        <ViewPdfModal  setIsPdfView={setIsPdfView}/>
      ) : (
        <div className="registerHome1">
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
                      // currentProjectForm === "ProjectDetailsForm"
                         "currentHr"
                        // : "notReachedHr"
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
         { sucessSubmit ? <SubmissionFailed /> :
          <div
            className={
              currentProjectForm === "ProjectDescripitionForm"
                ? "topicForm"
                : "formSection1"
            }
          >
            {currentProjectForm === "ProjectDetailForm" ? (
              <ProjectDetail setDuplicateData={handleDataFromChild}/>
            ) : currentProjectForm === "ProjectSubmissionForm" ? (
              // {x? <SubmissionFailed/> :<ProjectSubmission  setDuplicateData={(data:IProjectInfo[])=>{setDuplicateData(data)}} />}
               <ProjectSubmission setDuplicateData={(data: IProjectInfo[]) => { setDuplicateData(data) }} />

            ) : (
              <ProjectDemo  setDuplicateData={(data:IProjectInfo[])=>{setDuplicateData(data)}}/>
            )}
            <div className="nextCancelDiv">
              <button
                onClick={() => setCurrentProjectForm("ProjectDetailForm")}
                id="cancelBtn"
              >
                Cancel
              </button>

              <button
  onClick={() => { 
    handleSubmit(duplicateData ? duplicateData : null);
      setCurrentProjectForm(
        currentProjectForm === "ProjectDetailForm"
          ? "ProjectSubmissionForm"
          : "ProjectDescripitionForm"
      )
    }
  }
  id="nextBtn"
>
  {currentProjectForm === "ProjectDetailForm" ? "Next" : "Submit"}
</button>

        </div>
      </div>
}
    </div>
  )};
  </>
  )
};

export default MyProject;
