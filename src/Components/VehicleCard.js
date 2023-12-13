import React from 'react'
import audi from '../Assets/audi.png'
import carmodel from '../Assets/Carmodel.png'
import plate from '../Assets/license-plate.png'
import lastservice from '../Assets/last-minute.png'
import { Link } from 'react-router-dom'

export default function VehicleCard(props) {

  function deleteVehicle(){
    let carId= props.carId

      let url = `${process.env.REACT_APP_BASE_URL}/cars/deletecar/${carId}`

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
              <button className='vehiclecardbtns' onClick={deleteVehicle}>Delete</button>
              <Link to={`/updatevehicle?id=${props.carId}&name=${props.carName}&plate=${props.carPlate}&chassis=${props.carChassis}`}><button className='vehiclecardbtns'>Update</button></Link>
            </div>

          </div>


        </div>
  )
}
