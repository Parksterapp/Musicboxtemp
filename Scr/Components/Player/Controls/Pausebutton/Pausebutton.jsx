import React from 'react';

function PauseButton({ onClick }) {
  return (
    <button className="pause-button" onClick={onClick}>
      <i className="fas fa-pause"></i>
    </button>
  );
}

export default PauseButton;
