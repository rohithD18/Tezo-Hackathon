import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
 import '../../styles/dashboard/EventSchedulePopUp.css';
import xclose from "../../assets/xclose.png";
import { Teams,ITeams } from "../../services/Data";
import Dropdown from "../Dropdown";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MultiSectionDigitalClock } from "@mui/x-date-pickers/MultiSectionDigitalClock";
import { DesktopDatePicker, DesktopTimePicker, TimePicker } from "@mui/x-date-pickers";
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
 
interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
  }
const EventSchedulePopUp =({ isOpen, onClose }:PopupProps)=>{
    const [selectedDate, setSelectedDate] = useState<Date|null>();
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event:  SelectChangeEvent<string>) => {
      const option = event.target.value;
      setSelectedOption(option);
    };
    const [selectedTime, setSelectedTime] = useState<Dayjs | null | undefined> (null);

    const handleTimeChange = (newTime:Dayjs | null | undefined) => {
     
    };
    const handleDateChange = (newDate:any) => {
   
      setSelectedDate(newDate);
    
    };
    const handleSubmit = (e:any) => {

      var formattedTime="";
      if(selectedTime){
      const parsedTime = dayjs(selectedTime, 'h:mm:A'); 
      formattedTime = parsedTime.format('h:mm A');
      }
      const formattedDate = selectedDate && selectedDate.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
      });
      onClose();
    }
    if (!isOpen) return null;
    
    return(
        <div className="popup">
        
     
        <div className="scheduleMeetingPopup">
            <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <img src={xclose} alt="closeIcon" onClick={onClose} width={24} height={24}></img>
            </div>
            <p>Please provide the details for the Event scheduled</p>
            <div className="schedule">
                <div>
                    <FormControl className="dropdown" >
      <InputLabel id="dropdown-label">Select Team</InputLabel>
      <Select
        labelId="Select Team"
        id="dropdown"
        value={selectedOption} 
        onChange={handleSelectChange}
        // style={{ color: '#888' }}
      >
      {(Teams.map((team:ITeams) => (
            <MenuItem key={team.Id} value={team.TeamName}>
              {team.TeamName}
            </MenuItem>
          )))}
      </Select>
    </FormControl></div>
            <div className="dateAndTime">
            
               <DatePicker className="datePicker" selected={selectedDate} onChange={handleDateChange} dateFormat="YYYY-MM-dd" placeholderText="Select Date"/>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                 
                 <TimePicker   label="Select Time" // Placeholder text
        value={selectedTime}
        onChange={handleTimeChange}
        views={['hours','minutes']}  className="timePicker"/>
                 </LocalizationProvider>
                 

            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <button className="addNew" onClick={handleSubmit}>Schedule</button>
            </div>
            </div>
           
           
        </div>
    
    </div>
    )
 
}
export default EventSchedulePopUp;