import { Avatar } from '@mui/material';
import React, {forwardRef} from 'react';
import Inputoptions from './Inputoptions';
import "./Post.css";

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentSharpIcon from '@mui/icons-material/CommentSharp';
import RepeatSharpIcon from '@mui/icons-material/RepeatSharp';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

//forwardRef used for post animation "npm--react-flip-move"
const Post = forwardRef( ({name, description, message, photoUrl}, ref ) => {
  const user = useSelector(selectUser);

  return (
    
    <div ref={ref}  className='post'>
{/* ref={ref} */}
    <div className='post_header'>
  
<Avatar src={photoUrl}> {user?.email[0]}
</Avatar>

        <div className='post_info'>

            <h2> {name} </h2>
             <p> {description} </p>
        </div>
    </div>

    <div className='post_body'>
        <p> {message} </p>
    </div>
    
      <div className='post_bottom'>
        <Inputoptions Icon={ThumbUpIcon}  title="Like" color="grey" />
        <Inputoptions Icon={CommentSharpIcon} title="Comment" color="grey" />
        <Inputoptions Icon={RepeatSharpIcon} title="Repost" color="grey" />
        <Inputoptions Icon={SendOutlinedIcon} title="Send" color="grey" />



      </div>

    </div>
  )
})

export default Post;