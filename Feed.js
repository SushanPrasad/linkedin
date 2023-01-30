import React, { useEffect, useState} from 'react';
import "./Feed.css"

import CreateIcon from '@mui/icons-material/Create';
import Inputoptions from './Inputoptions';

import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventNoteIcon from '@mui/icons-material/EventNote';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Post from './Post';
import { db } from './firebase';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

import FlipMove from "react-flip-move";

function Feed() {

  const user = useSelector(selectUser);
  
 //4
  const [input, setInput] = useState('');  


//1
  const [posting, setposting] = useState([]);

 //2
  useEffect(() =>{
    db.collection("posting").orderBy("timestamp", "desc").onSnapshot(snapshot => 
                   setposting(snapshot.docs.map((doc) => ( {
                    
                      id: doc.id,
                    data: doc.data(),                  
                    
                   })         
          ))
    );
  },[])

//0
  const sendPost = (e) => {
    e.preventDefault();
    
    db.collection('posting').add({
      name: user.displayName,
      description: user.email,
      message:input,
      photoUrl:user.photoUrl || "" ,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })

//6

setInput("");

  }


  return (
    <div className='feed'>
    
    <div className='feed_inputcontainer'>
       <div className='feed_input'>
       <CreateIcon />
<form>
                                              {/* 5 */}
    <input  value={input} onChange={e => setInput(e.target.value)} type="text"  />   
    <button onClick={sendPost} type="submit">
     send
    </button>
</form>
       </div> 

       <div className='feed_inputoptions'>
        {/* feed below post input option */}

        <Inputoptions Icon={ImageIcon} title="Photo" color="#378FE9" />
        <Inputoptions Icon={YouTubeIcon} title="Video"  color="#5F9B41"/>
        <Inputoptions Icon={EventNoteIcon} title="Event" color="#C37D16" />
        <Inputoptions Icon={NewspaperIcon} title="Write article" color="#E16745" />


       </div> 
    </div>

{/* post */}
         <FlipMove>     

 {posting.map(({ id, data: { name, description, message, 
                      photoUrl} } ) => (

               <Post key={id}
                     name  ={name}
                     description={description}
                     message={message}
                     photoUrl={photoUrl}
                     />


             ))  }  

             </FlipMove> 
             {/* //FlipMove used for post animation "npm--react-flip-move" */}
   

 
    </div>
  )
}

export default Feed;