import React from 'react'
import { Link } from 'react-router-dom'

export default function CService(props) {
  return (
    <div id='CService'>
        <h5>{props.heading}</h5>
      <Link to='/services'>
        <img src={props.imgs} height={'60px'}/>
      </Link>
    </div>
  )
}
