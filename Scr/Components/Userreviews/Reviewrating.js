import React from 'react';
import AverageRating from './AverageRating';
import StarRating from './StarRating';
import ReviewCount from './ReviewCount';
import ReviewRatings.css';

function ReviewRatings({ ratings }) {
  // Implement the logic to display review ratings
  return (
    <div className="review-ratings">
      <AverageRating rating={ratings.average} />
      <StarRating rating={ratings.average} />
      <ReviewCount count={ratings.count} />
    </div>
  );
}

export default ReviewRatings;
