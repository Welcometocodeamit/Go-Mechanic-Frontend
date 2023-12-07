import React from 'react'

export default function ({orgname, city, services, price }) {
  return (
    <>
    <tr>
      <td>{orgname}</td>
      <td>{city}</td>
      <td>{services}</td>
      <td>{price}</td>
      <td><button>Update</button></td>
      <td><button>Delete</button></td>
    </tr>
    </>
  )
}
