import React, { useState, useEffect, useRef } from 'react';
import Swap from './EcosystemAssets/trade-swap.png'
import SwapPurple from './EcosystemAssets/trade-swap-purple.png'
import Liquidity from './EcosystemAssets/trade-liquidity.png'
import LiquidityPurple from './EcosystemAssets/trade-liquidity-purple.png'
import Bridge from './EcosystemAssets/trade-bridge.png'
import BridgePurple from './EcosystemAssets/trade-bridge-purple.png'
import Perpetual from './EcosystemAssets/trade-perpetual.png'
import PerpetualPurple from './EcosystemAssets/trade-perpetual-purple.png'
import Crypto from './EcosystemAssets/trade-buy-crypto.png'
import CryptoPurple from './EcosystemAssets/trade-buy-crypto-purple.png'
import BigTradeImg from './EcosystemAssets/trade-big-img.png'

const TradeCard = () => {
  const tradeCardData = [
    {
        tradeURL: "https://pancakeswap.finance/swap",
        tradeimageSrc: SwapPurple,
        tradeHoveredImage: Swap,
        tradeTitle: "Swap",
        tradeDescription: "Trade crypto instantly across multiple chains",
        tradeLink: "Trade Now >",
      },
    
      {
        tradeURL: "https://pancakeswap.finance/liquidity",
        tradeimageSrc: LiquidityPurple,
        tradeHoveredImage: Liquidity,
        tradeTitle: "Liquidity",
        tradeDescription: "Fund liquidity pools, earn trading fees",
        tradeLink: "Add Now >",
      },
    
      {
        tradeURL: "https://bridge.pancakeswap.finance/",
        tradeimageSrc: BridgePurple,
        tradeHoveredImage: Bridge,
        tradeTitle: "Bridge",
        tradeDescription: "Seamlessly transfer assets across chains",
        tradeLink: "Bridge Now >",
      },
    
      {
        tradeURL: "https://pancakeswap.finance/buy-crypto",
        tradeimageSrc: PerpetualPurple,
        tradeHoveredImage: Perpetual,
        tradeTitle: "Perpetual",
        tradeDescription: "Trade endlessly without expiration dates",
        tradeLink: "Trade Now >",
      },
    
      {
        tradeURL: "https://pancakeswap.finance/buy-crypto",
        tradeimageSrc: CryptoPurple,
        tradeHoveredImage: Crypto,
        tradeTitle: "Buy Crypto",
        tradeDescription:
          "Buy crypto with your preferred currency and payment method",
        tradeLink: "Buy Now >",
      },
  ];

  const [linkColor, setLinkColor] = useState('initial');
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 900); 
    const normalImageRef = useRef(null); 
  
    const handleMouseOver = (event, hoverImage, theme) => {
      event.currentTarget.querySelector('img').src = hoverImage;
      setLinkColor(theme === 'light-theme' ? '#000' : '#fff');
    };
  
    const handleMouseOut = (event, hoverImage) => {
      if (!isSmallScreen) {
        event.currentTarget.querySelector('img').src = hoverImage;
      }
      setLinkColor('initial');
    };
  
    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 900);
        if (normalImageRef.current && isSmallScreen) {
          normalImageRef.current.src = normalImageRef.current.dataset.hoverImage;
        }
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [isSmallScreen]);

  return (
    <div className="ecosystem-container">
      <div className="ecosystem-card-container theme-change light-theme">
        <img src={BigTradeImg} alt="" className="ecosystem-big-img" id="trade-img" />
        <div className="trade-card-container-all theme-change light-theme">
          <h3>Trade</h3>
          <div className="trade-cards-container theme-change light-theme">
            {tradeCardData.map((data, index) => (
              <a key={index} href={data.tradeURL} className="trade"
                onMouseOver={(e) => handleMouseOver(e, data.tradeHoveredImage, 'light-theme')}
                onMouseOut={(e) => handleMouseOut(e, data.tradeimageSrc)}
              >
                <div className="trade-card">
                  <div className="trade-img">
                    <img src={isSmallScreen ? data.tradeHoveredImage : data.tradeimageSrc} data-hover-image={data.tradeHoveredImage} alt="Trade" ref={isSmallScreen ? normalImageRef : null} />
                  </div>
                  <h4>{data.tradeTitle}</h4>
                  <p className="ecosystem-description">{data.tradeDescription}</p>
                  <p className="ecosystem-link theme-change light-theme">{data.tradeLink}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeCard;
