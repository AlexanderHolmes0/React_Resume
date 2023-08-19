import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const currentMode = localStorage.getItem('darkMode');
    if (currentMode) {
      setIsDarkMode(JSON.parse(currentMode));
    } else {
      setIsDarkMode(
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      );
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      className="dark-mode-toggle"
      onClick={toggleDarkMode}
    >
      Toggle Dark Mode
    </button>
  );
};

export default DarkModeToggle;
