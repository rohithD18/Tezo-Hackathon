import React, { useEffect, useState } from "react";
import "../../styles/registrationStyles/Registration.css";
import "../../styles/MyProject/ProjectSubmission.css";
import "../../styles/MyProject/Demo.css";
import { ProjectDetail } from "./ProjectDetails";
import { ProjectDemo } from "./Demo";
import { ProjectSubmission } from "./ProjectSubmission";
import { IProjectDetail } from "../../Interfaces";
import ViewPdfModal from "./ViewPdfModal";
import {
  IProjectSubmissionForm,
  IProjectSubmissionFormError,
} from "../../Interfaces";
import { projectInfoArray } from "../../services/ProjectInfoDetails";
import SubmissionFailed from "../../components/submissionStatus/FailedAndSuccessStatus";
interface MyProjectProps {
  onSubmit: (data: IProjectSubmissionForm) => void;
}
const MyProject: React.FC = () => {
  const submitPopUp="";  
  // const [previousData, setPreviousData] = useState<IProjectSubmissionForm>();
  const [currentProjectForm, setCurrentProjectForm] =useState<string>("ProjectDetailForm");
  const [editForm,setEditForm]=useState<boolean>(false);
  const [sucessSubmit,setSucessSubmit]=useState<boolean>(false);
  const [formData, setFormData] = useState<IProjectSubmissionForm>(projectInfoArray);
  //const [duplicateData,setDuplicateData]=useState<IProjectSubmissionForm>(projectInfoArray[0]);
  //const [isButtonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [formError, setFormError] = useState<IProjectSubmissionFormError>({
    topicError: "",
    descriptionError: "",
    briefDescriptionError: "",
    uploadFileError: "",
  });

  const handleSubmit = (data: IProjectSubmissionForm[]|null) => {
   
  }
  const handleCancel =()=>{
    if(currentProjectForm==="ProjectSubmissionForm"){
      setCurrentProjectForm("ProjectDetailForm");
      // setPreviousData(formData.filter(data => data.TeamId === 6));
      // setDuplicateData(previousData);
    }

  }
  
 const handleDataFromChild =(data:IProjectSubmissionForm)=>{
  if (data !== null) {
    // setDuplicateData(data);
    console.log("Form Data:", formData);
  } else {
    console.log("No data to submit");
  }
 }
  const [isPdfView, setIsPdfView] = useState<boolean>(false);

  return (
    <>
      {isPdfView ? (
        <ViewPdfModal setIsPdfView={setIsPdfView} />
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
         { sucessSubmit ? <SubmissionFailed submitPopUp={"Success"} setEditForm={setEditForm} setCurrentProjectForm={setCurrentProjectForm} setSucessSubmit={setSucessSubmit}  /> :
          <div
            className={
              currentProjectForm === "ProjectDescripitionForm"
                ? "topicForm"
                : "formSection1"
            }
          >
            {currentProjectForm === "ProjectDetailForm" ? (
              <ProjectDetail setFormData={setFormData} setFormError={setFormError} formError={formError}/>
            ) : currentProjectForm === "ProjectSubmissionForm" ? (
               <ProjectSubmission  />

            ) : (
              <ProjectDemo  />
            )}
            <div className="nextCancelDiv">
            {currentProjectForm !== "ProjectDetailForm" ? 
              <button
              onClick={() => { 
                handleCancel();
                 
                }
              }
                // onClick={() => setCurrentProjectForm("ProjectDetailForm")}
                id="cancelBtn"
              >
                Cancel
              </button>:""}

              <button
  //              className={ if(currentProjectForm==="ProjectDetailForm"){
  //               formData.topic!==""&& formData.topic.length > 100

  //              }  "disabledButton" : "enabledButton"}
  // onClick={() => { 
  //   // handleSubmit(duplicateData? duplicateData : null);
     
  //   }
  // }
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
