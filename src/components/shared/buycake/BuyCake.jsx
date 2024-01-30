import React from 'react';
import BuyCakeSubtitle from './BuyCakeSubtitle.jsx';
import '../buycake/BuyCakeStyle.css';
import '../sharedComponents/sharedStyles/style.css';
import BuyCakeTitle from './BuyCakeTitle.jsx';
import BuyCakeBTNs from './BuyCakeBTNs.jsx';

const BuyCakeComponent = () => {
  return (
    <section className="buy-cake theme-change light-theme">
      <BuyCakeTitle text="Unlock the Full Potential of DeFi with"/>
        <BuyCakeSubtitle text='Experience the power of community ownership, global governance, and
      explore infinite use cases within the PancakeSwap ecosystem'/>
     <BuyCakeBTNs/>
    </section>
  );
};

export default BuyCakeComponent;
