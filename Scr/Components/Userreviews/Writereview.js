import React, { useState } from 'react';
import RatingInput from './RatingInput';
import CommentInput from './CommentInput';
import SubmitButton from './SubmitButton';
import WriteReview.css';

function WriteReview() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  // Implement the logic to handle rating and comment input

  const handleSubmit = () => {
    // Implement the logic to submit the review
  };

  return (
    <div className="write-review">
      <RatingInput rating={rating} setRating={setRating} />
      <CommentInput comment={comment} setComment={setComment} />
      <SubmitButton handleSubmit={handleSubmit} />
    </div>
  );
}

export default WriteReview;
