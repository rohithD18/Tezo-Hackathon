import React, { useState } from 'react'

import '../../styles/dashboard/UserEditPopUp.css';
import xclose from "../../assets/xclose.png";
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, TextField, Box } from "@mui/material";
import { teamNames } from "../../services/TeamNames";
import { IUsers } from '../../Interfaces';
interface PopupProps {
    onClose: () => void;
    userData?:IUsers;
    updateEvents?:(userData:string) => void;
  }
const UserEditPopUp=({onClose,userData,updateEvents}:PopupProps)=>{
  
    const [selectedOption, setSelectedOption] = useState('');
     
    const handleSelectChange = (event:  SelectChangeEvent<string>) => {
        const option = event.target.value;
        setSelectedOption(option);
      };
      const handleSubmit = (e:any) => {
        if (!selectedOption) {
            alert('Please select team name');
            return;
          }
        updateEvents?.(selectedOption)
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
            <label>Please provide the details for the Event scheduled</label>
            <div className="user">
                <Box>
                    <FormControl className="teamNamesDropDown" fullWidth>
      <InputLabel id="teamNamesDropDown-label">Select Team</InputLabel>
      <Select
        labelId="Select Team"
        id="teamNamesDropDown"
        value={selectedOption} 
        onChange={handleSelectChange} 
      >
      {(teamNames.map((team:string,id:number) => (
            <MenuItem key={id} value={team} >
              {team}
            </MenuItem>
          )))}
      </Select>
    </FormControl>
    </Box>
            <div>
            <input className="Email" type="text" value={userData?.EmailAddress} readOnly />
            </div>
            <div>
            <input  className='NameAndDate' type="text" value={userData?.Name} readOnly />
            <input  className='NameAndDate'type="text" value={(userData?.RegisteredOn)?.toLocaleString()} readOnly />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <button className="addNew" onClick={handleSubmit}>Update</button>
            </div>
            </div>
           
           
        </div>
    
    </div>
    </div>
  )
}

export default UserEditPopUp
