import React, { useState } from "react";
import "../../styles/MyProject/ProjectSubmission.css";
import pdfIcon from "../../assets/PdfIcon.png";
import pdf from "../../assets/Pdf.png";
import deleteIcon from "../../assets/deleteIcon.png";
import AddIcon from "../../assets/AddIcon.png";
import TimeICon from "../../assets/TimeIcon.png";

export const ProjectSubmission: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileSelection = (selectedFiles: File[]) => {
    const updatedFiles1 = [...files, ...selectedFiles];
    setFiles(updatedFiles1);
  };
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) {
      return bytes + " bytes";
    } else if (bytes < 1024 * 1024) {
      return (bytes / 1024).toFixed(2) + " KB";
    } else if (bytes < 1024 * 1024 * 1024) {
      return (bytes / (1024 * 1024)).toFixed(2) + " MB";
    } else {
      return (bytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
    }
  };
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    handleFileSelection(droppedFiles);
  };
  console.log("files", files);

  const handleRemoveFile = (index: number) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  const handleBrowseClick = () => {
    const fileInput = document.getElementById(
      "fileInput"
    ) as HTMLInputElement | null;
    if (fileInput) {
      fileInput.click(); // Trigger file input click
    }
  };
  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFiles = event.target.files && Array.from(event.target.files);
    handleFileSelection(selectedFiles || []);
  };
  return (
    <div>
      <div className="projectDetail">
        <h5>Project Submission</h5>
        <div className="timeRemainder">
          <img className="imgIcon" src={TimeICon} alt="Time Icon" />
          <p>14 more days to submit</p>
        </div>
      </div>
      <p className="dd">
        After submitting,you can still edit your project until the submission
        deadline.
      </p>
      <div className="topicSec1">
        <p>Enter the Description</p>
        <textarea
          placeholder="Enter the breif description of the project, including the problem it
                 solves, the target audience, and the proposed solution"
        ></textarea>
      </div>

      <div className="dropFile" onDrop={handleDrop} onDragOver={handleDragOver}>
        <p>Submit your presentation</p>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          multiple
          onChange={handleFileInputChange}
          accept=".pdf"
          // Hide the default file input
        />
        {files?.length > 0 ? (
          <>
            <ul>
              {files.map((file, index) => (
                <li className="projectDoc" key={index}>
                  <img id="pdf" src={pdf} alt="pdf icon" />
                  <div className="fileData">
                    <input type="text" value={file.name}></input>
                    <p>{formatFileSize(file.size)}</p>
                  </div>
                  <img
                    id="deleteIcon"
                    src={deleteIcon}
                    alt="Delete icon"
                    onClick={() => handleRemoveFile(index)}
                  />
                </li>
              ))}
              <li>
                <div id="AddIcon" onClick={handleBrowseClick}>
                  <img src={AddIcon} alt="add icon" />
                  <p>Add Files</p>
                </div>
              </li>
            </ul>
          </>
        ) : (
          <label htmlFor="fileInput">
            <img className="pdfIcon" src={pdfIcon} alt="Pdf Icon" />
            <br />
            Drag & Drop file here
            <br />
            Accepted formats: pdf
            <br />
            File size limit: 25MB
            <br />
            <button onClick={handleBrowseClick}>Browse</button>
          </label>
        )}
      </div>
    </div>
  );
};
