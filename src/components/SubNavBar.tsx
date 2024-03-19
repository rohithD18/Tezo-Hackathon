import React, { useState } from "react";
import "../styles/MyTeam.css";
import { type } from "os";

type Props = {
  setShowAll: any;
};

const SubNavBar = (props: Props) => {

  const { setShowAll } = props;
  const [activeItem, setActiveItem] = useState<string>("All");
  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
    {
      itemName === "All" ? setShowAll(true) : setShowAll(false);
    }
  };
  return (
    <>
      <div className="row topContainer">
        <div
          className={`col-sm-1 item ${activeItem === "All" ? "active" : ""}`}
          onClick={() => handleItemClick("All")}
        >
          <label
            className={`${activeItem === "All" ? "active" : ""}`}
            onClick={() => handleItemClick("All")}
          >
            {" "}
            All
          </label>
        </div>
        <div
          className={`col-sm-1 item ${
            activeItem === "My Team" ? "active" : ""
          }`}
          onClick={() => handleItemClick("My Team")}
          style={{ width: 110 }}
        >
          <label
            className={`${activeItem === "My Team" ? "active" : ""}`}
            onClick={() => handleItemClick("My Team")}
          >
            {" "}
            My Team
          </label>
        </div>
      </div>
      <div className="borderStyling"></div>
    </>
  );
};

export default SubNavBar;
