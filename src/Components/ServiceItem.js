import React from 'react'

export default function ServiceItem(props) {
  return (
    <div className='serviceItem'>
      <div className='servicebody'>
        <p id='servicebodyheader'>{props.orgname}</p>
        <p>{props.city}</p>
      </div>
    
    <div className='servicebody'>
      <p>{props.services}</p>
    </div>

    <div className='servicebody'>
      <p>Starting from {props.price}</p>    
      <a href='/a'><button>Book Now</button></a>
      </div>
    </div>
  )
}
