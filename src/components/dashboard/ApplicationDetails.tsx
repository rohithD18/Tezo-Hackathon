import React, { useEffect, useState } from "react";
import xclose from "../../assets/xclose.png";
import arrow_up_right from "../../assets/arrow_up_right.png";
import Ellipse811 from "../../assets/Ellipse811.png";
import clock from "../../assets/clock.png";
import "../../styles/dashboard/ApplicationDetails.css";
import { IApplications } from "../../services/Data";
import { IEvents, IProject } from "../../Interfaces";
type Props = {
  setIsApplicationDetails: (message: boolean) => void;
  appliDetailsData?: IApplications | IProject |IEvents;
  setIsRating: (message: boolean) => void;
  setIsRejectedFeed: (message: boolean) => void;
  isProjectManagement: boolean;
  isEventManagement?:boolean;
  setScheduleEvent?:(message: boolean) => void;
 
};

const ApplicationDetails: React.FC<Props> = (props: Props) => {
  const {
    setIsApplicationDetails,
    appliDetailsData,
    setIsRating,
    setIsRejectedFeed,
    isProjectManagement,
    isEventManagement,
    setScheduleEvent,
   
  } = props;


  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const modal1 = document.querySelector(".ApplicationScreen");
      const modal3 = document.querySelector(".table");
      const modal2 = document.querySelector(".projectManagementData");
      if (modal1 && !modal1.contains(event.target as Node) ) {
        setIsApplicationDetails(false);
      }
      if (modal2 && !modal2.contains(event.target as Node)) {
        setIsApplicationDetails(false);
      }
      if (modal3 && !modal3.contains(event.target as Node)) {
        setIsApplicationDetails(false);
      }

    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [setIsApplicationDetails]);

  let formattedDate: string = "";
  let formattedTime: string = "";
//  const [schedule,setSchedule]=useState<boolean>(false);
  if (appliDetailsData?.SubmissionDate) {
    const dateObject = new Date(appliDetailsData?.SubmissionDate);
    formattedDate = `${dateObject.getDate()} ${dateObject.toLocaleString(
      "default",
      { month: "short" }
    )} ${dateObject.getFullYear()}`;

    let hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    // Formatting the time
    formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
  }

  const handleClose = () => {
    setIsApplicationDetails(false);
    setIsRating(false);
    setIsRejectedFeed(false);
  };

  const handleAccept = () => {
    setIsApplicationDetails(false);
    setIsRating(true)
  };
  const handleScheduleEvent=()=>{
    setScheduleEvent !==undefined && setScheduleEvent(true);
  }
 
  const handleReject = () => {
    setIsRejectedFeed(true);
    setIsApplicationDetails(false);
  };

  return (
    <div className="applicationDetails">
      <div className="headerBar">
      {isProjectManagement ? (
  <div className="title">Project Details</div>
) : isEventManagement ? (
  <div className="title">Event Details</div>
) : (
  <span className="title">Application Details</span>
)}

        <img
          src={xclose}
          alt="Cancel"
          className="cancelImage"
          onClick={handleClose}
        />
      </div>
      <div className="detailsContainer">
        {isEventManagement && <>
          { appliDetailsData?.Status === "Pending" && <div className="tableHeaderContainer"><h5>Overview</h5>
          <div  onClick={handleScheduleEvent}>
                <img
                  src={clock}
                  alt="Captain"
                  className="clockImage"
                />
            <label className="scheduleNow">Schedule Now</label>
            </div>
             
          </div>}
      <table className="tablefirst">
          
          <tbody className="tablefirstBody">
            {/* <tr>
              <td style={{ color: "#B4B4B4" }}>Team Name</td>
              <td>
                {appliDetailsData?.TeamName}
                <img
                  src={arrow_up_right}
                  alt="Arrow Up Right"
                  style={{ width: "24px", height: "24px" }}
                />
              </td>
            </tr> */}
            <tr>
              <td style={{ color: "#B4B4B4" }}>Status</td>
              <td className={`statusTitleData ${appliDetailsData?.Status}`}>

                {appliDetailsData?.Status}
              </td>
            </tr>
            
               
                <tr>
                  <td style={{ color: "#B4B4B4" }}>Date</td>
                  <td>{formattedDate ? formattedDate: "----"}</td>
                </tr>
                <tr>
                  <td style={{ color: "#B4B4B4" }}>Time</td>
                  <td>{formattedTime ?formattedTime:"----"}</td>
                </tr>

          </tbody>
        </table>
        </>}
        <table className="tablefirst">
          <p className="tableHeader">Team Details</p>
          <tbody className="tablefirstBody">
            <tr>
              <td style={{ color: "#B4B4B4" }}>Team Name</td>
              <td>
                {appliDetailsData?.TeamName}
                <img
                  src={arrow_up_right}
                  alt="Arrow Up Right"
                  style={{ width: "24px", height: "24px" }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ color: "#B4B4B4" }}>Captain</td>
              <td>
                <img
                  src={Ellipse811}
                  alt="Captain"
                  style={{
                    width: "22px",
                    height: "22px",
                    marginRight: "5px",
                  }}
                />
                {appliDetailsData?.TeamName}
              </td>
            </tr>
            {!isProjectManagement  && !isEventManagement  ? (
              <>
                <tr>
                  <td style={{ color: "#B4B4B4" }}>Date</td>
                  <td>{formattedDate}</td>
                </tr>
                <tr>
                  <td style={{ color: "#B4B4B4" }}>Time</td>
                  <td>{formattedTime}</td>
                </tr>
              </>
            ) : (
              <></>
            )}
          </tbody>
        </table>
        <table className="table1">
          <p className="table2Header">Topic Submission Details</p>
          <tbody>
            <tr>
              <td style={{ color: "#B4B4B4" }}>Topic</td>
              <td>CodeHarmony: Bridging Tech Gaps</td>
            </tr>
            <tr>
              <td style={{ color: "#B4B4B4" }}>Topic Description</td>
              <td>
                Collaborative coding for diverse teams! Create solutions
                enhancing teamwork, code integration, and inclusivity. How can
                tech bring harmony to coding practices? Propose ideas empowering
                efficient collaboration. Let's harmonize the coding experience!
                🌐💻
              </td>
            </tr>
            {props.isProjectManagement || props.isEventManagement ? (
              <>
                <tr>
                  <td style={{ color: "#B4B4B4" }}>Project Descripition</td>
                  <td>
                    Collaborative coding for diverse teams! Create solutions
                    enhancing teamwork, code integration, and inclusivity. How
                    can tech bring harmony to coding practices? Propose ideas
                    empowering efficient collaboration. Let's harmonize the
                    coding experience! 🌐💻
                  </td>
                </tr>
                <tr>
                  <td style={{ color: "#B4B4B4" }}>Submission</td>
                  <td>
                    Collaborative coding for diverse teams! Create solutions
                    enhancing teamwork, code integration, and inclusivity. How
                    can tech bring harmony to coding practices? Propose ideas
                    empowering efficient collaboration. Let's harmonize the
                    coding experience! 🌐💻
                  </td>
                </tr>
              </>
            ) : (
              <></>
            )}
          </tbody>
        </table>

        {isProjectManagement || (isEventManagement  && appliDetailsData?.Status === "Completed") ? (
          <div className="btnConatainer">
            <button
              className="sheduleButton"
              style={{ cursor: "pointer" }}
              onClick={handleAccept}
            >
              Review
            </button>
          </div>
        ) : appliDetailsData?.Status === "Pending" && !isEventManagement? (
          <div className="btnConatainer">
            <button
              className="rejectButton"
              style={{ cursor: "pointer" }}
              onClick={handleReject}
            >
              Reject
            </button>
            <button className="acceptButton" onClick={handleAccept}>
              Accept
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
      
    </div>
  );
};

export default ApplicationDetails;
