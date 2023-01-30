import React from 'react'
import "./Widget.css"

import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


function Widget() {

  const news = (heading, subtite) => (
    <div className='article'>
        <div className='article_left'>
<FiberManualRecordIcon />
        </div>

    <div className=' article_right'>
        <h4> {heading}</h4>
        <p>{subtite} </p>
    </div>    
    </div>
  )


  return (
    <div className='widget'>
  
     <div className='widget_header'>
<h2> Linkedin News </h2>
  <InfoIcon />
     </div>
     {news ("Months after a suspension bridge collapsed in Morbi town of Gujarat killing 135 people, the state government has issued a show-cause notice to the local municipality")}
     {news("Coronavirus Live Updates: China says Covid outbreak has infected 80% of population")}
     {news(" A doomsday view of Joshimath…from the sky")}
     {news("Record in Gujarat, rivaaj in Himachal and a Hindu in Rampur")}
     {news("Top court does not want to probe Kashmir genocide ")}
     {news(" Meghalaya was caught flouting coal mining ban")}
     {news(" Cyclone Mandous is coming, alert in Puducherry, TN and Andhra")}
     {news("After IAF, will Indian Navy opt for French Rafale jets")}
     {news(" Friction with the US driving Saudi Arabia toward China")}
     {news(" A window to greener grass for Indian-Americans")}
     

    </div>
  )
}

export default Widget