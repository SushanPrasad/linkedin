import React from 'react';
import "./Header.css";

import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';

import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';


function Header() {

const dispatch = useDispatch();

const logoutofApp =() => {
  dispatch(logout());
  auth.signOut();

}


  return (
    <div className='header'>
    
    <div className='header_left'>

{/* linkedin icon*/}
          <img src="https://ik.imagekit.io/amazonshop/icons8-linkedin-96_n4uiH2P0o.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658212708619" alt=''/>

       <div className='header_search'>
{/* searchicon */}
           <SearchIcon />
           <input type="text" placeholder='search' />

       </div>   


    </div>
    <div className='header_right'>

{/* icon+title pass with props */}

    <HeaderOption title="Home" Icon={HomeIcon}/>
    <HeaderOption title="My Network" Icon={SupervisorAccountIcon}/>
    <HeaderOption title="Jobs" Icon={BusinessCenterIcon}/>
    <HeaderOption title="Messaging" Icon={EmailRoundedIcon}/>
    <HeaderOption title="Notification" Icon={NotificationsRoundedIcon}/>
    <HeaderOption onClick={logoutofApp}  title="Sign Out" avatar={true}/>

 




    </div>
    
    </div>
  )
}

export default Header