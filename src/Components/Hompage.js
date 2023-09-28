import React from "react";
import garage from '../Assets/garage.png';

export default function Hompage() {
  return (
      <div className="carousel-main-div">
        <div>
          <h1 className="mx-2">Go-Mechanic</h1>
          <h3 className="mx-2">Your trusted car care partner</h3>
          <p className="mx-2">
            Stay on top of your car's health with our routine maintenance
            services. <br />
            Oil changes, tire rotations, and inspections – we'll keep your car
            running like new.
          </p>
          <button type="button" className="mx-2">
            Log-in
          </button>
          <button type="button" className="mx-2">
            Register
          </button>
        </div>

        <div>
            <img src={garage} alt="garage image" height={"300vh"}/>
        </div>
      </div>
  
  );
}
