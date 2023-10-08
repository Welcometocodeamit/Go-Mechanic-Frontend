import React from "react";
import garage from '../Assets/garage.png';
import HomepageInformation from "./HomepageInformation";
import { Link } from "react-router-dom";

export default function Hompage() {
  return (
    <>
      <div className="carousel-main-div">
        <div>
          <h1 className="mx-2" style={{color:"rgb(66, 34, 136)"}}>Go-Mechanic</h1>
          <h3 className="mx-2">Your trusted car care partner</h3>
          <p className="mx-2">
            Stay on top of your car's health with our routine maintenance
            services. <br />
            Oil changes, tire rotations, and inspections – we'll keep your car
            running like new.
          </p>
          <Link to='/login'><button type="button" className="mx-2">
            Log-in
          </button></Link>
          <Link to='/register'><button type="button" className="mx-2">
            Register
          </button></Link>
        </div>

        <div className="homepageimagediv">
            <img src={garage} alt="garage image" height={"200vh"}/>
        </div>
      </div>
      <HomepageInformation/>
    </>
  );
}
