import React from 'react';

const ReviewItem = ({ review }) => {
  return (
    <li>
      <h3>{review.title}</h3>
      <p>{review.comment}</p>
      <p>Rating: {review.rating}</p>
      <p>By: {review.reviewer}</p>
    </li>
  );
};

export default ReviewItem;
