import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react';


export default function Navbar() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <div className="navbar-a">
      <div className="leftNav-a">
        <li>
          <Link to="/">
            <ul>Go-Mechanic</ul>
          </Link>
        </li>
      </div>
      {/* Hamburger menu */}
      <div className={`navbar ${mobileMenuVisible ? 'mobile-menu-open' : ''}`}>
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className="rightNav-a">
          <li>
            <Link to="/services">
              <ul>Garages</ul>
            </Link>
            <Link to="/vehicles">
              <ul>Vehicles</ul>
            </Link>
            <Link to="/aboutus">
              <ul>About us</ul>
            </Link>
            <Link to="/login">
              <ul>Log in</ul>
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}

// export default function Navbar() {

//   return (
//     <div className='navbar-a'>
//        <div className='leftNav-a'>
//           <li>
//               <Link to='/'><ul>Go-Mechanic</ul></Link>
//           </li>
//         </div>
// {/* Hamburger menu */}
//       <div className='navbar'>
//         <div class="hamburger-menu">
//               <div class="bar"></div>
//               <div class="bar"></div>
//               <div class="bar"></div>
//           </div>
       
//         <div className='rightNav-a'>
//           <li>
//               <Link to='/services'><ul>Garages</ul></Link>
//               <Link to='/vehicles'><ul>Vehicles</ul></Link>
//               <Link to='/aboutus'><ul>About us</ul></Link>
//               <Link to='/login'><ul>Log in</ul></Link>
//           </li>
//         </div>
//       </div>
//     </div>
//   )
// }
