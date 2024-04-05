import React, { useState } from 'react';

interface PdfViewerProps {
  pdfUrl: string; // URL of the PDF file
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onDocumentLoadSuccess = (numPages: number) => {
    setNumPages(numPages);
  };

  return (
    <div>
      {/* Render the PDF */}
      <iframe
        title="PDF Viewer"
        src={pdfUrl}
        width="100%"
        height="500px"
      ></iframe>

      {/* Display page number */}
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default PdfViewer;
