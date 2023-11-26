import React from 'react'
import audi from '../Assets/audi.png'
import carmodel from '../Assets/Carmodel.png'
import plate from '../Assets/license-plate.png'
import lastservice from '../Assets/last-minute.png'

export default function VehicleCard(props) {

  function deleteVehicle(){
    let carId= props.carId

      let url = `https://go-mechanic-backend-production.up.railway.app/api/cars/deletecar/${carId}`

      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json', 
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to delete vehicle. Status: ${response.status}`);
          }
          window.location.reload()
        })
        .catch(error => {
          console.error('Error deleting vehicle:', error);
        });
  }
  return (
        <div id='vehiclecard'>

          <div id='vehicleimg'>
            <img src={audi} height={'180px'}/>
          </div>

          <div id='vehicleinfo'>
            <div>
                <img src={carmodel} alt='' height={'40px'}/>
                <h5 id='carName'>{props.carName}</h5>
            </div>

            <div>
                <img src={plate} alt='' height={'40px'}/>
                <h5>{props.carPlate}</h5>
            </div>
            
            <div>
                <img src={lastservice} alt='' height={'40px'}/>
                <h6>Your last service date was <b>20 march 2020</b></h6>
            </div>

            <div>
              <button onClick={deleteVehicle}>Delete</button>
            </div>

          </div>


        </div>
  )
}
