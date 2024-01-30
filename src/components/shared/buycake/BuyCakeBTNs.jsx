import React from 'react';
import LearnBTN from './LearnBTN';
import StandardButton from '../sharedComponents/StandarButton';
import '../sharedComponents/sharedStyles/style.css';
import './BuyCakeStyle.css'

const BuyCakeBTNs = () => {
  return (
    <div className="btn-container">
    <StandardButton href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56" text="Buy CAKE →" />
    <LearnBTN href="https://docs.pancakeswap.finance/governance-and-tokenomics/cake-tokenomics" text="Learn"/>
    </div>
  );
};

export default BuyCakeBTNs;