import React, { useState } from 'react'
import './FooterStyle.css'


const DropdownFooter = ({ children }) => {
    const [shownMenu, setShownMenu] = useState(false);

    const toggleMenu = () => {
        setShownMenu(!shownMenu);
    };

    const footerMenu = [
        {
            href: 'https://t.me/pancakeswap',
            language: 'English',
        },

        {
            href: 'https://t.me/pancakeswapIndonesia',
            language: 'Bahasa Indonesia',
        },

        {
            href: 'https://t.me/pancakeswap_CN',
            language: '中文',
        },

        {
            href: 'https://t.me/PancakeSwapVN',
            language: 'Tiếng Việt',
        },


        {
            href: 'https://t.me/pancakeswap_Ita',
            language: 'Italiano',
        },

        {
            href: 'https://t.me/pancakeswap_ru',
            language: 'русский',
        },

        {
            href: 'https://t.me/pancakeswapturkiye',
            language: 'Türkiye',
        },

        {
            href: 'https://t.me/pancakeswapPortuguese',
            language: 'Português',
        },
        
        {
            href: 'https://t.me/pancakeswapES',
            language: 'Español',
        },
        
        {
            href: 'https://t.me/pancakeswapJP',
            language: '日本語',
        },
        
        {
            href: 'https://t.me/pancakeswapFR',
            language: 'Français',
        },

        {
            href: 'https://t.me/pancakeswap_DE',
            language: 'Deutsch',
        },

        {
            href: 'https://t.me/pancakeswap_PH',
            language: 'Filipino',
        },

        {
            href: 'https://t.me/pancakeswapGeorgia',
            language: 'ქართული ენა',
        },

        {
            href: 'https://t.me/pancakeswap_INDIA',
            language: ' हिन्दी',
        },

        {
            href: 'https://t.me/PancakeSwapAnn',
            language: ' Announcements',
        },
    ];

    return (
        <div className='footer-menu'>
            <div onMouseOver={toggleMenu} onMouseOut={toggleMenu} className='footer-hidden-menu'>
                {children}
            </div>
            {shownMenu && (
                <div className='footer-dropdown-content'>
                    <ul>
                        {footerMenu.map((menu, index) => (
                            <li key={index}>
                                <a href={menu.href}>{menu.language}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownFooter;
