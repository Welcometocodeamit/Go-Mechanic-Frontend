import './App.css';
import Hompage from './Components/Hompage';
import Navbar from './Components/Navbar';
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
      </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
