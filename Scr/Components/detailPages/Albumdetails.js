import React from 'react';
import './AlbumDetails.css';

const AlbumDetails = ({ album }) => {
  return (
    <div className="album-details">
      <img src={album.cover} alt={album.title} className="album-cover" />
      <div className="album-info">
        <h2 className="album-title">{album.title}</h2>
        <p className="album-artist">{album.artist}</p>
        <p className="album-release-year">Released in {album.releaseYear}</p>
      </div>
    </div>
  );
};

export default AlbumDetails;
  
