import React from 'react'

export default function BookingForm() {
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
                    <button id='submitformbtn' type="submit" class="btn">Submit</button>
                </div>
            </form>
        </div>
  )
}
