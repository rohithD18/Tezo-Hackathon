import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
 import '../../styles/dashboard/EventSchedulePopUp.css';
import xclose from "../../assets/xclose.png";
import Dropdown from "../Dropdown";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker, DesktopTimePicker, TimePicker } from "@mui/x-date-pickers";
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, TextField, Box } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { IEvents, ITeams } from "../../Interfaces";
import {  combineDateAndTime } from "../../services/Services";
import { teamNames } from "../../services/TeamNames";
import { EventManagement, IAllEvents, IAllTeams } from "../../services/Interface/HackathonInterface";
import { useFecthApis } from "../../services/CustomHooks";


interface PopupProps {
    onClose: () => void;
    DataOfEvents?:EventManagement[];
  updateEvents?:(date:any,selectedOption:string) => void;
  appliDetailsData?:EventManagement;
  setIsApplicationDetails?:(message:boolean)=>void;

  
  
  }
const EventSchedulePopUp =({onClose,updateEvents,DataOfEvents,appliDetailsData,setIsApplicationDetails }:PopupProps)=>{
    const [selectedDate, setSelectedDate] = useState<Date|null>();
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [filteredTeams,setFilteredTeams]=useState<string[]>([]);
    const {allTeams} =useFecthApis()
    const handleSelectChange = (event:  SelectChangeEvent<string>) => {
      const option = event.target.value;
      option && setSelectedOption(option);
    };
    const [selectedTime, setSelectedTime] = useState<Dayjs | null | undefined> (null);

    const handleTimeChange = (newTime:Dayjs | null | undefined) => {
     setSelectedTime(newTime);
    };
    const handleDateChange = (newDate:any) => {
      setSelectedDate(newDate);
    
    };
  
    const handleSubmit = (e:any) => {
       if (!selectedDate || !selectedOption || !selectedTime) {
        alert('Please select date, team name, and time');
        return;
      }
      const currentTime = new Date();
      if (selectedTime === null || selectedTime === undefined) {
        return;
      }
      const formattedDate = selectedDate && selectedDate.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
      });
      var formattedTime="";
      if(selectedTime){
      const parsedTime = dayjs(selectedTime, 'h:mm:A'); 
      formattedTime = parsedTime.format('h:mm A');
      }
      const selectedTimeLocal=combineDateAndTime(new Date(formattedDate), formattedTime)
      if (selectedTimeLocal < currentTime) {
        alert('Selected time cannot be earlier than the current time');
        return;
      }
     else{
      const dayjsTime = dayjs(selectedTime);
      setSelectedTime(dayjsTime);
     }
    
      
       
        updateEvents?.(combineDateAndTime(new Date(formattedDate),formattedTime),selectedOption)
       
      onClose();
      setIsApplicationDetails && setIsApplicationDetails(false)
      
    }    
    useEffect(() => {
  //     const eventTeamNames =DataOfEvents && DataOfEvents.map(event => event.TeamName);
  // setFilteredTeams(teamNames.filter(name => eventTeamNames && !eventTeamNames.includes(name)));
 if(appliDetailsData!=undefined){


const eventTeamNames = DataOfEvents && DataOfEvents
  .filter(event => event.status !== 'Pending') // Filter events with status 'Pending'
  .map(event => event.teamName); // Extract TeamName values
  
  setFilteredTeams(teamNames.filter(name => 
    eventTeamNames && !eventTeamNames.includes(name)
  
   
  
  ));}
else{
  
  const eventTeamNames = DataOfEvents && DataOfEvents// Filter events with status 'pending'
  .map(event => event.teamName); // Extract team names

setFilteredTeams(teamNames.filter(name => 
  eventTeamNames && !eventTeamNames.includes(name)

 

));

}

    }, [DataOfEvents,appliDetailsData]);
    // useEffect(()=>{
    //    appliDetailsData && setSelectedOption(appliDetailsData.teamName)
    // },[])
    
    return(
        <div className="popup">
        
     
        <div className="scheduleMeetingPopup">
            <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
            <img src={xclose} alt="closeIcon" onClick={()=>{onClose();
            }} width={24} height={24}></img>
            </div>
            <p>Please provide the details for the Event scheduled</p>
            <div className="schedule">
                <Box>
                    <FormControl className="dropdown" fullWidth>
      <InputLabel id="dropdown-label">Select Team</InputLabel>
      <Select
        labelId="Select Team"
        id="dropdown"
        value={selectedOption} 
        onChange={handleSelectChange} 
        disabled={appliDetailsData&&( appliDetailsData ? true : false)}
      >
      {(allTeams.map((team:IAllTeams,id:number) => (
            <MenuItem key={id} value={team.id} >
              {team.teamName}
            </MenuItem>
          )))}
      </Select>
    </FormControl>
    </Box>
            <div className="dateAndTime">
            
               <DatePicker className="scheduleDatePicker" strictParsing={false} minDate={new Date()}   selected={selectedDate} onChange={handleDateChange}  placeholderText="Select Date"/>
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

