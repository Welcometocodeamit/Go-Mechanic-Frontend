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
            <Link to='/services'><ul>Garages</ul></Link>
            <Link to='/vehicles'><ul>Vehicles</ul></Link>
            <Link to='/aboutus'><ul>About us</ul></Link>
            <Link to='/login'><ul>Log in</ul></Link>
        </li>

      </div>
    </div>
  )
}
