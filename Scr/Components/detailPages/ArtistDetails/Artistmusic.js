import React from 'react';
import './ArtistMusic.css';

const ArtistMusic = ({ songs }) => {
  return (
    <div className="artist-music">
      <h2 className="music-title">Music</h2>
      <ul className="music-list">
        {songs.map((song, index) => (
          <li key={index} className="music-item">
            {song.title} - {song.duration}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistMusic;
