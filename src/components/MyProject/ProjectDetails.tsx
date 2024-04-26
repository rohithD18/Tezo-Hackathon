import React, { useEffect, useState } from "react";
import TimeICon from '../../assets/TimeIcon.png'
import {IProjectSubmissionForm,IProjectSubmissionFormError } from "../../Interfaces";
import { constant } from "lodash";
import { IAllProject } from "../../services/Interface/HackathonInterface";
// /import {updateDuplicateData1} from "../../services/Services"
interface ProjectDetailProps {
    setFormData:(data:IProjectSubmissionForm)=>void;
    setFormError: (formError: IProjectSubmissionFormError) => void;
    formError: IProjectSubmissionFormError;
    setProjectData:(data:IAllProject)=>void;
    viewData:IAllProject;
    projectData:IAllProject;
  }
export const ProjectDetail : React.FC<ProjectDetailProps> = ({setFormData,formError,setFormError,setProjectData,viewData,projectData}) => {
    const [topic, setTopic] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    useEffect(() => {
        console.log(viewData, " viewData");
        
        setTopic(viewData?.projectName);
    setDescription(viewData?.description);
        
    }, [viewData])
    

    useEffect(() => {
        updateData(topic, description);
        console.log(topic, description);
        
    }, [topic, description])

    const handleTopicChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value;
        setTopic(text); 
        if (text === "") {
            setFormError({ ...formError, topicError: 'This field is required' });
            
        } else if (text.length > 100) {
            setFormError({ ...formError, topicError: 'Topic should be within 100 characters' });
            
        } else {
            setFormError({ ...formError, topicError: '' });
        }
        
    };

    const handleDescriptionChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.target.value;
        setDescription(text);
        if (text === "") {
            setFormError({ ...formError, descriptionError: 'This field is required' });
            
        } else if (text.length > 500) {
            setFormError({ ...formError, descriptionError: 'Description should be within 500 characters' });

        } else {
            setFormError({ ...formError, descriptionError: '' });
        }
      
    };

    const updateData = (name: string, detail: string) => {
        setProjectData({ ...projectData, projectName:name,description:detail })
        
        // console.log(newData);
    };
    const topicCharacterCount = topic?.length;
    const descriptionCharacterCount = description?.length;

    return (
        <div>
            <div className="projectDetail">
                <h5>Project Details</h5>
                <div className="timeRemainder">
                <img className="imgIcon" src={TimeICon} alt="Time Icon"/>
                <p>14 more days to submit</p>
                </div>
                
            </div>
            <p className="projectDetailTopic">Share your project's vision and impact</p>
            <div className="topicSection">
                <p>Project Name</p>
                <div className="inputSec">
                <input type="text" placeholder="Enter the project name" value={topic} onChange={handleTopicChange} />
                <div>{formError.topicError}</div> 
                </div>
            </div> 
            <div className="count">{topicCharacterCount}/100</div>
            <div className="descriptionSection">
                <p>Project Description</p>
                <div className="inputSec">
                <textarea placeholder="Enter the project description" value={description} onChange={handleDescriptionChange}></textarea>
                <div>{formError.descriptionError}</div> 
                </div>
                
            </div>
            <div className="count">{descriptionCharacterCount}/500</div>
            <div id="projectDetailNote">
                Note : The topic details will be sent for review after you click on Next.
            </div>
        </div>
    );
};
