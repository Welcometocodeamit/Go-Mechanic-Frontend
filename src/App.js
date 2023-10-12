import './App.css';
import Hompage from './Components/Hompage';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Registration from './Components/Registration';
import Services from './Components/Services';
import {BrowserRouter, Routes, Route} from "react-router-dom";

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
        <Route path='/addgarage' element={<Registration/>}/>
      </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
