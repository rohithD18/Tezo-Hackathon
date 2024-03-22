import React from "react";
import Participant from '../../assets/participant.png';
import RegistrationIcon from '../../assets/registrationIcon.png';
import Submittedicon from '../../assets/submittedIcon.png';
import image from '../../assets/image.png';
import 'react-circular-progressbar/dist/styles.css';
import {Teams} from '../../services/Data';

import '../../styles/dashboard/DashboardView.css'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import DashboardNav from "./DashboardNav";
const DashboardView:React.FC = () => {      
    return(
        <>
        <DashboardNav />
    <div className="DashboardView">
        <div className="countDiv">
                <div className="displayComponent">
                 
                     <div>
                        <img src={Participant} alt="participant icon"/>
                        <p className="displayComponentName">Total Participants</p>
                        <p>200</p>
                    </div>
                    <div>
                        <img src={RegistrationIcon} alt=""/>
                        <p className="displayComponentName">Registered Teams</p>
                        <p>36</p>
                    </div>
                    <div>
                        <img src={Submittedicon} alt=""/>
                        <p className="displayComponentName">Total Submitted Projects</p>
                        <p>20</p>
                    </div>
                </div>
                <div className="itenary">
                    <h5>Itenary</h5>
                    <div>
                        <p>Opening ceremony</p>
                        <p>15th March</p>
                    </div>
                    <div>
                        <p>Registeration</p>
                        <p>15th March</p>
                    </div>
                    <div>
                        <p>Project Submission</p>
                        <p>15th March</p>
                    </div>
                    <div>
                        <p>Hackathon Begins</p>
                        <p>15th March</p>
                    </div>
                    <div>
                        <p>Project Presentation</p>
                        <p>15th March</p>
                    </div>
                    <div>
                        <p>Closing & Awards</p>
                        <p>15th March</p>
                    </div>
                    

                </div>
        </div>
        <div className="rates" >
           <div className="SubmissionRateDiv">
            <p>Submission rate</p>
            <div className="progressRate">
            <div className="progressData">
            <div>
                <p>Total registrations</p>
                <p>6,452</p>
            </div>
            <div>
                <p>Total submissions</p>
                <p>2,985</p>
            </div>
            </div>
            <div className="progressBar"><CircularProgressbar value={75} text="75%" 
            styles={buildStyles({
                rotation: 0.5,
                strokeLinecap: 'butt',
                pathTransitionDuration: 0.5,
                pathColor: `#FFD54F`,
                textColor: '#EEEEEE',
                trailColor: '#d6d6d6',
              })}/></div>
         

         </div>
            
            <div>
                
            </div>
    

           </div>
           <div className="topPerformingComponent">
            <p>Top-performing Teams</p>
            <div>
            <div>
                <p className="rank">01</p>
                <img src={image} alt="teamlogo"/>
                <p className="teamName">Team Alpha</p>

            </div>
            <div>
                <div className="points">48pts</div>
                
            </div>

            </div>
           </div>
        </div>
    </div>
    </>
    )

}
export default DashboardView;