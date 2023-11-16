import React from 'react';

const AlbumItem = ({ album }) => {
  return (
    <div className="album-item">
      <img src={album.cover} alt={album.title} />
      <h3>{album.title}</h3>
      <p>{album.artist}</p>
    </div>
  );
};

export default AlbumItem;
