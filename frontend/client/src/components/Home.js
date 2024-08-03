import React from 'react';
import BookingCalendar from './BookingCalendar'; // Import the calendar component

const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-text">
          <h1>Find Your Perfect Short Let Apartment</h1>
          <p>Discover prime locations in Lekki, Victoria Island, Ikoyi, and more.</p>
        </div>
      </div>
      <div className="calendar-section container mt-5">
        <h2>Availability Calendar</h2>
        <BookingCalendar /> {/* Include the calendar component */}
      </div>
    </div>
  );
}

export default Home;

