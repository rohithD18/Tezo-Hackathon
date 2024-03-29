import React from "react";
import xclose from "../../assets/xclose.png";
import arrow_up_right from "../../assets/arrow_up_right.png";
import Ellipse811 from "../../assets/Ellipse811.png";
import "../../styles/dashboard/ApplicationDetails.css";
import { ApplicationData } from "../../services/Data";
type Props = {
  setIsApplicationDetails: any;
  appliDetailsData: any;
};

const ApplicationDetails = (props: Props) => {
  const { setIsApplicationDetails, appliDetailsData } = props;
  console.log(appliDetailsData);

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const modal = document.querySelector(".ApplicationScreen");
      if (modal && !modal.contains(event.target as Node)) {
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

  const submissionDate = appliDetailsData?.SubmissionDate;
  if (submissionDate) {
    const dateObject = new Date(submissionDate);
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
  };
  const handleAccept = () => {
    // const id = appliDetailsData.Id;
    // ApplicationData[id].Status = "Accepted";
    setIsApplicationDetails(false);
  };
  const handleReject = () => {
    // const id = appliDetailsData.Id;
    // ApplicationData[id].Status = "Rejected";
    setIsApplicationDetails(false);
  };

  return (
    <div className="applicationDetails">
      <div className="headerBar">
        <div className="title">Application Details</div>
        <img
          src={xclose}
          alt="Cancel"
          className="cancelImage"
          onClick={handleClose}
        />
      </div>
      <div className="detailsContainer">
        <table className="table1">
          <span className="tableHeader">Team Details</span>
          <tbody>
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
            <tr>
              <td style={{ color: "#B4B4B4" }}>Date</td>
              <td>{formattedDate}</td>
            </tr>
            <tr>
              <td style={{ color: "#B4B4B4" }}>Time</td>
              <td>{formattedTime}</td>
            </tr>
          </tbody>
        </table>
        <table className="table1">
          <span className="table2Header">Topic Submission Details</span>
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
          </tbody>
        </table>
        {appliDetailsData.Status === "Pending" ? (
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
