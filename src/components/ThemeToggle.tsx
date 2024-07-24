import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle: React.FC = () => {
  const [isDarkmode, setIsDarkmode] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('isDarkmode') === 'true';
    setIsDarkmode(storedTheme);
  }, []);

  useEffect(() => {
    
    localStorage.setItem('isDarkmode', isDarkmode.toString());
    const switchToggle = document.querySelector('#switch-toggle') as HTMLDivElement;
    if (switchToggle) {
      if (isDarkmode) {
        switchToggle.classList.remove('translate-x-0');
        switchToggle.classList.add('translate-x-7');
      } else {
        switchToggle.classList.remove('translate-x-7');
        switchToggle.classList.add('translate-x-0');
      }
    }  }, [isDarkmode]);

  const toggleTheme = () => {
    // setIsDarkmode((prevMode) => !prevMode);
    alert('Dark mode is not supported yet')
  };

  

  return (
    <button
      className="w-12 h-5 flex items-center bg-gray-300 rounded-full  shadow"
      onClick={toggleTheme}
    >
      <div
        id="switch-toggle"
        className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${isDarkmode ? 'translate-x-5' : 'translate-x-0'} flex items-center justify-center`}
      >
        {isDarkmode ? <FaMoon size={12} className='text-gray-400' /> : <FaSun size={12} className='text-yellow-300' />}
      </div>
    </button>
  );
};

export default ThemeToggle;
