
import ServiceItem from './ServiceItem'


import React, { Component } from 'react'

export default class Services extends Component {
        constructor(){
            super();
            this.state={
                data:this.arr
            }
        }

        async componentDidMount(){
            let url = "http://localhost:8080/api/services"
            let data = await fetch(url).catch((err)=>{console.log(err)})
            let parsedData= await data.json()
            console.log(parsedData)
            this.setState({data:parsedData.data})
        }
    
  render() {
    return (
        <div className='servicemaindiv'>
           {this.state.data?.map((element)=>{
            return <ServiceItem key={element.id} orgname={element.organizationName} city={element.city} 
            services={element.serviceName} price={element.serviceCost}/>
             })}
           
        </div>
    )
  }
}




