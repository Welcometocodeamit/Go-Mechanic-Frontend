import React from 'react'

export default function CService(props) {
  return (
    <div id='CService'>
        <h5>{props.heading}</h5>
        <img src={props.imgs} height={'60px'}/>
    </div>
  )
}
