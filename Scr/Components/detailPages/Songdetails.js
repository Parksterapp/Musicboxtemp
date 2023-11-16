import React from 'react';
import './SongDetails.css';

const SongDetails = ({ song }) => {
  return (
    <div className="song-details">
      <div className="song-info">
        <h2 className="song-title">{song.title}</h2>
        <p className="song-artist">{song.artist}</p>
        <p className="song-album">Album: {song.album}</p>
        <p className="song-duration">Duration: {song.duration}</p>
      </div>
    </div>
  );
};

export default SongDetails;
  
