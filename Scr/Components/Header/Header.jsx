import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>MusicBox</h1>
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/library">Library</a></li>
          <li><a href="/artists">Artists</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
