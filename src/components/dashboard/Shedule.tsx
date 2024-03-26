import React, { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
// import 'react-clock/dist/Clock.css';
 import '../../styles/dashboard/Schedule.css'
import xclose from "../../assets/xclose.png";
import Dropdown from "../Dropdown";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MultiSectionDigitalClock } from "@mui/x-date-pickers/MultiSectionDigitalClock";
import { DesktopDatePicker, DesktopTimePicker, TimePicker } from "@mui/x-date-pickers";

type Props = {
    setIsApplicationDetailsOpen: any;
  };

export const Shedule =(props:Props)=>{
    const [selectedDate, setSelectedDate] = useState<any>();
    const { setIsApplicationDetailsOpen } = props;
    const hours:number[]=[1,2,3,4,5,6,7,8,9,10,11,12];
    const minutes: number[] = Array.from({ length: 60 }, (_, index) => index + 1);

    
    return(
        <div className="scheduleMeetingPopup">
            <img src={xclose} alt="closeIcon"/>
            <p>Please provide the details for the meeting scheduled</p>
            <div >
               <DatePicker className="datePicker" selected={selectedDate} onChange={(e)=>setSelectedDate(e)} dateFormat="YYYY-MM-dd" placeholderText="Select Date"/>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                 
                 <TimePicker className="timePicker"views={['hours','minutes']}/>
                 </LocalizationProvider>
                 

            </div>
            
        </div>
    )

}