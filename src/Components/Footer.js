import React from 'react'
import garagelogo from '../Assets/garage-car.png'
import facebook from '../Assets/facebook.png'
import instagram from '../Assets/instagram.png'
import twitter from '../Assets/twitter.png'
import whatsapp from '../Assets/whatsapp.png'
import youtube from '../Assets/youtube.png'

import email from '../Assets/email.png'
import telephone from '../Assets/telephone.png'
import calender from '../Assets/calendar.png'
import worktime from '../Assets/working-time.png'

export default function Footer() {
  return (
    <div id='footer'>

        <div id='leftfooter'>
            <div id='footerheader'>
                <img src={garagelogo} height={'40px'}/>
                <h3>Go Mechanic</h3>
            </div>

            <div>
                <h4>Address</h4>
                <p>Adani buisness park, BKC, mumbai, maharashtra</p>
            </div>

            <div id='footersocial'>
                <img src={facebook} height={'40px'}/>
                <img src={instagram} height={'40px'}/>
                <img src={twitter} height={'40px'}/>
                <img src={whatsapp} height={'40px'}/>
                <img src={youtube} height={'40px'}/>
            </div>
        </div>

        <div id='rightfooter'>
            <div>
                <img src={email} height={'25px'}/>                
                <h6>info@gomechanic.com</h6>
            </div>

            <div>
                <img src={telephone} height={'25px'}/>
                <h6>8879899594</h6>
            </div>

            <div>
                <img src={calender} height={'25px'}/>
                <h6>Monday-Sunday</h6>
            </div>

            <div>
                <img src={worktime} height={'25px'}/>
                <h6>7.00AM - 9.00PM(IST)</h6>
            </div>


        </div>
        
    </div>
  )
}
