import React, { useEffect, useState } from "react";
import "../../styles/dashboard/Events.css";
// import { EventsData } from "../../services/EventData";
import { IEvents} from "../../Interfaces";
import profilepic from "../../assets/profilepic.jpg";
import PaginationSection from "../pagination/PaginationSection";
import DashboardNav from "./DashboardNav";
import Feedback from "../../assets/Feedback.png";
import Feedback1 from "../../assets/Feedback1.png";
import  EventSchedulePopUp  from "./EventSchedulePopUp";
// import { getArrayItems } from "../../services/Services";
import { EventsData as Data} from "../../services/EventData";

const Events = () => {
  const [currEventData, setCurrEventData] = useState<
    IEvents[]
  >(Data);
  const [statusCounts, setStatusCounts] = useState<{
    Completed: number;
    Upcoming: number;
    Pending: number;
  }>({
    Completed: 0,
    Upcoming: 0,
    Pending: 0,
  });
  const [displayOnEvent, setDisplayOnEvent] = useState<
    IEvents[]
  >([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState<IEvents[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [total, setTotal] = useState(0);
  const [scheduledData, setScheduledData] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [EventsData, setEventsData] = useState<IEvents[]>(Data);

  useEffect(() => {
    setCurrEventData(EventsData);
    // getArrayItems(EventsData);
  }, [EventsData]);
  const updateEvents = (newitem: IEvents) => {
    setEventsData([...EventsData,newitem]);
  };
  useEffect(() => {
    const filtered = currEventData.filter((event:IEvents ) =>{
      console.log("jdhciu",event);
      if(event.teamName){  
        return event.teamName.toLowerCase().includes(searchQuery.toLowerCase()) }
      else{
        return event
      }
    }
    );
    setFilteredData(filtered);
  }, [currEventData, searchQuery]);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const handleFilterClick = (status: string) => {
    setActiveFilter(status);
    if (status === "All") {
        setCurrEventData(EventsData);
    } else {
      const filtered = EventsData.filter(
        (event) => event.status === status
      );
      setCurrEventData(filtered);
    }
  };
  useEffect(() => {
    const counts = {
        Completed: 0,
        Upcoming: 0,
        Pending: 0,
    };

    EventsData.forEach((event) => {
      counts[event.status as keyof typeof counts]++;
    });

    setStatusCounts(counts);
    setTotal(EventsData.length);
    setCurrEventData(EventsData);
  }, [EventsData]);


  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <><DashboardNav/>
    <div className="EventManagement">
      <div className="EventsScreen1">
            <span className="eventTitle">Event Management</span>
            <div className="searchAndbuttonAlignment">
                <button className="addNew" onClick={handleOpenPopup}>+ Add new</button>
              
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
                <th className="tableHeadingTitle" style={{width:"13%"}}>Team Name</th>
                <th className="tableHeadingTitle" style={{width:"12%"}}>Captain</th>
                <th className="tableHeadingTitle" style={{width:"36%"}}>Topic</th>
                <th className="tableHeadingTitle" style={{width:"15%"}}>Date& Time</th>
                <th className="tableHeadingTitle" style={{width:"12%"}}>Status</th>
                <th className="tableHeadingTitle" style={{width:"12%"}}>Review</th>
              </thead>

              {displayOnEvent.map((event, index) => (
                <tr
                  className="tableRowDataEvent"
                  key={index}
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
                      {event.teamName}
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
                  <td className="tableRowTitle">{event.dateAndTime ? event.dateAndTime.toLocaleString() : "--"
}</td>
               
<td className="statusTitle">
                    <div
                      className={`statusTitleData ${event.status}`}
                    >
                      {event.status}
                    </div>
                  </td>
                  <td className="tableRowTitle">
                  {event.review? (
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
      </div>
      </div>
      <EventSchedulePopUp isOpen={isPopupOpen} onClose={handleClosePopup} updateEvents={updateEvents}/>

    </>
  );
};

export default Events;
