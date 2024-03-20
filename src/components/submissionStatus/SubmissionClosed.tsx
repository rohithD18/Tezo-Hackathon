import React from "react";
import warningSign from "../../assets/ClosedWarningIcon.png";
import "../../styles/submissionStatus/SubmissionClosed.css";

const SubmissionClosed: React.FC = () => {
  return (
    <div className="submissionClosedSec">
      <img src={warningSign} alt="warningSign" />
      <p id="header">Submission Period Closed</p>
      <p id="closedInfo">
        The Project submission period for the Tezo Hackathon has officially
        closed
      </p>
      <p id="apologyP">
        We appreciate your interest, but unfortunately, we are no longer
        accepting submissions. Stay tuned for future opportunities! Thank you
        for your understanding. 🤖💻
      </p>
    </div>
  );
};

export default SubmissionClosed;
