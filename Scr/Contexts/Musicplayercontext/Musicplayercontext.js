import React, { createContext, useState } from 'react';

// Create the MusicPlayerContext
const MusicPlayerContext = createContext();

// Create a MusicPlayerProvider component
const MusicPlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // You can define functions or data related to the music player here

  return (
    <MusicPlayerContext.Provider value={{ currentSong, setCurrentSong, isPlaying, setIsPlaying }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
  
