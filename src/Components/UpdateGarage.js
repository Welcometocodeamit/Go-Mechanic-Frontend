import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function UpdateGarage() {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const garageId = queryParams.get('id') || '';
    const defaultName = queryParams.get('orgname') || '';
    const defaultCity = queryParams.get('city') || '';
    const defaultService = queryParams.get('services') || '';
    const defaultPrice = queryParams.get('price') || '';

    const [garageName, setGarageName] = useState(defaultName)
    const [city, setCity] = useState(defaultCity)
    const [service, setService] = useState(defaultService)
    const [price, setPrice] = useState(defaultPrice)

  async function upGarage(event) {
    event.preventDefault(); // Fix typo in method name
    let url = `${process.env.REACT_APP_BASE_URL}/services/updategarage/${garageId}`

    let data = {
        organizationName: garageName,
        city: city,
        serviceName: service,
        serviceCost: price
    };

    let requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin':'*' },
        body: JSON.stringify(data)
    };

    try{await fetch(url, requestOptions).then(response=>{
        if (!response.ok) {
            throw new Error(`Failed to update vehicle. Status: ${response.status}`);
            console.log("inside not ok")
          }else{
            alert("garage Update sucess")
          }
          window.location.href = '/services';
          
    }).catch((e)=>{console.log("Unable to update vehicle")})}catch (err) {
        console.error(err);}
}


 

  return (
    <>
    <center><h4 id='adminheading'>Update Garage</h4></center>
      <form className='container my-5' onSubmit={upGarage}>
              <div className="form-group">
                  <label htmlFor="InputGarageName">Garage Name</label>
                  <input type="text" className="form-control" id="InputGarageName" aria-describedby="emailHelp" placeholder="Enter garage name" value={garageName}
                    onChange={(e) => setGarageName(e.target.value)}/>
              </div>
              <div className="form-group">
                  <label htmlFor="InputGarageCity">City</label>
                  <input type="text" className="form-control" id="InputGarageCity" aria-describedby="emailHelp" placeholder="Enter city" value={city}
                    onChange={(e) => setCity(e.target.value)}/>
              </div>
              <div className="form-group">
                  <label htmlFor="InputGarageService">Services</label>
                  <input type="text" className="form-control" id="InputGarageService" aria-describedby="emailHelp" placeholder="Enter services" value={service}
                    onChange={(e) => setService(e.target.value)}/>
              </div>
              <div className="form-group">
                  <label htmlFor="InputCost">Service Cost</label>
                  <input type="text" className="form-control" id="InputCost" aria-describedby="emailHelp" placeholder="Enter cost" value={price}
                    onChange={(e) => setPrice(e.target.value)}/>
              </div>
              
              <button type="submit" id='submitformbtn'>Submit</button>
          </form>
    </>
  )
}
