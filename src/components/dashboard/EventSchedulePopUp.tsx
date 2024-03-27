import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
 import '../../styles/dashboard/EventSchedulePopUp.css';
import xclose from "../../assets/xclose.png";
import Dropdown from "../Dropdown";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MultiSectionDigitalClock } from "@mui/x-date-pickers/MultiSectionDigitalClock";
import { DesktopDatePicker, DesktopTimePicker, TimePicker } from "@mui/x-date-pickers";
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { IEvents, ITeams } from "../../Interfaces";
import { addNewEvent } from "../../services/Services";
import { EventsData } from "../../services/EventData";
// import { EventsData } from "../../services/EventData";
 
interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
  updateEvents?:(item: IEvents) => void
  
  }
const EventSchedulePopUp =({ isOpen, onClose,updateEvents }:PopupProps)=>{
    const [selectedDate, setSelectedDate] = useState<Date|null>();
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event:  SelectChangeEvent<string>) => {
      const option = event.target.value;
      setSelectedOption(option);
    };
    const [selectedTime, setSelectedTime] = useState<Dayjs | null | undefined> (null);

    const handleTimeChange = (newTime:Dayjs | null | undefined) => {
      setSelectedTime(newTime)
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
       const item=addNewEvent({formattedDate,formattedTime,selectedOption});
      //  const newArray = [...EventsData,item ];
       updateEvents?.(item)
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
      {(EventsData.map((team:IEvents) => (
            <MenuItem key={team.id} value={team.teamName}>
              {team.teamName}
            </MenuItem>
          )))}
      </Select>
    </FormControl></div>
            <div className="dateAndTime">
            
               <DatePicker className="scheduleDatePicker" selected={selectedDate} onChange={handleDateChange} dateFormat="YYYY-MM-dd" placeholderText="Select Date"/>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                 
                 <TimePicker   label="Select Time" // Placeholder text
        value={selectedTime}
        onChange={handleTimeChange}
        views={['hours','minutes']}  className="scheduleTimePicker"/>
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