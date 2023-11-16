import React from 'react';
import ArtistReviews from './ArtistReviews';
import AverageRating from './AverageRating';
import ReviewCount from './ReviewCount';

const Starting = () => {
  // Fetch average rating and review count from API or database
  const averageRating = 4.5;
  const reviewCount = 10;

  return (
    <div>
      <h1>Welcome to Gigify!</h1>
      <ArtistReviews />
      <AverageRating average={averageRating} />
      <ReviewCount count={reviewCount} />
    </div>
  );
};

export default Starting;
