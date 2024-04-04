import React, { useState } from "react";
import "../../styles/registrationStyles/Registration.css";
import "../../styles/MyProject/ProjectSubmission.css";
import "../../styles/MyProject/Demo.css";
import { ProjectDetail } from "./ProjectDetails";
import { ProjectDemo } from "./Demo";
import { ProjectSubmission } from "./ProjectSubmission";
import { IProjectDetail } from "../../Interfaces";
import ViewPdfModal from "./ViewPdfModal";

const MyProject: React.FC = () => {
  const [currentProjectForm, setCurrentProjectForm] =
    useState<string>("TopicDetailsForm");
  const [isPdfView, setIsPdfView] = useState<boolean>(false);

  return (
    <>
      {isPdfView === true ? (
        <ViewPdfModal  setIsPdfView={setIsPdfView}/>
      ) : (
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
                      currentProjectForm !== "TopicDetailsForm"
                        ? "currentHr"
                        : "notReachedHr"
                    }
                  />
                </div>
                <div>
                  {" "}
                  <p
                    id={
                      currentProjectForm !== "TopicDetailsForm"
                        ? "currentStep"
                        : "notReached"
                    }
                  >
                    2
                  </p>{" "}
                  <hr
                    id={
                      currentProjectForm === "TopicDescriptionForm"
                        ? "currentHr"
                        : "notReachedHr"
                    }
                  />
                </div>
                <div>
                  {" "}
                  <p
                    id={
                      currentProjectForm === "TopicDescriptionForm"
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
              currentProjectForm === "TopicDescriptionForm"
                ? "topicForm"
                : "formSection1"
            }
          >
            {currentProjectForm === "TopicDetailsForm" ? (
              <ProjectDetail />
            ) : currentProjectForm === "TeamDetailsForm" ? (
              <ProjectSubmission  setIsPdfView={setIsPdfView} />
            ) : (
              <ProjectDemo />
            )}
            <div className="nextCancelDiv">
              <button
                onClick={() => setCurrentProjectForm("TopicDetailsForm")}
                id="cancelBtn"
              >
                Cancel
              </button>

              <button
                onClick={() =>
                  setCurrentProjectForm(
                    currentProjectForm === "TopicDetailsForm"
                      ? "TeamDetailsForm"
                      : "TopicDescriptionForm"
                  )
                }
                id="nextBtn"
              >
                {currentProjectForm === "TopicDetailsForm" ? "Next" : "Submit"}
              </button>
            </div>
          </div>
          {/* </div> */}
        </div>
      )}
    </>
  );
};

export default MyProject;
