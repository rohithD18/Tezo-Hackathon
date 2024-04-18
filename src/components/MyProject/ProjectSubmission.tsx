import React, { useState } from "react";
import "../../styles/MyProject/ProjectSubmission.css";
import pdfIcon from "../../assets/PdfIcon.png";
import pdf from "../../assets/Pdf.png";
import deleteIcon from "../../assets/deleteIcon.png";
import AddIcon from "../../assets/AddIcon.png";
import TimeICon from "../../assets/TimeIcon.png";
import {IProjectSubmissionForm,IProjectSubmissionFormError } from "../../Interfaces";

// import PdfViewer from "./PDFViewer";
// import PDFViewer from "./PDFViewer";
interface ProjectSubmissionProps {
  
  setDuplicateData:(data:IProjectSubmissionForm[]) => void;
  setFormError: (formError: IProjectSubmissionFormError) => void;
    formError: IProjectSubmissionFormError;
    setButtonDisabled:(data:boolean) => void;
    previousData:IProjectSubmissionForm[]|null;
}

export const ProjectSubmission: React.FC<ProjectSubmissionProps> = ({ setDuplicateData,setFormError,formError,setButtonDisabled,previousData  }) => {
  let isValid=true
  const [files, setFiles] = useState<File[]>([]);
  const [pdfOpen, setPdfOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string>("");
  const [breifDescription, setBriefDescription] = useState<string>('');
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
  // console.log("files", files);

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

  const openPDF = (file: File) => {
    const pdfUrl = URL.createObjectURL(file);
    setPdfUrl(pdfUrl);
    setPdfOpen(true);
    // setIsPdfView(true);
  };
  console.log(pdfUrl);
  // const closePDF = () => {
  //   setPdfOpen(false);
  //   // setPdfUrl(null);
  // };
  const handleBriefDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const breifDescript = event.target.value;
    setBriefDescription(breifDescript);
    if (breifDescript === "") {
      setFormError({ ...formError, briefDescriptionError: 'This field is required' });
      isValid=false
  }
   else {
      setFormError({ ...formError, briefDescriptionError: '' });
  }
  if(breifDescription!=="" && files.length!== 0 && isValid){
      setButtonDisabled(true);

  }

  };
  return (
    <>
      <div>
        <div className="projectDetail">
          <h5>Project Submission</h5>
          <div className="timeRemainder">
            <img className="imgIcon" src={TimeICon} alt="Time Icon" />
            <p>14 more days to submit</p>
          </div>
        </div>
        <p className="projectDetailTopic">
          After submitting,you can still edit your project until the submission
          deadline.
        </p>
        <div className="topicSec1">
          <p>Enter the Description</p>
          <div className="inputSec">
          <textarea onChange={handleBriefDescription}
            placeholder="Enter the breif description of the project, including the problem it
          solves, the target audience, and the proposed solution"
          ></textarea>
            <div>{formError.descriptionError}</div>
          </div>
        </div>
      {/* <div  className="inputSec"> */}
        <div
          className="dropFile"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <p>Submit your presentation</p>
          <div className="fileSection">
          {files?.length > 0 ? (
            <>
              <ul>
                {files.map((file, index) => (
                  <li
                    className="projectDoc"
                    key={index}
                    onClick={() => openPDF(file)}
                  >
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
  <input type="file" style={{ display: "none" }} id="fileInput" multiple onChange={handleFileInputChange} accept=".pdf" />
  <img src={AddIcon} alt="add icon" />
  <p>Add Files</p>
</div>
                </li>
              </ul>
            </>
          ) : (
            <>
            <label htmlFor="fileInput1">
              <img className="pdfIcon" src={pdfIcon} alt="Pdf Icon" />
              <br />
              Drag & Drop file here
              <br />
              Accepted formats: pdf
              <br />
              File size limit: 25MB
              <br />
              <input
             type="file"
            id="fileInput"
            aria-label="Browse"
            style={{ display: "none" }}
            multiple
            onChange={handleFileInputChange}
            accept=".pdf"
          />
            <button onClick={handleBrowseClick}>Browse</button>
              
            </label>
            </>
          )}
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* {pdfOpen && <PdfViewer pdfUrl={pdfUrl} ></PdfViewer>} */}
    </>
    
  );
};
