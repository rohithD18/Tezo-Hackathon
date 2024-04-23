import React, { useEffect, useState } from "react";
import Participant from '../../assets/participant.png';
import RegistrationIcon from '../../assets/registrationIcon.png';
import Submittedicon from '../../assets/submittedIcon.png';
import '../../styles/dashboard/DashboardView.css'
import { getAllUsers,getProjects,getTeams } from "../../services/Services";
import { IAllProject, IAllTeams, IAllUsers } from "../../services/Interface/HackathonInterface";
import { useCount } from "../../services/FormServices";
export const DisplayCount=()=>{

   const {countParticipant,countRegisteredTeams,countSubmittedProjects}=useCount()



 return(
        <div className="displayComponent">
         
             <div>
                <img src={Participant} alt="participant icon"/>
                <p className="displayComponentName">Total Participants</p>
                <p>{countParticipant}</p>
            </div>
            <div>
                <img src={RegistrationIcon} alt=""/>
                <p className="displayComponentName">Registered Teams</p>
                <p>{countRegisteredTeams}</p>
            </div>
            <div>
                <img src={Submittedicon} alt=""/>
                <p className="displayComponentName">Total Submitted Projects</p>
                <p>{countSubmittedProjects}</p>
            </div>
        </div>


    )}