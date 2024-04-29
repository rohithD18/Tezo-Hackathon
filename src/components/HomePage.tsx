import React, { useEffect, useState } from "react";
import "add-to-calendar-button";
import Home from "./Home";
import "../styles/HomePageMain.css";
import scroll from "../assets/scroll.png";
import { judges } from "../components/Judges";
import { IJudges } from "../Interfaces";
import ribbon from "../assets/ribbon.png";
import { events } from "../services/ScheduleData";
import RemainingTime from "./RemainingTime";
import { eventDate } from "../services/Profile";
import { getLoggedInId } from "../services/FormServices";
import { useFecthApis } from "../services/CustomHooks";
interface IHomeProps {
  isRegister: boolean;
}
const HomePage: React.FC<IHomeProps> = (props: IHomeProps) => {
  const formattedDate = new Date(eventDate);
  const formattedStartDate = `${formattedDate.getFullYear()}-${
    formattedDate.getMonth() + 1 < 10 ? "0" : ""
  }${formattedDate.getMonth() + 1}-${
    formattedDate.getDate() < 10 ? "0" : ""
  }${formattedDate.getDate()}`;
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <div className="homePageDiv">
      <Home isRegister={props.isRegister} />
      {/* <Home isRegister={isRegister} /> */}
      {/* <div className="scrollContainer">
        <img
          src={scroll}
          width={14}
          height={24}
          onClick={scrollToTop}
          style={{ cursor: "pointer" }}
          alt="scrollIcon"
        ></img>
        <label id="scrollText">Scroll up to know more</label>
      </div> */}

      <div className="dateContainer">
        <div className="dateContent">
          <h1 className="heading">Keep Up to Date</h1>
          <p className="description1">
            As a front-end developer, I find myself in a perpetual race against
            time. However, unlike the elements in my code, time refuses to be
            debugged or optimised. So, make sure you do not run out of time.
          </p>
          <div className="addButton">
            <add-to-calendar-button
              name="Hackathon Event"
              description="Reminder for hackathon"
              startDate={formattedStartDate}
              startTime="12:00"
              endTime="19:00"
              timeZone="Asia/Calcutta"
              location="World Wide Web"
              options="'Microsoft365'"
              hideIconButton
              hideCheckmark
            ></add-to-calendar-button>
          </div>
        </div>

        <div className="finalStage">
          <h2 className="heading2">Final Stage Submission Closing</h2>
          <p className="description2">
            Don't forget to submit your Final Stage assignment in the dashboard
            summary section and Log In using your registered account
          </p>
          <RemainingTime />
        </div>

        <img src={ribbon} id="ribbon" alt="ribbon"></img>
      </div>
      {/*schedule*/}
      <div className="scheduleContainer">
        <h1 className="title">Schedule</h1>
        <p className="Description">
          Step into the hackathon timeline and embark on a journey of
          innovation! From registration to winner announcements, follow the path
          to creativity, collaboration, and success.
        </p>
        <div className="scheduleCards">
          {events.map((item, index) => (
            <div className="scheduleCard" key={index}>
              <div className="timeline">
                <div className="date">{item.date} </div>
                {index < events.length - 1 && (
                  <div className="horizontalLine"></div>
                )}
              </div>
              <div className="info">
                <label className="cardHeading">{item.title}</label>
                <p className="cardContent">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="judgesContainer">
        <h1 className="title">Judges</h1>
        <p className="Description">
          Step into the hackathon timeline and embark on a journey of
          innovation! From registration to winner announcements, follow the path
          to creativity, collaboration, and success.
        </p>
        <div className="judgeCards">
          {judges.map((item: IJudges, index: number) => (
            <div className="judgeCard" key={index}>
              <img
                src={item.profileUrl}
                className="judgeProfile"
                alt="judgeProfilePicture"
                style={{ outline: `7px solid ${getRandomColor()}` }}
              ></img>
              <label className="judge">{item.name}</label>
              <label className="role"> {item.role}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
