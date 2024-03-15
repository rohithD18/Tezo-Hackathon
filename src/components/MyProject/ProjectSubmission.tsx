import React, { useState } from "react";
import '../../styles/MyProject/ProjectSubmission.css';
import pdfIcon from '../../assets/PdfIcon.png';
import pdf from '../../assets/Pdf.png';
import deleteIcon from '../../assets/deleteIcon.png';
import AddIcon from '../../assets/AddIcon.png';
import TimeICon from '../../assets/TimeIcon.png'

export const ProjectSubmission:React.FC = () => {
    const [files, setFiles] = useState<File[]>([]);
    
    const handleFileSelection = (selectedFiles: File[]) => {
        const updatedFiles1 = [...files,...selectedFiles]
        setFiles(updatedFiles1);
    };
    
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const droppedFiles = Array.from(event.dataTransfer.files);
        handleFileSelection(droppedFiles);
    };
    
    const handleRemoveFile = (index: number) => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
    };
    
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };
    
    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files && Array.from(event.target.files);
        handleFileSelection(selectedFiles || []);
    };
    
    const handleBrowseClick = () => {
        const fileInput = document.getElementById('fileInput') as HTMLInputElement | null;
        if (fileInput) {
            fileInput.click(); // Trigger file input click
        }
    };

    const handleContainerClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!(event.target as HTMLElement).closest('#fileInput')) {
            // If the click is not on the file input, trigger file input click
            handleBrowseClick();
        }
    };

    return(
        <div>
            <div className="projectDetail">
                <h5>Project Submission</h5>
                <div className="timeRemainder">
                <img className="imgIcon" src={TimeICon} alt="Time Icon"/>
                <p>14 more days to submit</p>
                </div>
                
            </div>
            <p className="dd">After submitting, you can still edit your project until the submission deadline.</p>
            <div className="topicSec1">
                <p>Enter the Description</p>
                <textarea placeholder="Enter the brief description of the project, including the problem it solves, the target audience, and the proposed solution" ></textarea>
            </div>
            
            <div className="dropFile" onDrop={handleDrop} onDragOver={handleDragOver} onClick={handleContainerClick}>
                <p>Submit your presentation</p>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: 'none' }} 
                    multiple
                    onChange={handleFileInputChange}
                    accept=".pdf"
                />
                {files?.length >0?  <>
                    
                 <ul>
                            {files.map((file, index) => (

                                <li  className="projectDoc" key={index}><img id="pdf" src={pdf} alt="pdf icon"/>  {file.name}<img id="deleteIcon" src={deleteIcon} alt="Delete icon" onClick={() => handleRemoveFile(index)}/></li>
                            ))}<li><div id="AddIcon" onClick={handleBrowseClick}><img src={AddIcon} alt="add icon"/>
                            <p>Add Files</p></div></li>
                        </ul>
                </>  : <label
                    htmlFor="fileInput"
                    
                >
                    <img className="pdfIcon" src={pdfIcon} alt="Pdf Icon" /><br />
                    Drag & Drop file here<br />
                    Accepted formats: pdf<br />
                    File size limit: 25MB<br />
                    <button onClick={handleBrowseClick}>Browse</button>
        
                </label>}
                
            </div>
        </div>
    );
}
