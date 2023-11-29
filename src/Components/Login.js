import React from 'react'

import {Link} from 'react-router-dom'

export default function Login() {
  return (
    <div id='loginpagemaindiv'>
        <div id='logindiv'>
            <h3><b>Log in</b></h3>
            <form>
             <input className='input' type='text' placeholder='Username or Email'/>
            <input className='input' type='password' placeholder='Password'/>
            <input id='loginsubmit' type='submit'/>
            </form>
            <p>Don't have account? <Link style={{textDecoration:"none"}} to='/register'>Register here</Link></p>
            <p><Link style={{textDecoration:"none"}} to='/adminLogin'>Admin login</Link></p>
        </div>
      
    </div>
  )
}
