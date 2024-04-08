import React, { useState } from "react";
import {PresenationDemo} from './PresentationDemo'
import '../../styles/MyProject/Demo.css';
import BackIcon from '../../assets/BackIcon.png';
import { IProjectInfo } from "../../Interfaces";
interface ProjectDemoProps {
    setDuplicateData:(data: IProjectInfo[]) => void;
  }
export const ProjectDemo: React.FC<ProjectDemoProps> = ({setDuplicateData })=>{
    const [currentPresentation,setPresentation]=useState<boolean>(false)
    return(
        <div>
            <div>
            <h5>Presentation Demo</h5>
            <p>Please find below all the details related to your presentation demo</p>
            </div>
            <div className="EventDetails">
                <h6>Event Details</h6>
                <div>
                    <p>Date</p>
                    <p>16/25/12</p>
                </div>
                <div>
                    <p>Time</p>
                    <p>3.00 PM</p>
                </div>
                <div>
                    <p>Duration</p>
                    <p>30 minutes</p>
                </div>
                
            </div>
            <PresenationDemo currentPresentation={currentPresentation} />
            
        </div>
    )}
        