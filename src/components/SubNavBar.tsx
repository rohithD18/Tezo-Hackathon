import React, { useState } from "react";
import "../styles/MyTeam.css";

type Props = {
  setShowAll: any;
};

const SubNavBar: React.FC<Props> = (props: Props) => {
  const { setShowAll } = props;
  const [activeItem, setActiveItem] = useState<string>("All");
  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
    itemName === "All" ? setShowAll(true) : setShowAll(false);
  };
  return (
    <div className="row topContainer">
      <p
        className={`col-sm-1 item ${activeItem === "All" ? "active" : ""}`}
        onClick={() => handleItemClick("All")}
      >
        All
      </p>
      <p
        className={`col-sm-1 item ${activeItem === "My Team" ? "active" : ""}`}
        onClick={() => handleItemClick("My Team")}
        style={{ width: 110 }}
      >
        My Team
      </p>
      <hr color="#3d5a80" />
    </div>
  );
};

export default SubNavBar;
