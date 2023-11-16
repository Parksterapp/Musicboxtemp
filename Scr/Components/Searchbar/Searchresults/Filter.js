import React from 'react';
import FilterOption from './FilterOption';
import ApplyFiltersButton from './ApplyFiltersButton';

const Filters = () => {
  // Code for handling filters
  
  return (
    <div>
      <h2>Filters</h2>
      <FilterOption />
      {/* Render multiple FilterOption components */}
      <ApplyFiltersButton />
    </div>
  );
};

export default Filters;
