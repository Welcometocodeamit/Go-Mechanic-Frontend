import React from 'react'

export default function Registration() {
  return (
    <div id='loginpagemaindiv'>
        <div id='logindiv'>
            <h3><b>Registration</b></h3>
            <form>
            <label for='username'>Username</label>
            <input className='input' type='email' placeholder='Enter a Email' id='username'/>
            <label for='password'>Password</label>
            <input className='input' type='password' placeholder='Enter Password' id='password'/>
            <label for='confpass'>Confirm Password</label>
            <input className='input' type='password' placeholder='Confirm Password'id='confpass'/>
            <input id='loginsubmit' type='submit'/>
            </form>
        </div>
      
    </div>
  )
}
