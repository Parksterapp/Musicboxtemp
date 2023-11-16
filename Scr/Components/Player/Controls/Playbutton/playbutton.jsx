import React from 'react';

function PlayButton({ onClick, isPlaying }) {
  return (
    <button className={`play-button ${isPlaying ? 'playing' : ''}`} onClick={onClick}>
      <i className={`fas fa-${isPlaying ? 'pause' : 'play'}`}></i>
    </button>
  );
}

export default PlayButton;
