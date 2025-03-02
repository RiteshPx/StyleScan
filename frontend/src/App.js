import './App.css';
import Home from './Components/HomePage';
import Navbar from './Components/Navbar';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import {  Route, Routes } from "react-router-dom";
import {UserDetails} from './Components/UserDetails';
import {Recommands} from './Components/Recommands';

function App() {
  return (
    <div className="App">
       {/* <Home/> */}
       <Navbar></Navbar>


  {/* Routes */}
  <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/userdetails" element={<UserDetails />} />
          <Route path="/recommands" element={<Recommands />} />
        </Routes>
    </div>
  );
}

export default App;
