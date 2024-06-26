import ServiceItem from './ServiceItem'


import React, { Component } from 'react'
import Spinner from './Spinner';

export default class Services extends Component {
        constructor(){
            super();
            this.state={
                data:[],
                loading:false,
                city:'Near You'
            }
        }
        

        async componentDidMount(){
            try{
            let url = `${process.env.REACT_APP_BASE_URL}/services`
            console.log(url)
            this.setState({loading:true})
            let data = await fetch(url).catch((err)=>{console.log(err)})
            let parsedData= await data.json()
            this.setState({data:parsedData.data,
            loading:false})
            }catch (err){
                console.log(err)    
            }
        }

        

        searchByCity=async ()=>{
            try{
            let city = document.getElementById('inputCity').value
            let url = `${process.env.REACT_APP_BASE_URL}/services/${city}`
            this.setState({loading:true})
            let data = await fetch(url).catch((err)=>{console.log(err)})
            let parsedData= await data.json()
            this.setState({data:parsedData.data,
            loading:false,
            city:"in "+ city[0].toUpperCase()+city.slice(1)
        })
        }catch(err){
            console.log(err)
        }   
        }
    
  render() {
    return (
        <>
            <div id='garageheading'>  

            <div></div>
                <div>
                <center><h4 style={{fontWeight:'bold', margin:'10px', color:'rgb(66, 34, 136)'}}>Garages {this.state.city}</h4></center>
                </div>    

                <div id='ghi'>
                <input id='inputCity' type='text' placeholder='Enter your city'/>
                <button onClick={this.searchByCity}>Search</button>
                </div> 
            </div>
        <center>{this.state.loading&&<Spinner/>}</center>
        <div className='servicemaindiv'>
           {this.state.data?.map((element)=>{
            return <ServiceItem key={element.id} orgname={element.organizationName} city={element.city} 
            services={element.serviceName} price={element.serviceCost}/>
             })}
           
        </div>
        </>
    )
  }
}




