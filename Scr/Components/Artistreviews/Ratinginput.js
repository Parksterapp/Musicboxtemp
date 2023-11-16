import React from 'react';

const RatingInput = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="rating">Rating:</label>
      <input
        type="number"
        id="rating"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
    </div>
  );
};

export default RatingInput;
