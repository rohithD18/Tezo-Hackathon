import React, { useState } from 'react'
import '../styles/MyTeam.css'
import {teamMembersArray} from '../components/TeamMembers'
import SubNavBar from './SubNavBar';
const MyTeam = () => {
  return (
    <div className='root'>
      <SubNavBar/>
    <div className="row">
    {teamMembersArray.map((item, index) => (
    <div className="cardStyling  col-sm-4 mb-3"  key={index}>
      <img src={item.profileUrl} width={64} height={64} className="imgStyling"></img>
      <div className='memberDetails'>
      <label className='name'>{item.name}</label>
      <label className='emailStyling'>{item.email}</label>
      <label className='empIdStyling'>Emp. ID {item.employeeId}</label>
        </div>
    </div>
    ))}
  </div>
  </div>
  )
}

export default MyTeam
