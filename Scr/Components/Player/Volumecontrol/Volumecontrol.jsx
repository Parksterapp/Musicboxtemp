import React, { useState } from 'react';

const VolumeControl = ({ volume, onVolumeChange }) => {
  const [isMuted, setMuted] = useState(false);

  const handleVolumeChange = (e) => {
    onVolumeChange(parseFloat(e.target.value));
  };

  const toggleMute = () => {
    setMuted(!isMuted);
    onVolumeChange(isMuted ? 0 : volume);
  };

  return (
    <div className="volume-control">
      <button onClick={toggleMute} className="volume-toggle">
        {isMuted ? 'Unmute' : 'Mute'}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={isMuted ? 0 : volume}
        onChange={handleVolumeChange}
        className="volume-slider"
      />
    </div>
  );
};

export default VolumeControl;
        
