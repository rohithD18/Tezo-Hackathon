import React, { useState } from "react";
import "../../styles/dashboard/RejectedFeedback.css";
import xclose from "../../assets/xclose.png";

type Props = {
  setIsRejectedFeed: (message: boolean) => void;
};

const RejectedFeedback = (props: Props) => {
  const { setIsRejectedFeed } = props;

  const [selectedReason, setSelectedReason] = useState<any>({
    id: "",
    radio: "",
    text: "",
  });
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedReason({ ...selectedReason, radio: e.target.value });
  };
  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setSelectedReason({ ...selectedReason, text: event.target.value });
  };
  const handleClose = () => {
    setIsRejectedFeed(false);
  };

  const handleSubmit = () => {
    console.log("radio Reason", selectedReason);
    // console.log("text Reason", selectedReason);
    setIsRejectedFeed(false);
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
          <div className="radioContainer">
            <input
              type="radio"
              id="reason1"
              name="reason"
              value="Inappropriate or Offensive Content"
              className="radioIcon"
              onChange={handleRadioChange}
            />
            <label htmlFor="reason1" className="reasonLabel">
              Inappropriate or Offensive Content
            </label>
          </div>
          <div className="radioContainer">
            <input
              type="radio"
              id="reason1"
              name="reason"
              value="False information"
              onChange={handleRadioChange}
              className="radioIcon"
            />
            <label htmlFor="reason2" className="reasonLabel">
              False information
            </label>
          </div>
          <div className="radioContainer">
            <input
              type="radio"
              id="reason1"
              name="reason"
              value="Violation of Privacy"
              onChange={handleRadioChange}
              className="radioIcon"
            />
            <label htmlFor="reason3" className="reasonLabel">
              Violation of Privacy
            </label>
          </div>
          <div className="radioContainer">
            <input
              type="radio"
              id="reason1"
              name="reason"
              onChange={handleRadioChange}
              value="Technical Errors"
              className="radioIcon"
            />
            <label htmlFor="reason4" className="reasonLabel">
              Technical Errors
            </label>
          </div>
          <div className="radioContainer">
            <input
              type="radio"
              id="reason1"
              onChange={handleRadioChange}
              name="reason"
              value="Request by Platform Administrators"
              className="radioIcon"
            />
            <label htmlFor="reason5" className="reasonLabel">
              Request by Platform Administrators
            </label>
          </div>
          <div className="radioContainer">
            <input
              type="radio"
              id="reason1"
              name="reason"
              onChange={handleRadioChange}
              value="Others"
              className="radioIcon"
            />
            <label htmlFor="reason6" className="reasonLabel">
              Others
            </label>
          </div>
        </div>
        <textarea
          className="textArea"
          placeholder="Please specify the reason"
          value={selectedReason.text}
          onChange={handleTextAreaChange}
        ></textarea>
      </div>
      <button className="rejectedSubmitButton" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default RejectedFeedback;
