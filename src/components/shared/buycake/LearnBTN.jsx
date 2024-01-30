import React from 'react';
import '../buycake/BuyCakeStyle.css';
import '../sharedComponents/sharedStyles/style.css';

const LearnBTN = ({ href, text }) => {
  return (
    <button className='btn-sec'>
        <a href={href}>
            {text} <i className="fa-solid fa-share-from-square"></i>
        </a>
    </button>
  );
};

export default LearnBTN;