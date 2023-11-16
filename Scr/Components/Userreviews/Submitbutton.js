import React from 'react';

function SubmitButton({ handleSubmit }) {
  return (
    <button className="submit-button" onClick={handleSubmit}>
      Submit
    </button>
  );
}

export default SubmitButton;
