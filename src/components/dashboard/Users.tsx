import React, { useState } from 'react'
import "../../styles/dashboard/Application.css";
import profile from "../../assets/profile.png";
import clipboard_tick from "../../assets/clipboard_tick.png";
import category from "../../assets/category2.png";
// import "../../styles/dashboard/Application.css";

import { ApplicationData, IApplications } from "../../services/Data";

import Feedback from "../../assets/Feedback.png";
import Feedback1 from "../../assets/Feedback1.png";
import profilepic from "../../assets/profilepic.jpg";
import Status from "../../assets/Status.png";
import PaginationSection from "../pagination/PaginationSection";
export default function Users() {
    const [displayOnApplication, setDisplayOnApplication] = useState<
    IApplications[]
  >([]);
  return (
    <div>
      <div className="displayTable">
            {/* <div className="filterButtonContainer">
              <button
                className={`btnAll ${activeFilter === "All" ? "hovered" : ""}`}
                onClick={() => handleFilterClick("All")}
              >
                All
              </button>
              <button
                className={`btnPending ${
                  activeFilter === "Pending" ? "hovered" : ""
                }`}
                onClick={() => handleFilterClick("Pending")}
              >
                Pending
              </button>
              <button
                className={`btnAccepted ${
                  activeFilter === "Accepted" ? "hovered" : ""
                }`}
                onClick={() => handleFilterClick("Accepted")}
              >
                Accepted
              </button>
              <button
                className={`btnRejected ${
                  activeFilter === "Rejected" ? "hovered" : ""
                }`}
                onClick={() => handleFilterClick("Rejected")}
              >
                Rejected
              </button>
            </div> */}
            <table className="table">
              <thead className="tableRow">
                <th className="teamTitle">Team Name</th>
                <th className="captTitle">Captain</th>
                <th className="projectTitle">Project Name</th>
                <th className="projectSubmit">Project Submitted</th>
                <th className="dateTitle">Submission Date</th>
                <th className="statusTitle">Status</th>
              </thead>
 
              {displayOnApplication.map((application, index) => (
                <tr
                  className="tableRowData"
                  key={index}
                //   onClick={() => handleAppliDetailsData(application)}
                >
                  <td className="teamTitle">{application.TeamName}</td>
                  <td className="captTitleData">
                    <span
                      style={{ background: "none" }}
                      className="captTitleDataSpan"
                    >
                      <img
                        src={profilepic}
                        alt="img"
                        style={{
                          width: "24px",
                          height: "24px",
                          background: "none",
                          border: "none",
                        }}
                      />
                      {application.TeamCaptian}
                    </span>
                  </td>
                  <td className="projectTitle">{application.ProjectName}</td>
                  <td className="projectSubmit">
                    {application.ProjectedSubmitted ? (
                      <img
                        src={Feedback}
                        alt="feedback"
                        className="ProjectedSubmittedImg"
                      />
                    ) : (
                      <img
                        src={Feedback1}
                        alt="Feedback"
                        className="ProjectedSubmittedImg"
                      />
                    )}
                  </td>
                  <td className="dateTitle">
                    {/* {formatDate(application.SubmissionDate)} */}
                  </td>
                  <td className="statusTitle">
                    <div
                      className={`statusTitleData ${application.Status.toLowerCase()}`}
                    >
                      {application.Status}
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </div>
    </div>
  )
}
