import React, { useEffect, useState } from "react";
import "../../styles/dashboard/Events.css";
// import { EventsData } from "../../services/EventData";
import { IEvents, IProject} from "../../Interfaces";
import profilepic from "../../assets/profilepic.jpg";
import PaginationSection from "../pagination/PaginationSection";
import DashboardNav from "./DashboardNav";
import Feedback from "../../assets/Feedback.png";
import Feedback1 from "../../assets/Feedback1.png";
import  EventSchedulePopUp  from "./EventSchedulePopUp";
// import { getArrayItems } from "../../services/Services";
import { EventsData as Data} from "../../services/EventData";
import ApplicationDetails from "./ApplicationDetails";
import ViewBlur from "./ViewBlur";

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
  // const [isProjectManagement, setIsProjectManagement] =
  // useState<boolean>(false);
  const [isEventManagement, setIsEventManagement] =
  useState<boolean>(false);
const [querySearch, setQuerySearch] = useState<string>("");
const [isRating, setIsRating] = useState<boolean>(false);
const [isRejectedFeed, setIsRejectedFeed] = useState<boolean>(false);

const [appliDetailsData, setAppliDetailsData] = useState<IEvents>(
);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [scheduleEvent, setScheduleEvent] = useState<boolean>(false);
  const [EventsData, setEventsData] = useState<IEvents[]>(Data);
  const [addItem, setAddItem]=useState<boolean>(false);
  const [selectedRating, setSelectedRating]=useState<number>(0);
  useEffect(() => {
    setCurrEventData(EventsData);
   
    // getArrayItems(EventsData);
  }, [EventsData]);
  const updateEvents = (newitem: IEvents,appliDetailsData:any) => {
   if(appliDetailsData==undefined){
    const updatedItems = EventsData;
    setEventsData([...updatedItems,newitem]);
  }
    if(appliDetailsData!=undefined){
      const updateItems =EventsData.map(item => {

      if (item.Status === 'Pending' && item.TeamName === newitem.TeamName) {

        return { ...item,Status:newitem.Status,SubmissionDate:newitem.SubmissionDate };

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
  useEffect(() => {

    const filtered = currEventData.filter((event:IEvents ) =>{
   
      // handleClosePopup();
      if(event.TeamName){  
        return event.TeamName.toLowerCase().includes(searchQuery.toLowerCase()) }
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
        (event) => event.Status === status
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
      counts[event.Status as keyof typeof counts]++;
    });

    setStatusCounts(counts);
    setTotal(EventsData.length);
    setCurrEventData(EventsData);
  
  }, [EventsData]);
  useEffect(() => {

    scheduleEvent && setIsPopupOpen(true)
  
  }, [scheduleEvent,appliDetailsData]);

  const handleOpenPopup = () => {
   setAddItem(true)
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setAddItem(false);
    setIsPopupOpen(false);
    setScheduleEvent(false)
  };
  const handleChildData = (data:number) => {
    setSelectedRating(data)
    console.log("hi")
    // Do something with the data received from the child
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
                  <td className="tableRowTitle">{event.SubmissionDate ? event.SubmissionDate.toLocaleString() : "--"
}</td>
               
<td className="statusTitle">
                    <div
                      className={`statusTitleData ${event.Status}`}
                    >
                      {event.Status}
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
        {isEventManagement && (
            <ApplicationDetails
              isProjectManagement={false}
              isEventManagement={isEventManagement}
              appliDetailsData={appliDetailsData}
              setIsApplicationDetails={setIsEventManagement}
              setIsRating={setIsRating}
              setIsRejectedFeed={setIsRejectedFeed}
              setScheduleEvent={setScheduleEvent}
              selectedRatingValue={selectedRating}

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
       {(isPopupOpen && addItem) && <EventSchedulePopUp onClose={handleClosePopup} updateEvents={updateEvents} DataOfEvents={EventsData} />}
       {(isPopupOpen && scheduleEvent) && <EventSchedulePopUp onClose={handleClosePopup} updateEvents={updateEvents} DataOfEvents={EventsData} appliDetailsData={appliDetailsData} setIsApplicationDetails={setIsEventManagement}/>}


    </>
  );
};

export default Events;
