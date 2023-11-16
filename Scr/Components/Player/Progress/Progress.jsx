import React from 'react';

const Progress = ({ currentTime, duration, onSeek }) => {
  const calculateProgress = () => {
    return `${(currentTime / duration) * 100}%`;
  };

  return (
    <div className="progress-bar">
      <div
        className="progress-filled"
        style={{ width: calculateProgress() }}
        onClick={(e) => {
          const seekPosition = (e.nativeEvent.offsetX / e.target.offsetWidth) * duration;
          onSeek(seekPosition);
        }}
      ></div>
    </div>
  );
};

export default Progress;
          
