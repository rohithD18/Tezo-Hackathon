import React from "react";
import '../../styles/MyProject/Demo.css'
import BackIcon from '../../assets/BackIcon.png'
interface IProps {
    currentPresentation: boolean;
  }
export const PresenationDemo: React.FC<IProps> = ({
    currentPresentation
  }: IProps) => {
    return(
        <div>
            <div>
                <div className="submissionDetail">
                {currentPresentation && <img src={BackIcon} alt="BackIcon"/>}
                    <h5>Submission Details</h5>
                </div>
                {currentPresentation && <p className="subLine">A snapshot of your coding brilliance awaits judgement!</p>}
            </div>
            <div className="topicSec2">
                <p>
                    Topic
                </p>
                <p>qwertyuioasdfghjklxcvbnm,sdfghjkl</p>
            </div>
            <div className="topicSec2">
                <p>
                    Topic Descripition
                </p>
                <p></p>
            </div>
            <div className="topicSec2">
                <p>
                    Project Descripition
                </p>
                <p></p>
            </div>
            <div className="topicSec2">
                <p>
                    Submission
                </p>
                <p></p>
            </div>
        </div>
    )
    
}