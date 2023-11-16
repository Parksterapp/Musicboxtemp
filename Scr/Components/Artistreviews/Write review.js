import React, { useState } from 'react';
import RatingInput from './RatingInput';
import CommentInput from './CommentInput';
import SubmitButton from './SubmitButton';

const WriteReview = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (value) => {
    setComment(value);
  };

  const handleSubmit = () => {
    // Submit review with rating and comment
  };

  return (
    <div>
      <h2>Write a Review</h2>
      <RatingInput value={rating} onChange={handleRatingChange} />
      <CommentInput value={comment} onChange={handleCommentChange} />
      <SubmitButton onClick={handleSubmit} />
    </div>
  );
};

export default WriteReview;
