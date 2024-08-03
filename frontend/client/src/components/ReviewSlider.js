import React, { useState, useEffect } from 'react';
import Review from './Review';
import '../index.css'; // Import the CSS for styling

const reviews = [
  { text: "Amazing experience, would highly recommend!", author: "John Doe" },
  { text: "The best place I've ever stayed!", author: "Jane Smith" },
  { text: "Fantastic service and beautiful apartments.", author: "Emily Johnson" },
  { text: "Highly recommended for short stays!", author: "Michael Brown" }
];

const ReviewSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % reviews.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="review-slider">
      {reviews.map((review, index) => (
        <div key={index} className={`slide ${index === current ? 'active' : ''}`}>
          {index === current && <Review review={review} />}
        </div>
      ))}
    </div>
  );
};

export default ReviewSlider;
