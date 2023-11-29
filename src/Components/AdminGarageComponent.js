import React from 'react'

export default function (props) {
  return (
    <div id='adming'>
      <div className='contentofadmin'><h5>{props.orgname}</h5></div>
      <div className='contentofadmin'><p>City: {props.city}</p></div>
      <div className='contentofadmin'><p>Services: {props.services}</p></div>
      <div className='contentofadmin'><p>Cost: {props.price}</p></div>
      <div className='contentofadmin'><button>Delete</button>&nbsp;&nbsp;<button>Update</button></div>
    </div>
  )
}
