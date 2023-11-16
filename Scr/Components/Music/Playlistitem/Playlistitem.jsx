import React from 'react';

const PlaylistItem = ({ playlist }) => {
  return (
    <div className="playlist-item">
      <h3 className="playlist-title">{playlist.title}</h3>
      <p className="playlist-owner">{playlist.owner}</p>
    </div>
  );
};

export default PlaylistItem;
