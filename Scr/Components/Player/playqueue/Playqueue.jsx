import React from 'react';

const PlayQueue = ({ songs, onRemoveSong }) => {
  return (
    <div className="play-queue">
      <h2>Play Queue</h2>
      <ul className="song-list">
        {songs.map((song, index) => (
          <li key={index} className="song">
            <span className="song-title">{song.title}</span>
            <button onClick={() => onRemoveSong(index)} className="remove-song">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayQueue;
    
