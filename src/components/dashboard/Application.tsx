import React, { useEffect, useState } from "react";
import "../../styles/dashboard/Application.css";
import profile from "../../assets/profile.png";
import clipboard_tick from "../../assets/clipboard_tick.png";
import category from "../../assets/category2.png";
// import "../../styles/dashboard/Application.css";

import { ApplicationData, IApplications } from "../../services/Data";

import Feedback from "../../assets/Feedback.png";
import Feedback1 from "../../assets/Feedback1.png";
import profilepic from "../../assets/profilepic.jpg";
import PaginationSection from "../pagination/PaginationSection";
import ApplicationDetails from "./ApplicationDetails";

type Props = {
  setIsApplicationDetailsOpen: any;
};
const Application = (props: Props) => {
  const { setIsApplicationDetailsOpen } = props;
  const [activeFilter, setActiveFilter] = useState("All");
  const [isApplicationDetails, setIsApplicationDetails] = useState(false);
  const [appliDetailsData, setAppliDetailsData] = useState<IApplications[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (isApplicationDetails === true) {
      setIsApplicationDetailsOpen(true);
    } else {
      setIsApplicationDetailsOpen(false);
    }
  }, [isApplicationDetails, setIsApplicationDetailsOpen]);
  const [statusCounts, setStatusCounts] = useState<{
    Accepted: number;
    Rejected: number;
    Rework: number;
    Pending: number;
  }>({
    Accepted: 0,
    Rejected: 0,
    Rework: 0,
    Pending: 0,
  });
  const [currApplicationData, setCurrApplicationData] = useState<
    IApplications[]
  >([]);
  const [displayOnApplication, setDisplayOnApplication] = useState<
    IApplications[]
  >([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState<IApplications[]>([]);

  useEffect(() => {
    const counts = {
      Accepted: 0,
      Rejected: 0,
      Rework: 0,
      Pending: 0,
    };

    ApplicationData.forEach((application) => {
      counts[application.Status as keyof typeof counts]++;
    });

    setStatusCounts(counts);
    setTotal(ApplicationData.length);
    setCurrApplicationData(ApplicationData);
  }, []);

  useEffect(() => {
    const filtered = currApplicationData.filter((application: IApplications) =>
      application.TeamName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [currApplicationData, searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterClick = (status: string) => {
    setActiveFilter(status);
    if (status === "All") {
      setCurrApplicationData(ApplicationData);
    } else {
      const filtered = ApplicationData.filter(
        (application) => application.Status === status
      );
      setCurrApplicationData(filtered);
    }
  };

  const formatDate = (date: Date | string): string => {
    if (typeof date === "string") {
      return date;
    } else {
      const options: any = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      return new Intl.DateTimeFormat("en-US", options).format(date);
    }
  };

  const cardData = [
    { title: "All", image: profile, count: total },
    { title: "Pending", image: category, count: statusCounts.Pending },
    { title: "Accepted", image: clipboard_tick, count: statusCounts.Accepted },
    { title: "Rejected", image: clipboard_tick, count: statusCounts.Rejected },
    {
      title: "Rework",
      image: clipboard_tick,
      count: statusCounts.Rework,
    },
  ];
  const handleAppliDetailsData = (data: any) => {
    setIsApplicationDetails(true);
    setAppliDetailsData(data);
  };
  return (
    <>
      <div className="ApplicationScreen">
        <div className="cardContainer">
          {cardData.map((card, index) => (
            <div className="Applicationcard" key={index}>
              <div className="cardContainer2">
                <div className="cardImageContainer">
                  <img src={card.image} alt="" className="cardImage" />
                </div>
                <div className="cardText">
                  <span className="cardTitle">{card.title}</span>
                  <span className="cardNum">{card.count}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="tableContainer">
          <div className="tableTopContainer">
            <span className="tableTitle">Applications</span>

            <div className="filterContainer">
              <div className="searchBox">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
                <input
                  type="search"
                  name=""
                  className="searchInput"
                  placeholder="Search by Team Name"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
          </div>

          <div className="displayTable">
            <div className="filterButtonContainer">
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
            </div>
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
                  onClick={() => handleAppliDetailsData(application)}
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
                    {formatDate(application.SubmissionDate)}
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
        {isApplicationDetails && (
          <ApplicationDetails
            setIsApplicationDetails={setIsApplicationDetails}
            appliDetailsData={appliDetailsData}
          />
        )}
        <div className="applicationPagination"></div>
        <PaginationSection
          setCurrentItem={setDisplayOnApplication}
          data={filteredData}
        />
      </div>
    </>
  );
};

export default Application;
