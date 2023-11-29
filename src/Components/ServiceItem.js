import React from 'react'
import placeholder from '../Assets/placeholder.png'
import {Link} from 'react-router-dom'

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
            <Link to={`/bookingform?price=${props.price}&name=${props.orgname}&city=${props.city}&service=${props.services}`}>
              <button>Book Now</button>
            </Link>
            </div>
        </div>

  )
}
