import React from 'react';
import './Genres.css';
import GenreList from './GenreList';

function Genres() {
  return (
    <div className="genres-container">
      <h2>Genres</h2>
      <GenreList />
    </div>
  );
}

export default Genres;
