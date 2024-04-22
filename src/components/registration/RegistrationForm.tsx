import React, { useState } from "react";
import SelectMember from "./SelectMember";
import TeamDetailsForm from "./TeamDetailsForm";
import TopicDetailsForm from "./TopicDetailsForm";
import { membersArray, registerTeam } from "../../services/FormServices";
import SubmissionFailed from "../submissionStatus/FailedAndSuccessStatus";

const RegistrationForm: React.FC = () => {
  const [currentForm, setCurrentForm] = useState<string>("SelectMembersForm");
  const [sucessSubmit, setSucessSubmit] = useState<boolean>(false);
  console.log(membersArray);

  return (
    <div className="registerHome">
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
                  currentForm !== "SelectMembersForm"
                    ? "currentHr"
                    : "notReachedHr"
                }
              />
            </div>
            <div>
              {" "}
              <p
                id={
                  currentForm !== "SelectMembersForm"
                    ? "currentStep"
                    : "notReached"
                }
              >
                2
              </p>{" "}
              <hr
                id={
                  currentForm === "TopicDescriptionForm"
                    ? "currentHr"
                    : "notReachedHr"
                }
              />
            </div>
            <div>
              {" "}
              <p
                id={
                  currentForm !== "TeamDetailsForm" &&
                  currentForm !== "SelectMembersForm"
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
              Select Members <br /> <span>Step Description</span>
            </p>
            <p>
              Enter Team Details <br /> <span>Step Description</span>
            </p>
            <p>
              Project Details <br /> <span>Step Description</span>
            </p>
          </div>
        </div>
      </div>
      {currentForm === "RegisterFailed" ? (
        <SubmissionFailed
          submitPopUp={"Failed"}
          setCurrentProjectForm={setCurrentForm}
          setSucessSubmit={setSucessSubmit}
          isProject={false}
        />
      ) : currentForm === "RegisterSuccess" ? (
        <SubmissionFailed
          submitPopUp={"Success"}
          setCurrentProjectForm={setCurrentForm}
          setSucessSubmit={setSucessSubmit}
          isProject={false}
        />
      ) : (
        <div
          className={
            currentForm === "TopicDescriptionForm" ? "topicForm" : "formSection"
          }
        >
          {currentForm === "SelectMembersForm" ? (
            <SelectMember setCurrentForm={setCurrentForm} />
          ) : currentForm === "TeamDetailsForm" ? (
            <TeamDetailsForm setCurrentForm={setCurrentForm} />
          ) : (
            <TopicDetailsForm setCurrentForm={setCurrentForm} />
          )}
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
