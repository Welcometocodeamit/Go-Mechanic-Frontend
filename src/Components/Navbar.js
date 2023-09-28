import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar-a'>
      <div className='leftNav-a'>
        <li>
            <Link to='/'><ul>Go-Mechanic</ul></Link>
        </li>
      </div>

      <div className='rightNav-a'>
        <li>
            <Link to='/services'><ul>Services</ul></Link>
            <a href='/a'><ul>About us</ul></a>
        </li>

      </div>
    </div>
  )
}
