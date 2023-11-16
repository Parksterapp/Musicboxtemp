import React from 'react';

function PrevButton({ onClick }) {
  return (
    <button className="prev-button" onClick={onClick}>
      <i className="fas fa-step-backward"></i>
    </button>
  );
}

export default PrevButton;
