import React from 'react'

export default function AddVehicle() {
    function addVehicleInfo(){
        let vehicleName = document.getElementById('vehiclename').value
        let plateNo = document.getElementById('plateno').value
        let chassis = document.getElementById('chassis').value
        console.log(vehicleName+plateNo+chassis)

        let data = { 
            carName: vehicleName,
            carPlate: plateNo,
            carChassis:chassis
        }

        let requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin':'*' },
            body: JSON.stringify(data)
        };

        let url = "http://localhost:8080/api/cars"

        fetch(url, requestOptions).then(res=>{console.log(res)}).catch(e=>{console.log(e)})
        console.log("done")
        
    }
  return (
    <div id='addvehicle'>
        <div id='logindiv'>
            <h3><b>Add Your Vehicle</b></h3>
            <form>
            <label htmlFor='vehiclename'>Vehicle Model</label>
            <input className='input' type='text' placeholder='Let us know your vehicle' id='vehiclename'/>
            <label htmlFor='password'>Vehicle No.</label>
            <input className='input' type='text' placeholder='Plate No.' id='plateno'/>
            <label htmlFor='confpass'>Chassis No.</label>
            <input className='input' type='chassis' placeholder='Chassis No. 'id='chassis'/>
            <button onClick={addVehicleInfo}>Submit</button>
            </form>
        </div>

    </div>
  )
}
