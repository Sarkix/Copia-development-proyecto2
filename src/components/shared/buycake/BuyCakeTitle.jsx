import React from 'react';
import ColorChange from '../sharedComponents/ColorChange';
import '../buycake/BuyCakeStyle.css';
import '../sharedComponents/sharedStyles/style.css';

const BuyCakeTitle = ({text})=> {
return (
    <div className="buy-title">
    <h1>
      {text}
    <ColorChange text=" Cake"/>
    </h1>
  </div>
)}

export default BuyCakeTitle