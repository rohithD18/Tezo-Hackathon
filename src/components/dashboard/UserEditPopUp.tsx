import React, { useEffect, useState } from 'react'

import '../../styles/dashboard/UserEditPopUp.css';
import xclose from "../../assets/xclose.png";
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, TextField, Box, Input } from "@mui/material";
import { teamNames } from "../../services/TeamNames";
import { IUsers } from '../../Interfaces';
import { IAllTeams, IAllUsers } from '../../services/Interface/HackathonInterface';
import { useFecthApis } from "../../services/CustomHooks";

interface PopupProps {
    onClose: () => void;
    userData?:IAllUsers;
    updateEvents?:(userData:string,name?:string) => void;
    popUpValue:string;
    teamName?:string
  }
export const UserEditPopUp: React.FC<PopupProps>=({onClose,userData,updateEvents,popUpValue,teamName}:PopupProps)=>{
  // console.log(userData)
    const [selectedOption, setSelectedOption] = useState<string|undefined>(teamName);
    
    // const [allTeams[]]=useFecthApis("allTeams")
    const { allTeams } = useFecthApis();
    const handleSelectChange = (event:  SelectChangeEvent<string>) => {
        const option = event.target.value;
        setSelectedOption(option);
      };
      const handleSubmit = (e:any) => {
        if(popUpValue==="edit"){
        if (!selectedOption) {
            alert('Please select team name');
            return;
          }
        updateEvents?.(selectedOption,userData?.name)}
        else{
          updateEvents?.("delete",userData?.name)
        }
        
        onClose();
      }

  return (
     <div>
      <div className="userPopUp">
        
     
        <div className="userEditPopup">
            <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <img src={xclose} alt="closeIcon" onClick={()=>{onClose();
            }} width={24} height={24}></img>
            </div>
            <p style={popUpValue==="delete"?{textAlign: "center",
  paddingBottom: 10}:{textAlign:"left"}}> {popUpValue==="edit"?"Please select the desired Team Name":"Are you sure you wantto delete this item?"}</p>
            {popUpValue==="edit"?<div className="user">
            <div>
       
      
            <label className='labelUserEditPopUp'>Name</label>
            <input  className='Email' type="text" value={userData?.name} readOnly />
            </div>
            <div>
            <label className='labelUserEditPopUp'>Email</label>
            <input className="Email" type="text" value={userData?.email} readOnly />
            </div>
          
                <Box>
                    <FormControl className="teamNamesDropDown" fullWidth>
      <InputLabel id="teamNamesDropDown-label">Select Team</InputLabel>
      <Select
        labelId="Select Team"
        id="teamNamesDropDown"
        value={selectedOption} 
        onChange={handleSelectChange} 
      >
      {(allTeams.map((team:IAllTeams,id:number) => (
            <MenuItem key={id} value={team.teamName} >
              {team.teamName}
            </MenuItem>
          )))}
      </Select>
    </FormControl>
    </Box>

            <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <button className="addNew" onClick={handleSubmit}>Update</button>
            </div>
            </div>:  <div className="ConfirmCancelButtons">
            <button className="addNew" onClick={handleSubmit}>Confirm</button>
            <button className="cancelButton" onClick={()=>onClose()}>Cancel</button>
            </div>
}           
           
        </div>
    
    </div>
    </div>
  )
}

// export default UserEditPopUp
