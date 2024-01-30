import React from 'react'
import FooterList from './FooterList'
import './FooterStyle.css'
import FooterIconList from './FooterIconsList'
import SecondaryFooter from './SecondaryFooter.jsx'


const SectionFooter = () => {
    return (
        <div className='main-footer'>
            <div className='footer-container'>
                <div>
                    <FooterList className='footer-links-container' />
                    <FooterIconList />
                    <hr /> 
                </div>
                    <SecondaryFooter />
            </div>        
        </div>  
    
    )
}


export default SectionFooter;

