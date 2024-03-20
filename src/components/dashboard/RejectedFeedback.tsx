// import React from "react";
// import "../../styles/dashboard/RejectedFeedback.css";
// import xclose from "../../assets/xclose.png";
// import radiobutton from "../../assets/radiobutton.png";
// type Props = {
//   setIsApplicationDetailsOpen: any;
// };
// const RejectedFeedback = (props: Props) => {
//   const { setIsApplicationDetailsOpen } = props;
//   const handleClose = () => {
//     setIsApplicationDetailsOpen(false);
//   };
//   return (
//     <div className="RejectedFeedbackComponent">
//       <span className="imgSpanDiv" onClick={handleClose}>
//         <img src={xclose} alt="Cancel" className="closeImage" />
//       </span>
//       <div className="descriptionDiv">
//         <span className="descriptionText">
//           Please provide reason(s) for topic rejection
//         </span>
//         <div className="listofReasonContainer">
//           <ul className="reasonList">
//             <li>
//               <img src={radiobutton} alt="Reason Icon" className="reasonIcon" />
//               <span className="reasonText">
//                 Inappropriate or Offensive Content
//               </span>
//             </li>
//             <li>
//               <img src={radiobutton} alt="Reason Icon" className="reasonIcon" />
//               <span className="reasonText">Violation of Privacy</span>
//             </li>
//             <li>
//               <img src={radiobutton} alt="Reason Icon" className="reasonIcon" />
//               <span className="reasonText">Technical Errors</span>
//             </li>
//             <li>
//               <img src={radiobutton} alt="Reason Icon" className="reasonIcon" />
//               <span className="reasonText">Reason 4</span>
//             </li>
//             <li>
//               <img src={radiobutton} alt="Reason Icon" className="reasonIcon" />
//               <span className="reasonText">
//                 Request by Platform Administrators
//               </span>
//             </li>
//             <li>
//               <img src={radiobutton} alt="Reason Icon" className="reasonIcon" />
//               <span className="reasonText">Others</span>
//             </li>
//           </ul>
//         </div>
//         <textarea
//           className="textArea"
//           placeholder="Please specify the reason"
//         ></textarea>
//       </div>
//       <button className="rejectedSubmitButton">Submit</button>
//     </div>
//   );
// };

// export default RejectedFeedback;

import React, { useState } from "react";
import "../../styles/dashboard/RejectedFeedback.css";
import xclose from "../../assets/xclose.png";
import radiobutton from "../../assets/radiobutton.png";

type Props = {
  setIsApplicationDetailsOpen: any;
};

const RejectedFeedback = (props: Props) => {
  const { setIsApplicationDetailsOpen } = props;
  const [selectedReason, setSelectedReason] = useState("");
  const [specifiedReason, setSpecifiedReason] = useState("");

  const handleClose = () => {
    setIsApplicationDetailsOpen(false);
  };

  const handleReasonSelect = (reason: string) => {
    setSelectedReason(reason);
  };

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setSpecifiedReason(event.target.value);
  };

  const handleSubmit = () => {
    // Do something with the selected reason and specified reason
    console.log("Selected Reason:", selectedReason);
    console.log("Specified Reason:", specifiedReason);
  };

  return (
    <div className="RejectedFeedbackComponent">
      <span className="imgSpanDiv" onClick={handleClose}>
        <img src={xclose} alt="Cancel" className="closeImage" />
      </span>
      <div className="descriptionDiv">
        <span className="descriptionText">
          Please provide reason(s) for topic rejection
        </span>
        <div className="listofReasonContainer">
          <ul className="reasonList">
            <li
              onClick={() =>
                handleReasonSelect("Inappropriate or Offensive Content")
              }
            >
              <img src={radiobutton} alt="Reason Icon" className="reasonIcon" />
              <span className="reasonText">
                Inappropriate or Offensive Content
              </span>
            </li>
            <li onClick={() => handleReasonSelect("Violation of Privacy")}>
              <img src={radiobutton} alt="Reason Icon" className="reasonIcon" />
              <span className="reasonText">Violation of Privacy</span>
            </li>
            <li onClick={() => handleReasonSelect("Technical Errors")}>
              <img src={radiobutton} alt="Reason Icon" className="reasonIcon" />
              <span className="reasonText">Technical Errors</span>
            </li>
            <li onClick={() => handleReasonSelect("Reason 4")}>
              <img src={radiobutton} alt="Reason Icon" className="reasonIcon" />
              <span className="reasonText">Reason 4</span>
            </li>
            <li
              onClick={() =>
                handleReasonSelect("Request by Platform Administrators")
              }
            >
              <img src={radiobutton} alt="Reason Icon" className="reasonIcon" />
              <span className="reasonText">
                Request by Platform Administrators
              </span>
            </li>
            <li onClick={() => handleReasonSelect("Others")}>
              <img src={radiobutton} alt="Reason Icon" className="reasonIcon" />
              <span className="reasonText">Others</span>
            </li>
          </ul>
        </div>
        <textarea
          className="textArea"
          placeholder="Please specify the reason"
          value={specifiedReason}
          onChange={handleTextareaChange}
        ></textarea>
      </div>
      <button className="rejectedSubmitButton" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default RejectedFeedback;
