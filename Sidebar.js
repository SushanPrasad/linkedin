import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./Sidebar.css";


function Sidebar() {

  const user= useSelector(selectUser);  //avatar image for email

  const recentItems = (topic) => (

 <div className='sidebar_recentItems'>
 <span className='sidebar_hash'> # </span>
  <p>{topic}</p>
 </div>

  )




  return (
    <div className='sidebar'>
    
    
    <div className='sidebar_top'>
    <img src='https://ik.imagekit.io/amazonshop/1662357770577_ew7niaIe7.jfif?ik-sdk-version=javascript-1.4.3&updatedAt=1672837627067' alt='' />
   
      <Avatar src={user.photoUrl} className='sidebar_avatar'>
    {user.email[0]}
    </Avatar>
    <h2>{user.displayName}</h2>
    <h4> {user.email} </h4>
    </div>

    <div className='sidebar_status'>
     
       <div className='sidebar_stat'>
              
              <p> Who viewed you</p>
              <p className='sidebar_number'> 2,532</p>

       </div>
       <div className='sidebar_stat'>

 
              <p> View on post </p>
              <p className='sidebar_number'> 1,857</p>


       </div>
      
    </div>

    <div className='sidebar_bottom'>
        <p className='recent'> Recent </p>
        {recentItems ('Reactjs Developer')}
        {recentItems ('Full Stack Developer')}
        {recentItems ('Software Developer')}
        {recentItems ('Python Developer')}
        {recentItems ('System Engineer')}
        {recentItems ('Data Scinetist')}
        {recentItems ('Software Architect')}



    </div>

    </div>
  )
}

export default Sidebar