import React from 'react';
import './PlaylistDetails.css';

const PlaylistDetails = ({ playlist }) => {
  return (
    <div className="playlist-details">
      <div className="playlist-info">
        <h2 className="playlist-title">{playlist.title}</h2>
        <p className="playlist-owner">Owner: {playlist.owner}</p>
        <p className="playlist-description">Description: {playlist.description}</p>
      </div>
    </div>
  );
};

export default PlaylistDetails;
