
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLocation } from 'react-router-dom';

export default function BookingForm() {

    const [selectedDate, setSelectedDate] = useState(null);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

  // Extracting values from URL parameters
    const defaultPrice = queryParams.get('price') || '';
    const defaultName = queryParams.get('name') || '';
    const defaultCity = queryParams.get('city') || '';
    const defaultService = queryParams.get('service') || '';

    const [price, setPrice] = useState(defaultPrice);
    const [name, setName] = useState(defaultName);
    const [city, setCity] = useState(defaultCity);
    const [service, setService] = useState(defaultService);
    

    useEffect(() => {
        setPrice(defaultPrice);
        setName(defaultName);
        setCity(defaultCity);
        setService(defaultService);
      }, [defaultPrice, defaultName, defaultCity, defaultService]);


    async function sendMail(event){
        event.preventDefault(); 
        let cname=document.getElementById('inputfname').value +" "+document.getElementById('inputlname').value
        
        var fetch1 = document.getElementById('inputfname').value.length<=1 && alert("First name should not be empty")
        var fetch2 = document.getElementById('inputlname').value.length<=1 && alert("Last name should not be empty")


        let email=document.getElementById('exampleFormControlInput1').value
        let plateNo=document.getElementById('inputvehicleno').value
        let car=document.getElementById('inputvehiclemodel').value
        let address=document.getElementById('inputAddress2').value +", "+document.getElementById('inputCity').value+", "+document.getElementById('inputCity').value+", Pincode:"+document.getElementById('inputZip').value
        let date=selectedDate.toISOString().slice(0,10)
        let time=document.getElementById('inputTime').value
        

        try {
            var bookingNo=selectedDate.toString().slice(4, 7).toUpperCase()+selectedDate.toString().slice(8, 10)+selectedDate.toString().slice(11, 15)+document.getElementById('inputfname').value.slice(0,1).toUpperCase()+document.getElementById('inputlname').value.slice(0,1).toUpperCase()
        } catch (error) {
            alert("Date and pickup time cannot be empty")
        }
        
        let url = `${process.env.REACT_APP_BASE_URL}/mail/send/${email}`
        let data = { 
            subject: "Go Mechanic - Booking Details",
            message: `Dear ${cname},

            Thank you for choosing Go Mechanic for your vehicle service needs. We are pleased to confirm your booking with the following details:
            
            Booking Reference Number:${bookingNo}
            
            Vehicle Details:
            Vehicle Number: ${plateNo}
            Vehicle Name/Model: ${car}

            Service Details:
            Garage Name: ${name}
            Garage Address: ${city}
            Service Choosen: ${service}

            Pickup Details:
            Pickup Address: ${address}
            Pickup Date: ${date}
            Preferred Pickup Time: ${time}
            Estimated Total Cost: ${price}rs
            
            Payment Details:
            Payment Method: [Credit Card/PayPal/Cash on Pickup, etc.]
            Payment Status: [Unpaid]
            
            Important Notes:
            Please ensure that your vehicle is accessible at the provided pickup address at the scheduled time.
            In case of any changes or cancellations, please contact our customer service at gomechanic.booking@gmail.com.

            Confirmation of Service:
            A service representative from Go Mechanic will arrive at the specified pickup address. Please be prepared to hand over the vehicle keys and any relevant documents.
            
            Thank you for choosing Go Mechanic. We look forward to providing you with excellent service.
            
            Best Regards,
            
            Go Mechanic
            +91 8879899584`
        }

        let requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin':'*' },
            body: JSON.stringify(data)
        };

        if(!fetch1 && !fetch2){
            try{await fetch(url, requestOptions).then(response=>{
                if (!response.ok) {
                    throw new Error(`Failed to send mail. Status: ${response.status}`);
                }else{
                    console.log("mail sent")
                    alert("Booking sucess!, Please check your email for booking details")
                    window.location.href = '/';
                }
            }).catch((e)=>{console.log("Unable to send mail")})}catch (err) {
                console.error(err);}
        }else{
            alert("Booking not confirmed due to short of details")
        }

    }


  return (
            <div className='container my-5'>
                <div className='container'>
                    <h4 id='garageName'>{name}</h4>
                </div>
            <form className="row g-3" onSubmit={sendMail}>
                <div className="col-md-6">
                    <label htmlFor="inputfname" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="inputfname"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputlname" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="inputlname"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="contactno" className="form-label">Contact no.</label>
                    <input type="text" className="form-control" id="contactno" placeholder="1234567890"/>
                </div>
                <div className="col-6">
                    <label htmlFor="inputvehicleno" className="form-label">Vehicle No.</label>
                    <input type="text" className="form-control" id="inputvehicleno" placeholder="MH 00 AB 0000"/>
                </div>
                <div className="col-6">
                    <label htmlFor="inputvehiclemodel" className="form-label">Vehicle Model</label>
                    <input type="text" className="form-control" id="inputvehiclemodel" placeholder="VolksWagen Polo (2023)"/>
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputService" className="form-label">Service Selected</label>
                    <input type="text" className="form-control" id="inputService" value={service}
                    onChange={(e) => setService(e.target.value)}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputDate" className="form-label">Select Date</label><br></br>
                    <DatePicker
                        id="inputDate"
                        className="form-control"
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="dd/MM/yyyy" // Customize the date format if needed
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="inputTime" className="form-label">Select Time</label>
                    <input type="text" className="form-control" id="inputTime"/>
                </div>


                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Pickup Address</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Building no, Parking details"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" value={city} onChange={(e) => setCity(e.target.value)}/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select" defaultValue="Maharashtra">
                        <option value="" disabled>Choose...</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                    </select>
                    </div>

                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip"/>
                </div>
                <div className="col-12">
                    <button id='submitformbtn' className="btn" type="submit">Submit</button>
                </div>
            </form>
        </div>
  )
}
