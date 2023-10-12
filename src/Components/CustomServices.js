import React from 'react'
import CService from './CService'
import carbattery from '../Assets/car-battery.png'
import breaks from '../Assets/breaks.png'
import ac from '../Assets/air-conditioner.png'
import clutch from '../Assets/clutch-disc.png'
import speaker from '../Assets/car-speakers.png'
import headlight from '../Assets/headlights.png'
import chassis from '../Assets/chassis.png'
import cdoor from '../Assets/car-door.png'  

import cardetailing from '../Assets/car.png'
import mirror from '../Assets/mirror.png'
import suspension from '../Assets/suspension.png'
import steering from '../Assets/steering-wheel.png'
import tyre from '../Assets/tyre.png'  



export default function CustomServices() {
  return (
    <div id='cmaindiv'>
         <center><h1>Car Services</h1></center>
        <div id='sdiv'>
        <CService heading="Batteries" imgs={carbattery}/>
        <CService heading="Breaks" imgs={breaks}/>
        <CService heading="Air-Conditioners" imgs={ac}/>
        <CService heading="Clutch" imgs={clutch}/>
        <CService heading="Speakers" imgs={speaker}/>
        <CService heading="Headlights" imgs={headlight}/>
        <CService heading="Body" imgs={chassis}/>
        <CService heading="Glasses" imgs={cdoor}/>
        <CService heading="Steeing" imgs={steering}/>
        <CService heading="Tyres" imgs={tyre}/>
        <CService heading="Side Mirrors" imgs={mirror}/>
        <CService heading="Suspension" imgs={suspension}/>
        </div>
    </div>
  )
}
