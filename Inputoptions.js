import React from 'react';
import "./Inputoptions.css";

function Inputoptions({title, Icon, color}) {
  return (
    <div className='inputoption'>
         <Icon style={{ color: color }} />
         <h4> {title} </h4>

    </div>
  )
}

export default Inputoptions