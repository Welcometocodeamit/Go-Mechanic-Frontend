import './App.css';
import BookingForm from './Components/BookingForm';
import Hompage from './Components/Hompage';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Registration from './Components/Registration';
import Services from './Components/Services';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Vehicles from './Components/Vehicles';
import AboutUs from './Components/AboutUs';
import AboutMe from './Components/AboutMe';
import Addgarage from './Components/Addgarage'
import AdminLogin from './Components/AdminLogin';
import UpdateVehicleForm from './Components/UpdateVehicleForm';
import UpdateGarage from './Components/UpdateGarage';


function App() {
  return (
   <>
   <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Hompage/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Registration/>}/>
        <Route path='/addgarage' element={<Addgarage/>}/>
        <Route path='/bookingform' element={<BookingForm/>}/>
        <Route path='/vehicles' element={<Vehicles/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/adminLogin' element={<AdminLogin/>}/>
        <Route path='/updatevehicle' element={<UpdateVehicleForm/>}/>
        <Route path='/updategarage' element={<UpdateGarage/>}/>
      </Routes>
      {/* <AboutMe/> */}
   </BrowserRouter>
   </>
  );
}

export default App;
