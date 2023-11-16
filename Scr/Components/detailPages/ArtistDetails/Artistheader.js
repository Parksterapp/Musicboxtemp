import React from 'react';
import './ArtistHeader.css'; // Import your CSS file

const ArtistHeader = ({ artist }) => {
  return (
    <div className="artist-header">
      <img src={artist.profileImage} alt={artist.name} className="artist-avatar" />
      <div className="artist-details">
        <h1 className="artist-name">{artist.name}</h1>
        <p className="artist-genre">{artist.genre}</p>
      </div>
    </div>
  );
};

export default ArtistHeader;
  
