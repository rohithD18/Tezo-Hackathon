import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { getTeamMembersByTeam, getTeams, getUserById } from "./Services";
import { IAllTeams, IAllUsers, ITeamMember } from "./Interface/HackathonInterface";
import { TeamMemberRole } from "./enums";
export const useFetchTeamDetails = (
    value:string
  ) => {
 
    const [teamName, setTeamName] = useState<string | undefined>();
    // const [teamId, setTeamId] = useState<number| undefined>();
    const [teamMembers, setTeamMembers] = useState<ITeamMember[] | undefined>();
      // console.log(state && id,"id")
      useEffect(()=>{
      let teamId:number
      const fetchTeam = async () => {
        try {
          const result = await getTeams();
          result.forEach((item) => {
            if ( value=== item.teamName) {
              setTeamName(item.teamName);
              teamId=item.id
              fetchTeamDetails();
            }
          });
          
        } catch (error) {
          console.error(error);
        }
      };
      const fetchTeamDetails = async () => {
        try {
          if(teamId!=undefined){
          const result = await getTeamMembersByTeam(teamId);
          if (result.length !== 0) {
            const updatedTeamMembers: Promise<ITeamMember>[] = result.map((member) => {
              return getUserById(member.personId).then((userData: IAllUsers) => {
                return { ...member, userData };
              });
            });
            
            Promise.all(updatedTeamMembers).then((updatedMembers) => {
              setTeamMembers(updatedMembers);
            });
        
         
        };
      }
        } 
        
        catch (error) {
          console.error(error);
        }
      };
      fetchTeam()
     
     
    
    },[value])
    return {  teamName,teamMembers  };
  };
  