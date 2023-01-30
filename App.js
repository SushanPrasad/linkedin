import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import { auth } from './firebase';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Widget from './Widget';

function App() {
//1
  const user = useSelector(selectUser);

//3

const dispatch = useDispatch();

  
//2
  useEffect(() =>{
     auth.onAuthStateChanged((userAuth)=>{
      if (userAuth){
        //logged in

        dispatch( login({
         
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,

        })) 


      } else{
        //logged out

        dispatch(logout());
      
      
      }
     });
  }, []);

  return (
    <div className="app">

      {/* Header */}
      <Header />

      {!user ? (<Login />) :(
    
<div className='app_body'>
       <Sidebar />
       <Feed />
       <Widget />

</div>
)}
          </div>
  );
}

export default App;
