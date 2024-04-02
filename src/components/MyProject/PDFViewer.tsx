import React from "react";
// import { Document, Page } from "react-pdf";

interface PDFViewerProps {
  pdfUrl: string;
  onClose: () => void;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, onClose }) => {
  console.log("pdfUrl", pdfUrl);
  return (
    <div className="pdfViewer">
      {/* <button onClick={onClose}>Close</button>
      <Document file={{ URL: pdfUrl }}>
        <Page pageNumber={1} />
      </Document> */}
    </div>
  );
};

export default PDFViewer;
