import React from 'react';

const CommentInput = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="comment">Comment:</label>
      <textarea
        id="comment"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default CommentInput;
