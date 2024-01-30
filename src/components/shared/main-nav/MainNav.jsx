import React from 'react'
import './MainNavbarStyle.css'
import PancakeLogo from '../sharedComponents/PancakeLogo'
import MenuList from './MenuList'
import MenuIconList from './MenuIconList'


const MainNav = () => {
    return (
        <section className='main-navbar light-theme theme-change' id='main-nav-section'>
            <div className='logoMenuList'>
            <PancakeLogo/>
            <MenuList/>
            </div>
            <MenuIconList />
        </section>  
    
    )
}


export default MainNav;
