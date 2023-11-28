import React from 'react'

export default function BookingForm() {

    

    function sendMail(){
        let name=document.getElementById('inputfname').value +" "+document.getElementById('inputlname').value
        let email=document.getElementById('exampleFormControlInput1').value
        let plateNo=document.getElementById('inputvehicleno').value
        let car=document.getElementById('inputvehiclemodel').value
        let address=document.getElementById('inputAddress2').value +" ,"+document.getElementById('inputCity').value+" ,"+document.getElementById('inputCity').value+" Pincode:"+document.getElementById('inputZip').value
        console.log(name)
        console.log(email)
        console.log(plateNo)
        console.log(car)
        console.log(address)
        let url = `http://localhost:8080/mail/send/${email}`

        let data = { 
            subject: "Go Mechanic - Booking Recipt",
            message: `Dear ${name},

            Thank you for choosing Go Mechanic for your vehicle service needs. We are pleased to confirm your booking with the following details:
            
            Booking Reference Number: XYZ
            
            Vehicle Number: ${plateNo}
            Vehicle Name/Model: ${car}
            Service Details: Body parts

            Pickup Details:
            
            Pickup Address: ${address}
            Preferred Pickup Time: 12Pm
            Estimated Total Cost: 5000rs
            
            Payment Details:
            
            Payment Method: [Credit Card/PayPal/Cash on Pickup, etc.]
            Payment Status: [Paid/Unpaid]
            
            Important Notes:
            Please ensure that your vehicle is accessible at the provided pickup address at the scheduled time.
            In case of any changes or cancellations, please contact our customer service at kumbharamit98@gmail.com.

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

        try{fetch(url, requestOptions).then(response=>{
            if (!response.ok) {
                throw new Error(`Failed to send mail. Status: ${response.status}`);
              }
                console.log("mail sent")
                alert(`Booking sucess!, Please check your email for booking details`)
              
        }).catch((e)=>{console.log("Unable to send mail")})}catch (err) {
            console.error(err);}

    }


  return (
            <div className='container my-5'>
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="inputfname" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="inputfname"/>
                </div>
                <div class="col-md-6">
                    <label for="inputlname" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="inputlname"/>
                </div>
                <div class="col-md-6">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div class="col-md-6">
                    <label for="contactno" class="form-label">Contact no.</label>
                    <input type="text" class="form-control" id="contactno" placeholder="1234567890"/>
                </div>
                <div class="col-6">
                    <label for="inputvehicleno" class="form-label">Vehicle No.</label>
                    <input type="text" class="form-control" id="inputvehicleno" placeholder="MH 00 AB 0000"/>
                </div>
                <div class="col-6">
                    <label for="inputvehiclemodel" class="form-label">Vehicle Model</label>
                    <input type="text" class="form-control" id="inputvehiclemodel" placeholder="VolksWagen Polo (2023)"/>
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Pickup Address</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Building no, Parking details"/>
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity"/>
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                    <option>Andhra Pradesh</option>
                    <option>Arunachal Pradesh</option>
                    <option>Assam</option>
                    <option>Bihar</option>
                    <option>Chhattisgarh</option>
                    <option>Goa</option>
                    <option>Gujarat</option>
                    <option>Haryana</option>
                    <option>Himachal Pradesh</option>
                    <option>Jammu and Kashmir</option>
                    <option>Jharkhand</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                    <option>Madhya Pradesh</option>
                    <option>Maharashtra</option>
                    <option>Manipur</option>
                    <option>Meghalaya</option>
                    <option>Mizoram</option>
                    <option>Nagaland</option>
                    <option>Odisha</option>
                    <option>Punjab</option>
                    <option>Rajasthan</option>
                    <option>Sikkim</option>
                    <option>Tamil Nadu</option>
                    <option>Telangana</option>
                    <option>Tripura</option>
                    <option>Uttar Pradesh</option>
                    <option>Uttarakhand</option>
                    <option>West Bengal</option>


                    </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="inputZip"/>
                </div>
                <div class="col-12">
                    <button id='submitformbtn' type="submit" class="btn" onClick={sendMail}>Submit</button>
                </div>
            </form>
        </div>
  )
}
