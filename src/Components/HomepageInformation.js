import React from 'react'
import Works from './Works'
import fimg from '../Assets/checklist.png';
import simg from '../Assets/car-repair.png';
import timg from '../Assets/schedule.png';
import foimg from '../Assets/one-time-password.png';
import fiimg from '../Assets/waiting-room.png';

export default function HomepageInformation() {
  return (<>
        <div style={{marginTop:"10vh"}}>
          <div className='information-text'>
                  <center><h1>How Go-Mechanic Works?</h1></center>
          </div>

          <Works heading="1. Select a service" info="From Go Mechanic website" imgsrc={fimg}/>
          <Works heading="2. Select a Garage" info="Choose a garage near to you" imgsrc={simg}/>
          <Works heading="3. Schedule pickup" info="We offer free pickup and delivery" imgsrc={timg}/>
          <Works heading="4. Verify your pickup" info="Quickly verify with otp" imgsrc={foimg}/>
          <Works heading="5. Give us time!" info="We will take care from here" imgsrc={fiimg}/>
        </div>
    </>
  )
}
