import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import angle_double_left from "../../assets/angle_double_left.png";
import chevron_down from "../../assets/chevron_down.png";
import EntriesPerPagePopup from "./EntriesPerPagePopup";
import "./pagination.css";

type Props = {
  setCurrentItem: React.Dispatch<React.SetStateAction<any[]>>;
  data: any[];
};

const PaginationSection: React.FC<Props> = (props: Props) => {
  const { setCurrentItem, data } = props;
  const [showPopup, setShowPopup] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const itemsPerPage = 9;
    const endOffset = itemOffset + itemsPerPage;
    const currentItem = data.slice(itemOffset, endOffset);
    setCurrentItem(currentItem);
  }, [itemOffset, setCurrentItem, data]);

  const handlePopupClick = () => {
    setShowPopup(!showPopup);
  };

  const handleSelectEntriesPerPage = (start: number) => {
    setItemOffset(start - 1);
    setShowPopup(false);
  };

  const handlePageChange = (pageNumber: number) => {
    setActivePage(pageNumber);
  };

  const itemsPerPage = 9;
  const endOffset = itemOffset + itemsPerPage;
  const pageCount = Math.ceil(data.length / itemsPerPage);
  console.log("mathh",pageCount, data)

  const handlePageClick = (event: { selected: number }) => {
   console.log(event.selected);    
    const newOffset = event.selected * itemsPerPage
    setItemOffset(newOffset);
  };
  useEffect(() => {
   setItemOffset(0);
  },[pageCount])


  const totalData = data.length;
  const firstIndex = itemOffset + 1;
  const lastIndex = Math.min(endOffset, totalData);

  return (
    <div className="pagination">
      <div className="paginationBox122">
        <span className="showingText">Showing</span>
        <div className="dropdownDiv">
          <div className="dropdownInput" onClick={handlePopupClick}>
            <span className="totalRender">{`${firstIndex}-${lastIndex}`}</span>
            <img src={chevron_down} alt="dropdown" className="dropdownImage" />
          </div>
          {showPopup && (
            <EntriesPerPagePopup
              onSelect={handleSelectEntriesPerPage}
              onClose={() => setShowPopup(false)}
              totalRecords={totalData}
              onPageChange={handlePageChange}
            />
          )}
        </div>
        <span className="totalRecords">of {totalData} entries</span>
      </div>
      <div className="paginationBox2Num">
        <ReactPaginate
          breakLabel="..."
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel={<img src={angle_double_left} alt="previous" />}
          nextLabel={
            <img
              src={angle_double_left}
              alt="next"
              style={{ transform: "rotate(180deg)" }}
            />
          }
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="pageNum"
          previousLinkClassName="pageNum"
          nextClassName="pageNum"
          activeLinkClassName="active"
          forcePage={activePage}
        />
      </div>
    </div>
  );
};

export default PaginationSection;
