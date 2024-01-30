import { useEffect, useState } from 'react';

const ThemeChange = ({ id }) => {
  const [isDark, setIsDark] = useState(false);
  const [isClickable, setIsClickable] = useState(true);

  useEffect(() => {
    const themeChangeElements = document.querySelectorAll('.theme-change');

    const handleButtonClick = () => {
      if (!isClickable) {
        return;
      }

      setIsClickable(false);

      setIsDark(!isDark);

      themeChangeElements.forEach((element) => {
        setTimeout(() => {
          if (isDark) {
            element.classList.replace('dark-theme', 'light-theme');
          } else {
            element.classList.replace('light-theme', 'dark-theme');
          }
        }, 500);
      });


      setTimeout(() => {
        setIsClickable(true);
      }, 300);
    };

    const button = document.getElementById(id);
    button.addEventListener('click', handleButtonClick);

    return () => {
      button.removeEventListener('click', handleButtonClick);
    };
  }, [isDark, isClickable, id]);

  return null;
};

export default ThemeChange;
