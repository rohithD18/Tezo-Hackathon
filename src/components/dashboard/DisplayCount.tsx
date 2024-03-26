import React from "react";
import Participant from '../../assets/participant.png';
import RegistrationIcon from '../../assets/registrationIcon.png';
import Submittedicon from '../../assets/submittedIcon.png';
import '../../styles/dashboard/DashboardView.css'
export const DisplayCount=()=>{
    return(
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


    )}