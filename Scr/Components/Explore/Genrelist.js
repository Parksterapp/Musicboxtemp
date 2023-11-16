import React from 'react';
import GenreItem from './GenreItem';

function GenreList() {
  return (
    <div>
      {/* Add your logic and JSX code for displaying a list of genres here */}
      <GenreItem genre="Rock" />
      <GenreItem genre="Pop" />
      <GenreItem genre="Hip Hop" />
      {/* Add more GenreItem components for other genres */}
    </div>
  );
}

export default GenreList;
