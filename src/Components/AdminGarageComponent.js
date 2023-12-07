import React from 'react'
import { Link } from 'react-router-dom'

export default function ({orgname, city, services, price, id }) {
  async function deleteGarage(){
  
        let url = `https://gomechanicbackend.onrender.com/api/services/${id}`
  
        await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json', 
          },
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(`Failed to delete garage. Status: ${response.status}`);
            }
            alert("Garage with id "+id+" is deleted")
            window.location.reload()
          })
          .catch(error => {
            console.error('Error deleting garage:', error);
          });

  }
  return (
    <>
    <tr>
      <td>{orgname}</td>
      <td>{city}</td>
      <td>{services}</td>
      <td>{price}</td>
      <td><Link to={`/updategarage?id=${id}&orgname=${orgname}&city=${city}&services=${services}&price=${price}`}><button>Update</button></Link></td>
      <td><button onClick={deleteGarage}>Delete</button></td>
    </tr>
    </>
  )
}
