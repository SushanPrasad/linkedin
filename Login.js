import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import "./Login.css"

function Login() {

const[email, setEmail]= useState("");
const[password,setPassword]= useState("");
const[name, setName]= useState("");
const[profilepic, setProfilepic]= useState("");

const dispatch =useDispatch();   //**useDispatch hook */ 


const logintoApp = (e) =>{
  e.preventDefault();

  auth.signInWithEmailAndPassword(email,password)
  .then(  (userAuth) => {
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          profileUrl: userAuth.user.photoURL,
        })
      )
    }

  ).catch(error => alert(error));
}





const register = () => {
   
    if (!name) {
        return alert ("Please provide your full name");
    }

    auth.createUserWithEmailAndPassword(email,password)
    .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL:profilepic,
            })
            .then(() => {      //**useDispatch hook */ 
             dispatch(
                 login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilepic,
             })
             );


            });   
}).catch((error) => alert(error));
     
};





  return (
    <div className='login'>
    <img src='https://ik.imagekit.io/amazonshop/linkedin-ar21_eSfqHBkgI.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1674200601264' 
          alt=''
      />    
    
    <form>

        <input placeholder=' Enter Your Full Name' type="text" 
               value={name} onChange={ (e) => setName(e.target.value) }

        />

        <input placeholder='Enter Your Email'  type="text"
               value={email} onChange={ (e) => setEmail(e.target.value) }
                  />
        <input  placeholder="Enter your Password" type="password"
                value={password} onChange={ (e) => setPassword(e.target.value) }

                  />
        <input  placeholder='Profile photo URL (optional)' type="text"
                value={profilepic} onChange={ (e) => setProfilepic(e.target.value) }
               
                  />

   <button type='submit' onClick={logintoApp}> Sign In</button>

    </form>

<p> 
Not a member?
  <span className='register' onClick={register}> Register Now</span>
</p>

    </div>
  )
}

export default Login