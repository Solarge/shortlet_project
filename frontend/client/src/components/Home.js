import React from 'react';
import BookingCalendar from './BookingCalendar';
import MapComponent from './MapComponent'; // Import the MapComponent
import ReviewSlider from './ReviewSlider'; // Import the ReviewSlider component
import '../index.css'; // Ensure you have the corresponding CSS file for styling

const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-text">
          <h1>Find Your Perfect Short Let Apartment</h1>
          <p>Discover prime locations in Lekki, Victoria Island, Ikoyi, and more.</p>
        </div>
      </div>
      <div className="info-section container mt-5">
        <div className="calendar-section">
          <h2>Availability Calendar</h2>
          <BookingCalendar /> {/* Include the calendar component */}
        </div>
        <div className="map-section">
          <h2>Our Location</h2>
          <MapComponent /> {/* Include the map component */}
        </div>
      </div>
      <div className="calendar-section">
        <h2>What Our Customers Say</h2>
        <ReviewSlider /> {/* Include the review slider component */}
      </div>
    </div>
  );
}

export default Home;
