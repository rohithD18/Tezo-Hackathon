import React, { useEffect, useState } from "react";
import "../styles/AllTeams.css";
import PaginationSection from "./pagination/PaginationSection";
import TeamCard from "./TeamCard";
// import { TeamsData } from "../services/Const";
import { ITeamData } from "../services/Interface/TeamData";
import ShimmerCardUI from "./ShimmerCardUI";
import { getTeams,getAllTeamMembers } from "../services/Services";
import { IAllTeams } from "../services/Interface/HackathonInterface";
const AllTeams: React.FC = () => {
  const [currentItem, setCurrentItem] = useState<IAllTeams[]>([]);
  const [teamsData, setTeamsData] = useState<IAllTeams[]>([]);
  const teamData = [...Array(9)].map((_, index) => ({
    id: index + 1,
    teamName: "",
    rank: "",
    points: "",
    captainName: "",
  }));
  useEffect(()=>{
    const fetchDataAsync = async () => {
      try {
        const result = await getTeams();
        console.log(result,"result")
        
        setTeamsData(result)
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchDataAsync();
  },[])
  return (
    <>
      <div className="allCardBody">
        {currentItem.length === 0
          ? teamData.map((item) => <ShimmerCardUI key={item.id} />)
          : currentItem.map((item) => 
          
          <TeamCard key={item.id} data={item} />)}
      </div>
      <div className="Bodyofpagination">
        <PaginationSection
          setCurrentItem={setCurrentItem}
          data={teamsData}
          screen="teams"
        />
      </div>
    </>
  );
};

export default AllTeams;
