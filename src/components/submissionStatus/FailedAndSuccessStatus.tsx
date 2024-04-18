import React, { useState } from "react";
import FailedIcon from "../../assets/FailedWarningIcon.png";
import SuccessIcon from "../../assets/SuccessIcon.png";
import "../../styles/submissionStatus/FailedAndSuccessStatus.css";
import {PresenationDemo} from "../MyProject/PresentationDemo"
import { useNavigate } from "react-router-dom";
interface SubmissionFailedProps {
  submitPopUp:string; 
  setEditForm: (value: boolean) => void;
  setCurrentProjectForm:(value: string) => void;
  setSucessSubmit:(value: boolean) => void;

  
}
const SubmissionFailed:React.FC<SubmissionFailedProps > = ({ submitPopUp,setEditForm,setCurrentProjectForm,setSucessSubmit}) => { 
  const navigate = useNavigate();
  const [submissionStatus, setSubmissionStatus] = useState<string>(submitPopUp);
  const [isProjectSubmitted, setIsProjectSubmitted] = useState<boolean>(false);
  // const handleClick = (status: string) => {
  //   // status === "Success" ? navigate("/") : navigate("/Registration-Form");
  //   setSubmissionStatus(
  //     status === "Success"
  //       ? "Failed"
  //       : status === "Failed"
  //       ? "responded"
  //       : "Success"
  //   );
  //   // setIsProjectSubmitted(!isProjectSubmitted);
  // };
 
  const handleClick = () => {
    // setSucessSubmit(false);
    setSucessSubmit(false) ;
    setEditForm(true); 
    setCurrentProjectForm("ProjectDetailForm");
    


    
  };
  return (
    <div className="submissionFailedSec">
      <img
        src={submissionStatus === "Failed" ? FailedIcon : SuccessIcon}
        alt="failedSign"
      />
      <p id="header">
        {submissionStatus === "Success"
          ? `${isProjectSubmitted ? "Project" : "Topic"} submission successful!`
          : submissionStatus === "Failed"
          ? `${isProjectSubmitted ? "Project" : "Topic"} submission failed!`
          : `You've already ${
              isProjectSubmitted ? "submitted!" : "responded!"
            }`}
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
