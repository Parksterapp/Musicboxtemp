import React from 'react';
import RecentSearchItem from './RecentSearchItem';
import ClearRecentSearchesButton from './ClearRecentSearchesButton';

const RecentSearches = () => {
  // Code for fetching recent searches
  
  return (
    <div>
      <h2>Recent Searches</h2>
      <ul>
        <RecentSearchItem />
        {/* Render multiple RecentSearchItem components */}
      </ul>
      <ClearRecentSearchesButton />
    </div>
  );
};

export default RecentSearches;
