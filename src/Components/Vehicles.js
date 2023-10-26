import React, { Component } from 'react'
import VehicleCard from './VehicleCard'
import AddVehicle from './AddVehicle'

export default class Vehicles extends Component{
  constructor(){
    super();
    this.state={
        data:[]
    }
}

async componentDidMount(){
  let url = "http://ec2-51-20-117-115.eu-north-1.compute.amazonaws.com:8080/api/cars"
  let data = await fetch(url).catch((err)=>{console.log(err)})
  let parsedData= await data.json()
  this.setState({data:parsedData.data})
}
  
  
  render() {
    
    return(
    <>
        <div id='vehicleheading'>
        <center><h4>Your Vehicles</h4></center>
        </div>
        
        <div style={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap-reverse'}}>
          <div style={{display:'flex', flexDirection:'column'}}>
          {this.state.data?.map((element)=>{
            return <VehicleCard key={element.id} carName={element.carName}
            carPlate={element.carPlate}/>
             })}
          </div>

          <div>
          <AddVehicle/>
          </div>
        </div>
    </>
    )
  }
}
