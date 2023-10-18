import React from 'react'
import audi from '../Assets/audi.png'
import carmodel from '../Assets/Carmodel.png'
import plate from '../Assets/license-plate.png'
import lastservice from '../Assets/last-minute.png'

export default function VehicleCard(props) {
  return (
        <div id='vehiclecard'>

          <div id='vehicleimg'>
            <img src={audi} height={'180px'}/>
          </div>

          <div id='vehicleinfo'>
            <div>
                <img src={carmodel} alt='' height={'40px'}/>
                <h5>{props.carName}</h5>
            </div>

            <div>
                <img src={plate} alt='' height={'40px'}/>
                <h5>{props.carPlate}</h5>
            </div>
            
            <div>
                <img src={lastservice} alt='' height={'40px'}/>
                <h6>Your last service date was <b>20 march 2020</b></h6>
            </div>
            
            
            

          </div>


        </div>
  )
}
