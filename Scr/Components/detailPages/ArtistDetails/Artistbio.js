import React, { useState } from 'react';
import './ArtistBio.css';

const ArtistBio = ({ bio }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="artist-bio">
      <h2 className="bio-title">Biography</h2>
      <p className={`bio-content ${expanded ? 'expanded' : ''}`}>{bio}</p>
      <button className="expand-button" onClick={toggleExpansion}>
        {expanded ? 'Collapse' : 'Expand'}
      </button>
    </div>
  );
};

export default ArtistBio;
  
