import React from 'react';

const ArtistItem = ({ artist }) => {
  return (
    <div className="artist-item">
      <img src={artist.image} alt={artist.name} />
      <h3>{artist.name}</h3>
      <p>{artist.genre}</p>
    </div>
  );
};

export default ArtistItem;
    
