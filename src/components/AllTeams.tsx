import React, { useState } from "react";
import "../styles/AllTeams.css";
import PaginationSection from "./pagination/PaginationSection";
import TeamCard from "./TeamCard";
import { TeamsData } from "../services/Const";
import { ITeamData } from "../services/Interface/TeamData";

const AllTeams: React.FC = () => {
  const [currentItem, setCurrentItem] = useState<ITeamData[]>([]);

  return (
    <>
      <div className="allCardBody">
        {currentItem.map((item) => (
          <TeamCard key={item.id} data={item} />
        ))}
      </div>
      <div className="Bodyofpagination">
        <PaginationSection setCurrentItem={setCurrentItem} data={TeamsData} />
      </div>
    </>
  );
};

export default AllTeams;
