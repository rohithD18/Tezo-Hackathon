import React, { useState } from "react";
import FailedIcon from "../../assets/FailedWarningIcon.png";
import SuccessIcon from "../../assets/SuccessIcon.png";
import "../../styles/submissionStatus/FailedAndSuccessStatus.css";
import { PresenationDemo } from "../MyProject/PresentationDemo";
import { useNavigate } from "react-router-dom";
interface SubmissionFailedProps {
  submitPopUp: string;
  setCurrentProjectForm: (value: string) => void;
  setSucessSubmit: (value: boolean) => void;
  isProject: boolean;
}
const SubmissionFailed: React.FC<SubmissionFailedProps> = ({
  submitPopUp,
  setCurrentProjectForm,
  setSucessSubmit,
  isProject,
}) => {
  const navigate = useNavigate();
  const [submissionStatus, setSubmissionStatus] = useState<string>(submitPopUp);
  // const [isProject, setIsProject] = useState<boolean>(isProject);
  const handleClick = () => {
    // setSucessSubmit(false);
    setSucessSubmit(false);
    setCurrentProjectForm(
      isProject ? "ProjectDetailForm" : "SelectMembersForm"
    );
  };
  return (
    <div className="submissionFailedSec">
      <img
        src={submissionStatus === "Failed" ? FailedIcon : SuccessIcon}
        alt="failedSign"
      />
      <p id="header">
        {submissionStatus === "Success"
          ? `${isProject ? "Project" : "Topic"} submission successful!`
          : submissionStatus === "Failed"
          ? `${isProject ? "Project" : "Topic"} submission failed!`
          : `You've already ${isProject ? "submitted!" : "responded!"}`}
      </p>
      {submissionStatus === "Failed" ? (
        <p id="failedInfo">
          Network connection lost. <br />
          Please check your connection and try again.{" "}
        </p>
      ) : (
        <p id="failedInfo">
          For your records, we have sent an email to
          amanasw*****ni@technovert.com to confirm that we have received and
          processed your topic.
        </p>
      )}
      <p id="note">
        {" "}
        Note:{" "}
        {submissionStatus === "Failed"
          ? "Topic review can take up to 2 days. Stay Tuned."
          : "Topic review can take up to 2 days."}
      </p>
      <button
        onClick={() => handleClick()}
        id={submissionStatus === "Failed" ? "tryAgainBtn" : "viewTopic"}
      >
        {submissionStatus === "Failed" ? "Try Again" : "View Topic"}
      </button>
    </div>
  );
};

export default SubmissionFailed;
