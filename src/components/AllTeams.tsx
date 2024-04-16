import React, { useState } from "react";
import "../styles/AllTeams.css";
import PaginationSection from "./pagination/PaginationSection";
import TeamCard from "./TeamCard";
import { TeamsData } from "../services/Const";
import { ITeamData } from "../services/Interface/TeamData";
import ShimmerCardUI from "./ShimmerCardUI";

const AllTeams: React.FC = () => {
  const [currentItem, setCurrentItem] = useState<ITeamData[]>([]);
  const teamData = [...Array(9)].map((_, index) => ({
    id: index + 1,
    teamName: "",
    rank: "",
    points: "",
    captainName: "",
  }));
  return (
    <>
      <div className="allCardBody">
        {currentItem.length === 0
          ? teamData.map((item) => <ShimmerCardUI key={item.id} />)
          : currentItem.map((item) => <TeamCard key={item.id} data={item} />)}
      </div>
      <div className="Bodyofpagination">
        <PaginationSection
          setCurrentItem={setCurrentItem}
          data={TeamsData}
          screen="teams"
        />
      </div>
    </>
  );
};

export default AllTeams;
