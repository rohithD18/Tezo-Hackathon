import React from "react";
import "../styles/HomePage.css";
import { useParams } from "react-router-dom";

const MenuSection: React.FC = () => {
  const { id } = useParams();
  return (
    <div className="menuSection">
      <p id="menuItems">
        <span>{id == ":Home" ? "Total Application" : "All"}</span> <br />{" "}
        <span>10</span>
      </p>
      <p id="menuItems">
        <span> {id == ":Home" ? "Participants" : "Undecided"} </span> <br />{" "}
        <span>30</span>
      </p>
      <p id="menuItems">
        <span>{id == ":Home" ? "Projects" : "Accepted"}</span> <br />{" "}
        <span>40</span>
      </p>
      {id == ":Applications" && (
        <p id="menuItems">
          <span>Rejected</span> <br /> <span>40</span>
        </p>
      )}
      {id == ":Applications" && (
        <p id="menuItems">
          <span>Need Improvements</span> <br /> <span>40</span>
        </p>
      )}
    </div>
  );
};

export default MenuSection;
