import React from 'react';

const Review = ({ review }) => {
  return (
    <div className="review">
      <p className="review-text">"{review.text}"</p>
      <p className="review-author">- {review.author}</p>
    </div>
  );
};

export default Review;
