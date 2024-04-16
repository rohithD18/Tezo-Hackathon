import React, { useContext, useEffect, useState } from "react";
import "../../styles/dashboard/Events.css";
// import { EventsData } from "../../services/EventData";
import { IEvents, IProject } from "../../Interfaces";
import profilepic from "../../assets/profilepic.jpg";
import PaginationSection from "../pagination/PaginationSection";
import DashboardNav from "./DashboardNav";
import Feedback from "../../assets/Feedback.png";
import Feedback1 from "../../assets/Feedback1.png";
import EventSchedulePopUp from "./EventSchedulePopUp";
// import { getArrayItems } from "../../services/Services";
import { EventsData as Data } from "../../services/EventData";
import ApplicationDetails from "./ApplicationDetails";
import ViewBlur from "./ViewBlur";
import HackathonContext from "../../services/Context/HackathonContext";

const Events = () => {
  const hackathonContext = useContext(HackathonContext);
  const [currEventData, setCurrEventData] = useState<IEvents[]>(Data);
  const [statusCounts, setStatusCounts] = useState<{
    Completed: number;
    Upcoming: number;
    Pending: number;
  }>({
    Completed: 0,
    Upcoming: 0,
    Pending: 0,
  });
  const [displayOnEvent, setDisplayOnEvent] = useState<IEvents[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState<IEvents[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [total, setTotal] = useState(0);
  // const [isProjectManagement, setIsProjectManagement] =
  // useState<boolean>(false);
  const [isEventManagement, setIsEventManagement] = useState<boolean>(false);
  const [querySearch, setQuerySearch] = useState<string>("");
  const [isRating, setIsRating] = useState<boolean>(false);
  const [isRejectedFeed, setIsRejectedFeed] = useState<boolean>(false);

  const [appliDetailsData, setAppliDetailsData] = useState<IEvents>();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [scheduleEvent, setScheduleEvent] = useState<boolean>(false);
  const [EventsData, setEventsData] = useState<IEvents[]>(Data);
  const [addItem, setAddItem] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  // const [selectedRating, setSelectedRating]=useState<number>(0);
  useEffect(() => {
    setCurrEventData(EventsData);

    // getArrayItems(EventsData);
  }, [EventsData]);
  const updateEvents = (newitem: IEvents, appliDetailsData: any) => {
    if (appliDetailsData == undefined) {
      const updatedItems = EventsData;
      setEventsData([...updatedItems, newitem]);
    }
    if (appliDetailsData != undefined) {
      const updateItems = EventsData.map((item) => {
        if (item.Status === "Pending" && item.TeamName === newitem.TeamName) {
          return {
            ...item,
            Status: newitem.Status,
            SubmissionDate: newitem.SubmissionDate,
          };
        }

        return item;
      });
      setEventsData(updateItems);
    }
  };

  const handleAppliDetailsData = (data: IEvents) => {
    setAppliDetailsData(data);
    setIsEventManagement(true);
  };
  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder: any) =>
      prevSortOrder === "asc" ? "desc" : "asc"
    );
  };
  useEffect(() => {
    const filtered = currEventData.filter((event: IEvents) => {
      // handleClosePopup();
      if (event.TeamName) {
        return event.TeamName.toLowerCase().includes(searchQuery.toLowerCase());
      } else {
        return event;
      }
    });
    setFilteredData(filtered);
  }, [currEventData, searchQuery]);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  useEffect(() => {
    const counts = {
      Completed: 0,
      Upcoming: 0,
      Pending: 0,
    };

    EventsData.forEach((event) => {
      counts[event.Status as keyof typeof counts]++;
    });

    setStatusCounts(counts);
    setTotal(EventsData.length);
    const filtered = [...EventsData].sort((a, b) => {
      const aValue = a.SubmissionDate instanceof Date ? a.SubmissionDate.getTime() :Infinity;
      const bValue = b.SubmissionDate instanceof Date ? b.SubmissionDate.getTime() : Infinity;
      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
    });
    console.log(filtered)
    setCurrEventData(filtered);
  }, [EventsData, sortOrder]);
  const handleFilterClick = (status: string) => {
   
    setActiveFilter(status);
    if (status === "All") {
      const filtered = [...EventsData].sort((a, b) => {
        const aValue = a.SubmissionDate instanceof Date ? a.SubmissionDate.getTime() :Infinity;
        const bValue = b.SubmissionDate instanceof Date ? b.SubmissionDate.getTime() : Infinity;
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      });
      setCurrEventData(filtered);
      hackathonContext.setActivePage(0);
      hackathonContext.setItemOffset(0);
    } else {
      const filtered = [...EventsData].filter(
        (event) => event.Status === status
      ).sort((a, b) => {
        const aValue = a.SubmissionDate instanceof Date ? a.SubmissionDate.getTime() :Infinity;
        const bValue = b.SubmissionDate instanceof Date ? b.SubmissionDate.getTime() : Infinity;
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      });
      setCurrEventData(filtered);
      hackathonContext.setActivePage(0);
      hackathonContext.setItemOffset(0);
    }
  };
  useEffect(() => {
    handleFilterClick(activeFilter);
  }, [sortOrder, activeFilter]);
  useEffect(() => {
    scheduleEvent && setIsPopupOpen(true);
  }, [scheduleEvent, appliDetailsData && appliDetailsData]);

  const handleOpenPopup = () => {
    setAddItem(true);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setAddItem(false);
    setIsPopupOpen(false);
    setScheduleEvent(false);
  };
  const handleChildData = (data: number) => {
    console.log(data);
    const updateItems = EventsData.map((item) => {
      if (
        item.Status === "Completed" &&
        item.review === false &&
        item.TeamName === appliDetailsData?.TeamName
      ) {
        // console.log("hi")
        return { ...item, ProjectSubmissionScore: data, review: true };
      }
      return item;
    });
    setEventsData(updateItems);

    console.log("in events", appliDetailsData);
    console.log(EventsData);
    // Do something with the data received from the child
  };
  return (
    <>
      {/* <DashboardNav /> */}
      <div className="EventManagement">
        <div className="EventsScreen1">
          <span className="eventTitle">Event Management</span>
          <div className="searchAndbuttonAlignment">
            <button className="addNew" onClick={handleOpenPopup}>
              + Add new
            </button>

            <div className="eventSearchBox">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
        <div className="userDisplayTable">
          <div className="filterButtonContainer">
            <button
              className={`btnAll ${activeFilter === "All" ? "hovered" : ""}`}
              onClick={() => handleFilterClick("All")}
            >
              All
            </button>
            <button
              className={`btnPending ${
                activeFilter === "Upcoming" ? "hovered" : ""
              }`}
              onClick={() => handleFilterClick("Upcoming")}
            >
              Upcoming
            </button>
            <button
              className={`btnAccepted ${
                activeFilter === "Completed" ? "hovered" : ""
              }`}
              onClick={() => handleFilterClick("Completed")}
            >
              Completed
            </button>
            <button
              className={`btnRejected ${
                activeFilter === "Pending" ? "hovered" : ""
              }`}
              onClick={() => handleFilterClick("Pending")}
            >
              Pending
            </button>
          </div>
          <table className="table">
            <thead className="tableRow">
              <th className="tableHeadingTitle" style={{ width: "13%" }}>
                Team Name
              </th>
              <th className="tableHeadingTitle" style={{ width: "12%" }}>
                Captain
              </th>
              <th className="tableHeadingTitle" style={{ width: "36%" }}>
                Topic
              </th>
              <th className="tableHeadingTitle" style={{ width: "15%" }}>
                Date& Time
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 14 14"
                  fill="none"
                  style={{ background: "none", cursor: "pointer" }}
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={toggleSortOrder}
                >
                  <path
                    d="M5.75002 3.87419C5.58923 3.86189 5.43966 3.78711 5.33335 3.66586L3.66668 1.99919L2.00002 3.66586C1.95692 3.75608 1.89281 3.83465 1.81307 3.89497C1.73332 3.95529 1.64027 3.99559 1.54172 4.0125C1.44318 4.02941 1.34201 4.02243 1.24672 3.99214C1.15143 3.96185 1.0648 3.90915 0.994094 3.83844C0.923391 3.76774 0.870684 3.68111 0.840397 3.58582C0.810111 3.49053 0.803128 3.38936 0.820036 3.29081C0.836944 3.19227 0.877249 3.09921 0.937568 3.01947C0.997886 2.93972 1.07646 2.87561 1.16668 2.83252L3.25002 0.749189C3.3672 0.632147 3.52606 0.566406 3.69168 0.566406C3.85731 0.566406 4.01616 0.632147 4.13335 0.749189L6.16668 2.83252C6.26917 2.94711 6.32584 3.09545 6.32584 3.24919C6.32584 3.40293 6.26917 3.55127 6.16668 3.66586C6.06038 3.78711 5.9108 3.86189 5.75002 3.87419Z"
                    fill="#EEEEEE"
                  />
                  <path
                    d="M3.6665 13.4577C3.50141 13.4555 3.34369 13.389 3.22695 13.2722C3.1102 13.1555 3.04366 12.9978 3.0415 12.8327V1.16602C3.0415 1.00026 3.10735 0.841284 3.22456 0.724074C3.34177 0.606864 3.50074 0.541016 3.6665 0.541016C3.83226 0.541016 3.99124 0.606864 4.10845 0.724074C4.22566 0.841284 4.2915 1.00026 4.2915 1.16602V12.8327C4.28935 12.9978 4.2228 13.1555 4.10606 13.2722C3.98931 13.389 3.83159 13.4555 3.6665 13.4577Z"
                    fill="#EEEEEE"
                  />
                  <path
                    d="M10.3332 13.4572C10.2511 13.4576 10.1697 13.4416 10.0939 13.4101C10.018 13.3786 9.94922 13.3323 9.89152 13.2739L7.83319 11.1655C7.74296 11.1225 7.66439 11.0583 7.60407 10.9786C7.54375 10.8989 7.50345 10.8058 7.48654 10.7073C7.46963 10.6087 7.47661 10.5075 7.5069 10.4122C7.53719 10.317 7.5899 10.2303 7.6606 10.1596C7.7313 10.0889 7.81793 10.0362 7.91322 10.0059C8.00851 9.97564 8.10968 9.96866 8.20823 9.98556C8.30678 10.0025 8.39983 10.0428 8.47957 10.1031C8.55932 10.1634 8.62343 10.242 8.66652 10.3322L10.3332 11.9989L11.9999 10.3322C12.0429 10.242 12.1071 10.1634 12.1868 10.1031C12.2665 10.0428 12.3596 10.0025 12.4581 9.98556C12.5567 9.96866 12.6579 9.97564 12.7531 10.0059C12.8484 10.0362 12.9351 10.0889 13.0058 10.1596C13.0765 10.2303 13.1292 10.317 13.1595 10.4122C13.1898 10.5075 13.1967 10.6087 13.1798 10.7073C13.1629 10.8058 13.1226 10.8989 13.0623 10.9786C13.002 11.0583 12.9234 11.1225 12.8332 11.1655L10.7499 13.2489C10.6435 13.3701 10.494 13.4449 10.3332 13.4572Z"
                    fill="#EEEEEE"
                  />
                  <path
                    d="M10.3335 13.4577C10.1684 13.4555 10.0107 13.389 9.89394 13.2722C9.7772 13.1555 9.71065 12.9978 9.7085 12.8327V1.16602C9.7085 1.00026 9.77434 0.841284 9.89155 0.724074C10.0088 0.606864 10.1677 0.541016 10.3335 0.541016C10.4993 0.541016 10.6582 0.606864 10.7754 0.724074C10.8926 0.841284 10.9585 1.00026 10.9585 1.16602V12.8327C10.9563 12.9978 10.8898 13.1555 10.7731 13.2722C10.6563 13.389 10.4986 13.4555 10.3335 13.4577Z"
                    fill="#EEEEEE"
                  />
                </svg>
              </th>
              <th className="tableHeadingTitle" style={{ width: "12%" }}>
                Status
              </th>
              <th className="tableHeadingTitle" style={{ width: "12%" }}>
                Review
              </th>
            </thead>

            {displayOnEvent.map((event, index) => (
              <tr
                className="tableRowDataEvent"
                key={index}
                onClick={() => handleAppliDetailsData(event)}
              >
                <td className="tableRowTitle">
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
                    {event.TeamName}
                  </span>
                </td>
                <td className="tableRowTitle">
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
                    {event.captain}
                  </span>
                </td>
                <td className="tableRowTitle">{event.topic}</td>
                <td className="tableRowTitle">
                  {event.SubmissionDate
                    ? event.SubmissionDate.toLocaleString()
                    : "--"}
                </td>

                <td className="statusTitle">
                  <div className={`statusTitleData ${event.Status}`}>
                    {event.Status}
                  </div>
                </td>
                <td className="tableRowTitle">
                  {event.review ? (
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
              </tr>
            ))}
          </table>

          <div className="userPagination">
            <PaginationSection
              setCurrentItem={setDisplayOnEvent}
              data={filteredData}
              screen="events"
            />
          </div>
          {isEventManagement && (
            <ApplicationDetails
              isProjectManagement={false}
              isEventManagement={isEventManagement}
              appliDetailsData={appliDetailsData}
              setIsApplicationDetails={setIsEventManagement}
              setIsRating={setIsRating}
              setIsRejectedFeed={setIsRejectedFeed}
              setScheduleEvent={setScheduleEvent}
              // selectedRatingValue={selectedRating}
            />
          )}
        </div>
        {(isRejectedFeed || isRating || isEventManagement) && (
          <ViewBlur
            isRating={isRating}
            isRejectedFeed={isRejectedFeed}
            setIsRejectedFeed={setIsRejectedFeed}
            setIsRating={setIsRating}
            selectedRatingValue={handleChildData}
          />
        )}
      </div>
      {isPopupOpen && addItem && (
        <EventSchedulePopUp
          onClose={handleClosePopup}
          updateEvents={updateEvents}
          DataOfEvents={EventsData}
        />
      )}
      {isPopupOpen && scheduleEvent && (
        <EventSchedulePopUp
          onClose={handleClosePopup}
          updateEvents={updateEvents}
          DataOfEvents={EventsData}
          appliDetailsData={appliDetailsData}
          setIsApplicationDetails={setIsEventManagement}
        />
      )}
    </>
  );
};

export default Events;
