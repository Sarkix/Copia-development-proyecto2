import React from 'react';
import '../buycake/BuyCakeStyle.css';
import '../sharedComponents/sharedStyles/style.css';

const StandardButton = ({ href, text }) => {
  return (
    <div className='general-button theme-change light-theme'>
        <a href={href}>
            <p>{text}</p>
        </a>
    </div>
  );
};

export default StandardButton;