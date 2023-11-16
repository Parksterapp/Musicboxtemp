import React from 'react';
import './TopCharts.css';
import TopSongs from './TopSongs';
import TopArtists from './TopArtists';
import TopPlaylists from './TopPlaylists';

function TopCharts() {
  return (
    <div className="top-charts-container">
      <h2>Top Charts</h2>
      <div className="top-charts-sections">
        <TopSongs />
        <TopArtists />
        <TopPlaylists />
      </div>
    </div>
  );
}

export default TopCharts;
