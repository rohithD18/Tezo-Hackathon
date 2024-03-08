import React, { useState } from "react";
import SelectMember from "./SelectMember";
import TeamDetailsForm from "./TeamDetailsForm";
import TopicDetailsForm from "./TopicDetailsForm";

const NavThroughForm: React.FC = () => {
  const [currentForm, setCurrentForm] = useState<string>("SelectMembersForm");
  return (
    <div className="navThroughFormD">
      <div>
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
                  currentForm === "TopicDescriptionForm"
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
              Topic Details <br /> <span>Step Description</span>
            </p>
          </div>
        </div>
      </div>
      <div
        className={
          currentForm === "TopicDescriptionForm" ? "topicForm" : "formSection"
        }
      >
        {currentForm === "SelectMembersForm" ? (
          <SelectMember />
        ) : currentForm === "TeamDetailsForm" ? (
          <TeamDetailsForm />
        ) : (
          <TopicDetailsForm />
        )}
        <div className="nextCancelDiv">
          <button
            onClick={() => setCurrentForm("SelectMembersForm")}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button
            onClick={() =>
              setCurrentForm(
                currentForm === "SelectMembersForm"
                  ? "TeamDetailsForm"
                  : "TopicDescriptionForm"
              )
            }
            id="nextBtn"
          >
            {currentForm === "TopicDescriptionForm" ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavThroughForm;
