import React from "react";
import "../../styles/MyProject/ViewPdfModal.css";
import xclose from "../../assets/xclose.png";
type Props ={
    setIsPdfView:(message: boolean) => void;
}
const ViewPdfModal = (props:Props) => {
    const {setIsPdfView} = props
    const handleClose = ()=>{
        setIsPdfView(false)
    }
  return (
    <div className="viewPdfModal">
      <div className="headerPdf">
        <span className="pdfName">{"Worker.Pdf"}</span>
        <img src={xclose} alt="close" className="modalClose" onClick={handleClose} />
      </div>
    </div>
  );
};

export default ViewPdfModal;
