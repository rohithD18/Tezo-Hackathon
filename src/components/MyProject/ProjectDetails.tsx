import React, { useEffect, useState } from "react";
import TimeICon from '../../assets/TimeIcon.png'
import {IProjectSubmissionForm,IProjectSubmissionFormError } from "../../Interfaces";
import { constant } from "lodash";
// /import {updateDuplicateData1} from "../../services/Services"
interface ProjectDetailProps {
    setDuplicateData:(data:IProjectSubmissionForm[]) => void;
    setFormError: (formError: IProjectSubmissionFormError) => void;
    formError: IProjectSubmissionFormError;
    setButtonDisabled:(data:boolean) => void;
    previousData:IProjectSubmissionForm[]|null;
  }

export const ProjectDetail : React.FC<ProjectDetailProps> = ({ setDuplicateData,setFormError,formError,setButtonDisabled,previousData }) => {
   
    let isValid=true
    const [topic, setTopic] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    useEffect(() => {
        if (previousData && previousData.length !== 0) {
            setTopic(previousData[0].topic);
            setDescription(previousData[0].description);
        }
    }, [previousData]); 
    
    const handleTopicChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setButtonDisabled(false);
        const text = event.target.value;
        setTopic(text);
        updateDuplicateData(topic, description); 
        if (text === "") {
            setFormError({ ...formError, topicError: 'This field is required' });
            isValid=false
        } else if (text.length > 100) {
            setFormError({ ...formError, topicError: 'Topic should be within 100 characters' });
            isValid=false
        } else {
            setFormError({ ...formError, topicError: '' });
        }
        if(topic!=="" && description!=="" && isValid){
            setButtonDisabled(true);

        }

    };

    const handleDescriptionChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
        let isValid=true
        setButtonDisabled(false);
        const text = event.target.value;
        setDescription(text);
        updateDuplicateData(topic, description);
        if (text === "") {
            setFormError({ ...formError, descriptionError: 'This field is required' });
            isValid=false
        } else if (text.length > 500) {
            setFormError({ ...formError, descriptionError: 'Description should be within 500 characters' });
            isValid=false
        } else {
            setFormError({ ...formError, descriptionError: '' });
        }
        if(topic!=="" && description!=="" && isValid){
            setButtonDisabled(true);

            
        }


        
    };
    const updateDuplicateData = (newTopic: string, newDescription: string) => {
        const newData: IProjectSubmissionForm[] = [{ Id: 1, ProjectName: "",topic:newTopic,description: newDescription, briefDescription:"",uploadFile:"", TeamId: 6 }];
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
                <div className="inputSec">
                <input type="text" placeholder="Enter the topic" value={topic} onChange={handleTopicChange} />
                <div>{formError.topicError}</div> 
                </div>
            </div> 
            <div className="count">{topicCharacterCount}/100</div>
            <div className="descriptionSec">
                <p>Topic Description</p>
                <div className="inputSec">
                <textarea placeholder="Enter the topic description" value={description} onChange={handleDescriptionChange}></textarea>
                <div>{formError.descriptionError}</div> 
                </div>
                
                {/* <textarea placeholder="Enter the topic description" value={description} onChange={handleDescriptionChange}></textarea> */}
            </div>
            <div className="count">{descriptionCharacterCount}/500</div>
            <div id="projectDetailNote">
                Note : The topic details will be sent for review after you click on Next.
            </div>
        </div>
    );
};
