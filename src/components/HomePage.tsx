import React from 'react'
import Home from './Home'
import "../styles/HomePageMain.css"; 
import scroll from "../assets/scroll.png"
import {judges} from"../components/Judges"
import { IJudges } from '../Interfaces';
import ribbon from "../assets/ribbon.png"
interface DataEntry {
    typeOfTime: string;
    value: string;
  }
  interface timeLineEntries{
    title:string;
    content:string;
    date:string
  }
  interface HomePageProps {
   isRegister:boolean
  }
const HomePage:React.FC<HomePageProps> = (props) => {

    const data: DataEntry[] = [
        { typeOfTime: "days", value: "24" },
        { typeOfTime: "hours",value: "12" },
        { typeOfTime: "minutes", value: "13" },
        { typeOfTime: "seconds", value: "02" }
      ];
      const events:timeLineEntries[] = [
        {
          title: "Opening Ceremony",
          content: "Join us for the opening ceremony of the hackathon, where we will kick off the event and introduce the teams.",
          date: "Friday, October 15th"
        },
        {
          title: "Opening Ceremony",
          content: "Join us for the opening ceremony of the hackathon, where we will kick off the event and introduce the teams.",
          date: "Friday, October 15th"
        },
        {
          title: "Opening Ceremony",
          content: "Join us for the opening ceremony of the hackathon, where we will kick off the event and introduce the teams.",
          date: "Friday, October 15th"
        },
        {
          title: "Opening Ceremony",
          content: "Join us for the opening ceremony of the hackathon, where we will kick off the event and introduce the teams.",
          date: "Friday, October 15th"
        },
        {
          title: "Opening Ceremony",
          content: "Join us for the opening ceremony of the hackathon, where we will kick off the event and introduce the teams.",
          date: "Friday, October 15th"
        },
        {
          title: "Opening Ceremony",
          content: "Join us for the opening ceremony of the hackathon, where we will kick off the event and introduce the teams.",
          date: "Friday, October 15th"
        }
      ];
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
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
  return (
    <>
    <Home isRegister={props.isRegister}/>
    <div className='scrollContainer'>
        <img src={scroll} width={14} height={24} onClick={scrollToTop}  style={{ cursor: 'pointer' }} ></img>
        <label id='scrollText'>Scroll up to know more</label>
    </div>
        {/*date*/}
    <div className='dateContainer'>
<div className='dateContent'>
<p>
    <h1 className='heading'>Keep Up to Date</h1>
    <p className='description1'>As a front-end developer, I find myself in a perpetual race against time. However, unlike the elements in my code, time refuses to be debugged or optimised. So, make sure you do not run out of time.</p>
<button className='addButton'>Add to Calender</button>
</p>

</div>

<div className='finalStage'  >
<h2 className='heading2'>Final Stage Submission Closing</h2>
<p className='description2'>Don't forget to submit your Final Stage assignment in the dashboard summary section and Log In using your registered account</p>
<div className='cards'>
{data.map((item, index) => (
    <div className='card' key={index}>
        <label className='number'> {item.value}</label>
        <label className='timeValue'>{item.typeOfTime}</label>
    </div>
       ))}
</div>
</div>
<img src={ribbon} id='ribbon'></img>
    </div>
    {/*schedule*/}
    <div className='scheduleContainer'>
   <h1  className='title'>Schedule</h1>
<p className="Description">Step into the hackathon timeline and embark on a journey of innovation! From registration to winner announcements, follow the path to creativity, collaboration, and success.</p>
    <div className='scheduleCards'>
    {events.map((item, index) => (
    <div className='scheduleCard' key={index}>
      <div className='timeline'>
        <div className='date'>{item.date} </div>
        {index < events.length - 1 && <div className="horizontalLine"></div>}
        </div>
      <div className='info'>
      <label className='cardHeading'>{item.title}</label>
      <p className='cardContent'>{item.content}</p>
      </div>
    </div>
     ))}
    </div>
    </div>
    <div className='judgesContainer'>
    <h1 className='title'>Judges</h1>
<p className="Description">Step into the hackathon timeline and embark on a journey of innovation! From registration to winner announcements, follow the path to creativity, collaboration, and success.</p>
    <div className='judgeCards'>
    {judges.map((item:IJudges, index:number) => (
     <div className='judgeCard' key={index}>
      <img src={item.profileUrl} className='judgeProfile' alt='judgeProfilePicture'  style={{ outline: `7px solid ${getRandomColor()}` }}>
      </img>
      <label className='judge'>{item.name}</label>
      <label className='role'> {item.role}</label>
     </div>
         ))}
    </div>
    </div>
    </>
    
  )
}

export default HomePage
