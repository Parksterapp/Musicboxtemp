import React from 'react';

const SubmitButton = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button">
      Submit
    </button>
  );
};

export default SubmitButton;
