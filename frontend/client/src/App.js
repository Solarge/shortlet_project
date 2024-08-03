import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Apartments from './components/Apartments';
import ApartmentsComponent from './components/ApartmentsComponent'; 
import CustomNavbar from './components/Navbar';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ApartmentDetail from './components/ApartmentDetail'; // Import ApartmentDetail component
import MapComponent from './components/MapComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartments" element={<ApartmentsComponent />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/mapComponent" element={<MapComponent />} /> {/* Example route for map */}
        
      </Routes>
    </Router>
  );
}

export default App;
