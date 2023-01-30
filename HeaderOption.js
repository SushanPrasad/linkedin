import React from 'react';
import "./HeaderOption.css";
import { Avatar } from '@mui/material';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

function HeaderOption({ avatar, Icon, title, onClick }) {
  
  const user = useSelector(selectUser);  //avatar image=== used in header,js

  return (
    <div onClick={onClick} className='headeroption'>
    {Icon && <Icon className="headeroption_icon" />} 
    {avatar && <Avatar className="headeroption_avatar" >
     
     {user?.email[0]}
            
            {/* //email first letter shown in avatar */}
                 </Avatar>       
         }
          
    <h3 className='headeroption_title'> {title} </h3>
    </div>
  )
}

export default HeaderOption