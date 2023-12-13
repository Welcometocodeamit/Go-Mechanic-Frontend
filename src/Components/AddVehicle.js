import React from 'react'

export default function AddVehicle() {
    async function addVehicleInfo(event){
        event.preventDefault();
        let vehicleName = document.getElementById('vehiclename').value
        let plateNo = document.getElementById('plateno').value
        let chassis = document.getElementById('chassis').value

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

        let url = `${process.env.REACT_APP_BASE_URL}/cars`

        try{await fetch(url, requestOptions).then(response=>{
            if (!response.ok) {
                throw new Error(`Failed to add vehicle. Status: ${response.status}`);
                console.log("Not ok")
              }else(console.log("ok"))
              window.location.reload()
        }).catch((e)=>{console.log("Unable to fetch")})}catch (err) {
            console.error(err);}
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
