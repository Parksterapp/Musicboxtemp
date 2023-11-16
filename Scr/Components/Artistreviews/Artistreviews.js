import React from 'react';
import ReviewList from './ReviewList';

const ArtistReviews = () => {
  // Fetch artist reviews from API or database
  const reviews = [...]; // Array of review objects

  return (
    <div>
      <h2>Artist Reviews</h2>
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default ArtistReviews;
