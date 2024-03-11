import React, { useState } from 'react'
import '../styles/MyTeam.css'
import {teamMembersArray} from '../components/TeamMembers'
const MyTeam = () => {
  const [activeItem, setActiveItem] = useState<null|string>();
  
  const handleItemClick = (itemName:string) => {
    setActiveItem(itemName);
  };

  return (
    <div>
    <div className='root'>
      <div className="container">
      <div className="row topContainer">
        <div className={`col-sm-1 item ${activeItem === 'All' ? 'active' : ''}`} onClick={() => handleItemClick('All')} >
         <label className={`${activeItem === 'All' ? 'active' : ''}`} onClick={() => handleItemClick('All')}> All</label>
        </div>
        <div className={`col-sm-1 item ${activeItem === 'My Team' ? 'active' : ''}`} onClick={() => handleItemClick('My Team')}  style={{width:110}}>
     
             <label className={`${activeItem === 'My Team' ? 'active' : ''}`} onClick={() => handleItemClick('My Team')} > My Team</label> 
        
        </div>
      </div>
    </div>
    <div className="borderStyling">

    </div>
    <div className="container">
    <div className="row">
    {teamMembersArray.map((item, index) => (

        
    <div className="cardsStyling col-sm-4 mb-3">

    <div className="cardStyling">
      <div >
         
      </div>
      <div>
        liki
        </div>
    </div>
    
    </div>
    ))}
  </div>
  </div>
    </div>
    </div>
  )
}

export default MyTeam
