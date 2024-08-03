import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { subDays } from 'date-fns';

const BookingCalendar = () => {
  const bookedDates = [
    new Date(2024, 7, 5),
    new Date(2024, 7, 7),
    new Date(2024, 7, 15),
  ];

  const isDateBooked = date => {
    return bookedDates.some(bookedDate =>
      date.getFullYear() === bookedDate.getFullYear() &&
      date.getMonth() === bookedDate.getMonth() &&
      date.getDate() === bookedDate.getDate()
    );
  };

  return (
    <div className="calendar-container">
      <DatePicker
        inline
        highlightDates={[
          {
            "booked": bookedDates.map(date => subDays(date, 0))
          }
        ]}
        dayClassName={date =>
          isDateBooked(date) ? "booked-date" : undefined
        }
        filterDate={date => !isDateBooked(date)}
      />
    </div>
  );
}

export default BookingCalendar;
