import React from "react";
import SuccessIcon from "../../assets/SuccessIcon.png";
import "../../styles/submissionStatus/SubmissionAccepeted.css";

const SubmissionAccepeted: React.FC = () => {
  return (
    <div className="acceptedDiv">
      <img src={SuccessIcon} alt="Submission Accepted" />
      <p id="congratsMsg">
        Congratulations! <br /> Your Topic is Accepted!!
      </p>
      <p>
        We can't wait to see your creativity in action. Ready, set, hack! 💻✨
      </p>
    </div>
  );
};

export default SubmissionAccepeted;
