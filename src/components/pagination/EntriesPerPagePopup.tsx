import React from "react";
import "./pagination.css";

type Props = {
  onSelect: (num: number) => void;
  onClose: () => void;
  totalRecords: number;
  onPageChange: any;
};

const EntriesPerPagePopup: React.FC<Props> = (props: Props) => {
  const { onSelect, onClose, totalRecords, onPageChange } = props;
  const itemsPerPage = 9;
  // Calculate options dynamically based on the total number of records
  const options: string[] = [];
  const pageCount = Math.ceil(totalRecords / itemsPerPage);

  for (let i = 0; i < pageCount; i++) {
    const startRange = i * itemsPerPage + 1;
    const endRange = Math.min((i + 1) * itemsPerPage, totalRecords);
    const rangeString = `${startRange}-${endRange}`;
    options.push(rangeString);
  }

  const handleSelect = (range: string) => {
    const [start] = range.split("-").map(Number);
    onSelect(start);
    onClose();

    // Calculate the page number from the start value
    // const pageNumber = Math.ceil(start / itemsPerPage) - 1;
    const pageNumber = Math.floor(start / itemsPerPage);

    onPageChange(pageNumber); // Update active page number
  };

  return (
    <div className="entriesPerPagePopup">
      {options.map((range) => (
        <div
          key={range}
          className="popupItem"
          onClick={() => handleSelect(range)}
        >
          {range}
        </div>
      ))}
    </div>
  );
};

export default EntriesPerPagePopup;
