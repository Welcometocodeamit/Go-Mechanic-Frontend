import React from 'react'

export default function Addgarage() {

  async function addGarage(event) {
    event.preventDefault(); // Fix typo in method name

    var organizationName = document.getElementById('InputGarageName').value;
    var city = document.getElementById('InputGarageCity').value;
    var serviceName = document.getElementById('InputGarageService').value;
    var serviceCost = document.getElementById('InputCost').value;

    let data = {
        organizationName: organizationName,
        city: city,
        serviceName: serviceName,
        serviceCost: serviceCost
    };

    console.log(data);

    let requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };

    let url = "https://gomechanicbackend.onrender.com/api/services";

    try {
        await fetch(url, requestOptions).then(response => {
            if (!response.ok) {
                throw new Error(`Failed to add garage. Status: ${response.status}`);
            } else {
                window.location.href = '/services';
            }
        }).catch((e) => {
            console.log("Unable to fetch");
        });
    } catch (err) {
        console.error(err);
    }
}


 

  return (
    <>
    <center><h4 id='adminheading'>Add Garage</h4></center>
      <form className='container my-5' onSubmit={addGarage}>
              <div className="form-group">
                  <label htmlFor="InputGarageName">Garage Name</label>
                  <input type="text" className="form-control" id="InputGarageName" aria-describedby="emailHelp" placeholder="Enter garage name"/>
              </div>
              <div className="form-group">
                  <label htmlFor="InputGarageCity">City</label>
                  <input type="text" className="form-control" id="InputGarageCity" aria-describedby="emailHelp" placeholder="Enter city"/>
              </div>
              <div className="form-group">
                  <label htmlFor="InputGarageService">Services</label>
                  <input type="text" className="form-control" id="InputGarageService" aria-describedby="emailHelp" placeholder="Enter services"/>
              </div>
              <div className="form-group">
                  <label htmlFor="InputCost">Service Cost</label>
                  <input type="text" className="form-control" id="InputCost" aria-describedby="emailHelp" placeholder="Enter cost"/>
              </div>
              
              <button type="submit" id='submitformbtn'>Submit</button>
          </form>
    </>
  )
}
