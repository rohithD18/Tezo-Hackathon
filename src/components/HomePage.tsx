import React, { useEffect, useState } from "react";
import Home from "./Home";
import "../styles/HomePageMain.css";
import scroll from "../assets/scroll.png";
import { judges } from "../components/Judges";
import { IJudges } from "../Interfaces";
import ribbon from "../assets/ribbon.png";
import { events } from "../services/ScheduleData";
// interface DataEntry {
//   typeOfTime: string;
//   value: number;
// }
interface HomePageProps {
  isRegister: boolean;
}
const HomePage: React.FC<HomePageProps> = (props) => {
  //Reamning Days Timmer
  const [remainingTimeArray, setRemainingTimeArray] = useState<number[]>([
    0, 0, 0, 0,
  ]);

  useEffect(() => {
    calculateRemainingTime(); 
    const intervalId = setInterval(calculateRemainingTime, 1000); 
    return () => clearInterval(intervalId); 
  }, []);


  const calculateRemainingTime = () => {
    const eventDate = new Date("April 1, 2024 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const dateDiff = eventDate - nowDate;

    const remainingDays = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

    const remainingHours = Math.floor(
      (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const remainingMinutes = Math.floor(
      (dateDiff % (1000 * 60 * 60)) / (1000 * 60)
    );

    const remainingSeconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    setRemainingTimeArray([
      remainingDays,
      remainingHours,
      remainingMinutes,
      remainingSeconds,
    ]);
  };
  // calculateRemainingTime(); 
  // setInterval(calculateRemainingTime, 1000); 

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  // console.log("Home Render");
  return (
    <div className="homePageDiv">
      <Home isRegister={props.isRegister} />
      <div className="scrollContainer">
        <img
          src={scroll}
          width={14}
          height={24}
          onClick={scrollToTop}
          style={{ cursor: "pointer" }}
          alt="scrollIcon"
        ></img>
        <label id="scrollText">Scroll up to know more</label>
      </div>
      {/*date*/}

      <div className="dateContainer">
        <div className="dateContent">
          {/* <p> */}
          <h1 className="heading">Keep Up to Date</h1>
          <p className="description1">
            As a front-end developer, I find myself in a perpetual race against
            time. However, unlike the elements in my code, time refuses to be
            debugged or optimised. So, make sure you do not run out of time.
          </p>
          <button className="addButton">Add to Calender</button>
          {/* </p> */}
        </div>

        <div className="finalStage">
          <h2 className="heading2">Final Stage Submission Closing</h2>
          <p className="description2">
            Don't forget to submit your Final Stage assignment in the dashboard
            summary section and Log In using your registered account
          </p>
          <div className="cards">
            {remainingTimeArray.map((item, index) => (
              <div className="card" key={index}>
                <label className="number">{item}</label>
                {index === 0 ? (
                  <label className="timeValue">days</label>
                ) : index === 1 ? (
                  <label className="timeValue">hours</label>
                ) : index === 2 ? (
                  <label className="timeValue">minutes</label>
                ) : (
                  <label className="timeValue">seconds</label>
                )}
              </div>
            ))}
          </div>
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
