import React from 'react';
import './NewReleases.css';
import NewSongs from './NewSongs';
import NewArtists from './NewArtists';
import NewPlaylists from './NewPlaylists';

function NewReleases() {
  return (
    <div className="new-releases-container">
      <h2>New Releases</h2>
      <div className="new-releases-sections">
        <NewSongs />
        <NewArtists />
        <NewPlaylists />
      </div>
    </div>
  );
}

export default NewReleases;
