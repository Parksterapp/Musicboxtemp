import React from 'react';

function NextButton({ onClick }) {
  return (
    <button className="next-button" onClick={onClick}>
      <i className="fas fa-step-forward"></i>
    </button>
  );
}

export default NextButton;
    
