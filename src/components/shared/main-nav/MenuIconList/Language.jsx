import React, { useState, useEffect } from 'react';
import "../MainNavbarStyle.css"

const Language = () => {
    const [shownMenu, setShownMenu] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('EN');
    const [theme, setTheme] = useState('');

    const toggleMenu = () => {
        setShownMenu(!shownMenu);
    };

    const languageMenu = [
        {
            value: 'EN',
            language: 'English',
        },

        {
            value: 'BA',
            language: 'Bahasa Indonesia',
        },

        {
            value: 'CN',
            language: '中文',
        },

        {
            value: 'VN',
            language: 'Tiếng Việt',
        },


        {
            value: 'IT',
            language: 'Italiano',
        },

        {
            value: 'RU',
            language: 'русский',
        },

        {
            value: 'TU',
            language: 'Türkiye',
        },

        {
            value: 'PO',
            language: 'Português',
        },
        
        {
            value: 'ES',
            language: 'Español',
        },
        
        {
            value: 'JP',
            language: '日本語',
        },
        
        {
            value: 'FR',
            language: 'Français',
        },

        {
            value: 'DE',
            language: 'Deutsch',
        },

        {
            value: 'PH',
            language: 'Filipino',
        },

        {
            value: 'GE',
            language: 'ქართული ენა',
        },

        {
            value: 'IND',
            language: ' हिन्दी',
        },

        {
            value: 'GR',
            language: ' Ελληνικά',
        },
    ];

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language.value);
        setShownMenu(false);
    };

    const updateTheme = () => {
        const targetDiv = document.getElementById('main-nav-section');
    
        if (targetDiv) {
          setTheme(targetDiv.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme');
        }
      };

      useEffect(() => {
        updateTheme();
    
        document.addEventListener('click', updateTheme);
    
        return () => {
          document.removeEventListener('click', updateTheme);
        };
      }, []);
    


    return (
        <div className={`language-menu theme-change ${theme}`} onClick={toggleMenu}>
        <div className="language-selector" >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon-language" id="icon-language" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#7a6bab" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ width: '25px', height: '25px'}}>
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M3.6 9h16.8" />
                <path d="M3.6 15h16.8" />
                <path d="M11.5 3a17 17 0 0 0 0 18" />
                <path d="M12.5 3a17 17 0 0 1 0 18" />
            </svg>
        </div>
        {shownMenu && (
            <div className={`language-options2 theme-change ${theme}`}>
                {languageMenu.map((language, index) => (
                    <div key={index} onClick={() => handleLanguageSelect(language)} className='option-lang'>
                        {language.language}
                    </div>
                ))}
            </div>
        )}
    </div>
);

};

export default Language;


