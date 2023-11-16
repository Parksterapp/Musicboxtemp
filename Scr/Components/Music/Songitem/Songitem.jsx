import React from 'react';

const SongItem = ({ song }) => {
  return (
    <div className="song-item">
      <h3 className="song-title">{song.title}</h3>
      <p className="song-artist">{song.artist}</p>
    </div>
  );
};

export default SongItem;
