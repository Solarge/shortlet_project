import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Apartments from './components/Apartments';
import ApartmentsComponent from './components/ApartmentsComponent'; 
import CustomNavbar from './components/Navbar';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ContactUs from './components/ContactUs';
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
        <Route path="/contact" element={<ContactUs />} /> {/* Add ContactUs route */}
        <Route path="/mapComponent" element={<MapComponent />} /> {/* Example route for map */}
        <Route path="/apartment/:id" element={<ApartmentDetail />} /> {/* Route for detailed view */}
        
      </Routes>
    </Router>
  );
}

export default App;
