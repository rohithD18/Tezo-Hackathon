import React, { useState } from "react";
import InforCircle from "../../assets/infocircle.png";
import "../../styles/submissionStatus/RejectedRework.css";

const RejectedRework: React.FC = () => {
  const [projectStatus, setProjectStatus] = useState<string>("Rework");
  return (
    <div className="rejectOrReworkDiv">
      <div className="headerInfo">
        <p id="infoLbl">
          {" "}
          <img src={InforCircle} alt="info-circle" />
          {projectStatus === "Rework"
            ? "Your topic needs a little refinement"
            : "Unfortunately not accepted this time"}
        </p>
        <p id="deadlineLbl">14 more days to submit</p>
      </div>
      <p id="reworkLbl">
        {projectStatus === "Rework"
          ? "But worry not! Feel free to revise and resubmit with the necessary adjustments."
          : "We regret to inform you that your submitted topic for the Tezo Hackathon has not been accepted this time"}
      </p>
      <div className="tableImprove">
        <p>
          {projectStatus === "Rework"
            ? "Here's how you can improve"
            : "Here's why your topic was rejected"}
        </p>
        <ul>
          <li>Guidelines Alignment Needed for Your Topic</li>
          <li>Unclear objectives</li>
        </ul>
      </div>
      <button onClick={() => setProjectStatus("Rejected")}>
        {projectStatus === "Rework" ? "Refine" : "Re-submit"}
      </button>
    </div>
  );
};

export default RejectedRework;
