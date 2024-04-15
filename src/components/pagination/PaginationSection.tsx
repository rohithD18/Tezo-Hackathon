/* eslint-disable */
import React, { useState, useEffect, useContext } from "react";
import ReactPaginate from "react-paginate";
import angle_double_left from "../../assets/angle_double_left.png";
import chevron_down from "../../assets/chevron_down.png";
import EntriesPerPagePopup from "./EntriesPerPagePopup";
import "./pagination.css";
import HackathonContext from "../../services/Context/HackathonContext";

type Props = {
  setCurrentItem: React.Dispatch<React.SetStateAction<any[]>>;
  data: any[];
  screen: string;
};

const PaginationSection: React.FC<Props> = (props: Props) => {
  const hackathonContext = useContext(HackathonContext);
  const { setCurrentItem, data } = props;
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    hackathonContext.setItemOffset(0);
  }, [data]);

  useEffect(() => {
    const itemsPerPage = 9;
    const endOffset = hackathonContext.itemOffset + itemsPerPage;
    const currentItem = data.slice(hackathonContext.itemOffset, endOffset);
    setCurrentItem(currentItem);
  }, [hackathonContext.itemOffset, setCurrentItem, data]);

  const handlePopupClick = () => {
    setShowPopup(!showPopup);
  };

  const handleSelectEntriesPerPage = (start: number) => {
    hackathonContext.setItemOffset(start - 1);
    setShowPopup(false);
  };

  const itemsPerPage = 9;
  const endOffset = hackathonContext.itemOffset + itemsPerPage;
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const totalData = data.length;
  const firstIndex = hackathonContext.itemOffset + 1;
  const lastIndex = Math.min(endOffset, totalData);

  // const handlePageClick = (event: { selected: number }) => {
  //   const newOffset = event.selected * itemsPerPage;
  //   hackathonContext.setItemOffset(newOffset);
  // };
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = event.selected * itemsPerPage;
    hackathonContext.setItemOffset(newOffset);
    hackathonContext.setActivePage(event.selected); // Update active page
  };
  const handlePageChange = (pageNumber: number) => {
    hackathonContext.setActivePage(pageNumber);
  };

  return (
    <div className="pagination" id={props.screen ? "userPagin" : undefined}>
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
          forcePage={hackathonContext.activePage}
        />
      </div>
    </div>
  );
};

export default PaginationSection;
