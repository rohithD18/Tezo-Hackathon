import React, { useState, useEffect } from "react";
import TimeICon from '../../assets/TimeIcon.png'
import { IProjectInfo } from "../../Interfaces";
// /import {updateDuplicateData1} from "../../services/Services"
interface ProjectDetailProps {
    
    setDuplicateData:(data: IProjectInfo[]) => void;
  }
  
 
export const ProjectDetail : React.FC<ProjectDetailProps> = ({ setDuplicateData }) => {
    const [topic, setTopic] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const handleTopicChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value;
        setTopic(text); 
        updateDuplicateData("description",topic );

    };

    const handleDescriptionChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.target.value;
        setDescription(text);
        updateDuplicateData("DetailedDescription", description);
        
    };
    const updateDuplicateData = (newTopic: string, newDescription: string) => {
        // Create a new project info object with the updated topic and description
        const newData: IProjectInfo[] = [{ Id: 1, ProjectName: "", Description: newTopic, ProjectStatus: 0, DetailedDescription: newDescription, ProjectRegisteredDate: new Date(), SubmittedDate: new Date(), PresentationDate: new Date(), Comments: "", TeamId: 6 }];
        // Call setDuplicateData with the new data
        setDuplicateData(newData)
      };
    const topicCharacterCount = topic.length;
    const descriptionCharacterCount = description.length;


    return (
        <div>
            <div className="projectDetail">
                <h5>Topic Details</h5>
                <div className="timeRemainder">
                <img className="imgIcon" src={TimeICon} alt="Time Icon"/>
                <p>14 more days to submit</p>
                </div>
                
            </div>
            <p className="projectDetailTopic">Share your project's vision and impact</p>
            <div className="topicSec">
                <p>Mention Topic</p>
                <input type="text" placeholder="Enter the topic" value={topic} onChange={handleTopicChange} />
            </div>
            <div className="count">{topicCharacterCount}/100</div>
            <div className="descriptionSec">
                <p>Topic Description</p>
                <textarea placeholder="Enter the topic description" value={description} onChange={handleDescriptionChange}></textarea>
            </div>
            <div className="count">{descriptionCharacterCount}/500</div>
            <div id="projectDetailNote">
                Note : The topic details will be sent for review after you click on Next.
            </div>
        </div>
    );
};
