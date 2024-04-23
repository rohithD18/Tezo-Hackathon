import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { getTeamMembersByTeam, getTeams, getUserById } from "./Services";
import { IAllTeams, ITeamMember } from "./Interface/HackathonInterface";
import { TeamMemberRole } from "./enums";
export const useFetchTeamDetails = (
    id:number
  ) => {
   
    const [captain, setCaptain] = useState<ITeamMember>();
    const [captainName, setCaptainName] = useState<string>("hi");

      useEffect(()=>{
        const fetchData = async () => {
          try {
            const result = await getTeamMembersByTeam(id);
            console.log(result,"result")
            if (result.length !== 0) {
                setCaptain(result.filter(user => user.role === TeamMemberRole.Captain)[0]);
                fetchCaptain();
            }
            
          } catch (error) {
            console.error(error);
          }
        };
        const fetchCaptain = async () => {
          try {
           if(captain!==undefined){
            console.log(captain,"captain")
           const result = await getUserById(captain.personId);
setCaptainName(result.name)
           }
          } catch (error) {
            console.error(error);
          }
        };
        // fetchCaptain();
        fetchData();
        // fetchCaptain();
    
      },[id])
  
    return { captainName };
  };
  