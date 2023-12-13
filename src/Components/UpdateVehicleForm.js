import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function UpdateVehicleForm() {
    
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const carId = queryParams.get('id') || '';
    const defaultName = queryParams.get('name') || '';
    const defaultPlate = queryParams.get('plate') || '';
    const defaultChassis = queryParams.get('chassis') || '';

    const [carName, setCarName] = useState(defaultName)
    const [carPlate, setCarPlate] = useState(defaultPlate)
    const [carChassis, setCarChassis] = useState(defaultChassis)

    async function updateVehicle(event){
        event.preventDefault();
        let url = `${process.env.REACT_APP_BASE_URL}/cars/updatecar/${carId}`

        let data = { 
            carName: carName,
            carPlate: carPlate,
            carChassis:carChassis
        }

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
                alert("Vehicle Update sucess")
              }
              window.location.href = '/vehicles';
              
        }).catch((e)=>{console.log("Unable to update vehicle")})}catch (err) {
            console.error(err);}

    }

  return (
    <>
        <center><h4 id='adminheading'>Update Vehicle</h4></center>
        <form className='container my-5' onSubmit={updateVehicle}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Car Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter new car name" value={carName}
                    onChange={(e) => setCarName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Enter car plate</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Car Plate" value={carPlate}
                    onChange={(e) => setCarPlate(e.target.value)}/>
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Enter car chassis</label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Car Chassis" value={carChassis}
                    onChange={(e) => setCarChassis(e.target.value)}/>
            </div>

            <button type="submit" id='submitformbtn'>Submit</button>
        </form>

    </>
  )
}
