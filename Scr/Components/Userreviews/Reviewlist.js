import React from 'react';
import ReviewItem from './ReviewItem';
import ReviewList.css';

function ReviewList({ reviews }) {
  // Implement the logic to display the list of reviews
  return (
    <div className="review-list">
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
}

export default ReviewList;
