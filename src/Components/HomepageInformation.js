import React from 'react'

export default function HomepageInformation() {
  return (<>
        <div style={{marginTop:"10vh"}}>
          <div className='information-text'>
                  <center><h1>How Go-Mechanic Works?</h1></center>
          </div>
          <div className='information-main'>
                  <div className='information'>
                      <div className='inner-information mx-2 my-2'><big><b>1. Select a service</b></big><br/><p className='mx-3'>From Auto-care-hub<br/>website</p></div>
                      <div className='inner-information mx-2 my-2'><big><b>2. Select a Garage</b></big><br/><p className='mx-3'>Choose a garage<br/> near to you</p></div>
                      <div className='inner-information mx-2 my-2'><big><b>3. Schendule pickup</b></big><br/><p className='mx-3'>We offer free pickup<br/> and delivery</p></div>
                      <div className='inner-information mx-2 my-2'><big><b>4. Verify your pickup</b></big><br/><p className='mx-3'>Quickly verify <br/>with OTP</p></div>
                      <div className='inner-information mx-2 my-2'><big><b>5. Give us time!</b></big><br/><p className='mx-3'>We will take care<br/> from here</p></div>
                  </div>
          </div>
        </div>
    </>
  )
}
