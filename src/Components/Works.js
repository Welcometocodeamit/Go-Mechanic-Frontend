import React from 'react'

export default function Works(props) {
  return (
    <div id='works'>
        <div id='workinfo'>
            <h4>{props.heading}</h4>
            <h6>{props.info}</h6>
        </div>

        <div id='workphoto'>
            <img src={props.imgsrc} height={"70px"} alt='image'/>
        </div>
        
    </div>
  )
}
