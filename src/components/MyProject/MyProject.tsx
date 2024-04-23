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
import { userEmail } from "../../services/Profile";
import { MyProjectForm, getLoggedInId, getMyTeamId} from "../../services/FormServices";
import { IAllProject } from "../../services/Interface/HackathonInterface";
import { getProjectByTeamId, updateProject } from "../../services/Services";
interface MyProjectProps {
  onSubmit: (data: IProjectSubmissionForm) => void;
}
const MyProject: React.FC = () => {
  const submitPopUp=""; 
 const [projectData,setProjectData]=useState<IAllProject>(MyProjectForm)
 const [viewData,setViewData]=useState<IAllProject>(MyProjectForm)
 const [loginId, setLoginId] = useState<number>(0);
 const [teamId, setTeamId] = useState<number>(0);
  const [currentProjectForm, setCurrentProjectForm] =useState<string>("ProjectDetailForm");
  const [editForm,setEditForm]=useState<boolean>(false);
  const [sucessSubmit,setSucessSubmit]=useState<boolean>(false);
  const [formData, setFormData] = useState<IProjectSubmissionForm>(projectInfoArray);
  const [formError, setFormError] = useState<IProjectSubmissionFormError>({
    topicError: "",
    descriptionError: "",
    briefDescriptionError: "",
    uploadFileError: "",
  });



  const handleSubmit = async (data:IAllProject) => {
    if(projectData?.projectName?.length>0 && projectData?.description?.length>0 && currentProjectForm==="ProjectDetailForm")
      {
        updateProject(projectData, loginId,teamId);
        setCurrentProjectForm("ProjectSubmissionForm");

      }
   
  }
  const handleCancel =async ()=>{
    if(currentProjectForm==="ProjectSubmissionForm"){
      setCurrentProjectForm("ProjectDetailForm");
      const prevData = await getProjectByTeamId(teamId);
     // Assuming getProjectByTeamId returns IAllProject or undefined
      setViewData(prevData)

    }

  }
  useEffect(()=>{
    getLoggedInId().then((res)=>setLoginId(res?res:0));
    getMyTeamId(loginId).then((res)=>setTeamId(res?res:0))
    console.log("loginId",loginId,teamId)
    teamId && getProjectByTeamId(teamId).then((res) => setViewData(res));

  },[loginId,teamId]
  )
  

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
         { sucessSubmit ? <SubmissionFailed submitPopUp={"Success"} setCurrentProjectForm={setCurrentProjectForm} setSucessSubmit={setSucessSubmit} isProject={true} /> :
          <div
            className={
              currentProjectForm === "ProjectDescripitionForm"
                ? "topicForm"
                : "formSection1"
            }
          >
            {currentProjectForm === "ProjectDetailForm" ? (
              <ProjectDetail setFormData={setFormData} setFormError={setFormError} formError={formError} setProjectData={setProjectData} viewData={viewData}/>
            ) : currentProjectForm === "ProjectSubmissionForm" ? (
               <ProjectSubmission setFormData={setFormData} setFormError={setFormError} formError={formError} setProjectData={setProjectData} viewData={viewData} />

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
               className={currentProjectForm === "ProjectDetailForm" && projectData?.projectName?.length > 0 && projectData?.projectName?.length < 100 && projectData?.description?.length > 0 && projectData?.description?.length < 500 ? "enabledButton" : "disabledButton"}

   onClick={() => { 
     handleSubmit(projectData);
     
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
