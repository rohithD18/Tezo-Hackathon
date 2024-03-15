import React from "react";
import "../../styles/submissionStatus/SessionInvitation.css";

const SessionInvitation: React.FC = () => {
  return (
    <div className="SesscionInvitationDiv">
      <p id="header">Woohoo! One-on-One Session Invitation</p>
      <p id="invitationMsg">
        🎉 Congratulations! Your team's topic submission has stood out, making
        it among the first 5 selected for an exclusive one-on-one session with
        the expert judges panel at the Tezo Hackathon. 🌟
      </p>
      <p id="reviewLbl">Review Session Details</p>
      <div className="tableD">
        <p id="tHead">Date</p> <p id="tData">3rd August 2023</p>
      </div>
      <div className="tableD">
        <p id="tHead">Time</p> <p id="tData">12:30 PM</p>
      </div>
      <div className="tableD">
        <p id="tHead">Duration</p>
        <p id="tData">30 minutes</p>
      </div>
      <div className="tableD">
        <p id="tHead">Link to the meething</p> <p id="tData">abcdefff</p>
      </div>
      <hr />
      <p id="bottomH">What to Expect</p>
      <div className="expectationList">
        <p>You'll have the chance to</p>
        <ul>
          <li>Discuss your topic in-depth.</li>
          <li>Discuss your approach and innovative ideas.</li>
          <li>Receive valuable feedback from our esteemed judges.</li>
        </ul>
      </div>
    </div>
  );
};

export default SessionInvitation;
