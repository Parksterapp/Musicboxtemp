import React from 'react';
import './Trending.css';
import TrendingSongs from './TrendingSongs';
import TrendingArtists from './TrendingArtists';
import TrendingPlaylists from './TrendingPlaylists';

function Trending() {
  return (
    <div className="trending-container">
      <h2>Trending</h2>
      <div className="trending-sections">
        <TrendingSongs />
        <TrendingArtists />
        <TrendingPlaylists />
      </div>
    </div>
  );
}

export default Trending;
