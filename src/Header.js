// Header.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <header>
      
      <button style={{marginLeft:"130em"}} onClick={handleThemeToggle}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </header>
  );
};

export default Header;