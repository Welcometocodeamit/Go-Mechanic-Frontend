import React from 'react'
import placeholder from '../Assets/placeholder.png'

export default function ServiceItem(props) {
  return (
     
        <div className='serviceItem'>
          <div className='servicebody servicebody1'>
            <p id='servicebodyheader'>{props.orgname}</p>
            <p id='servicecity'><img src={placeholder} alt='placeholder' height={'23px'}/>{props.city}</p>
          </div>
        
          <div className='servicebody'>
            <p>{props.services}</p>
          </div>

          <div className='servicebody'>
            <p>Starting from {props.price}</p>    
            <a href='/bookingform'><button>Book Now</button></a>
            </div>
        </div>

  )
}
