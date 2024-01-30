import React, { useEffect, useState, useRef } from 'react';
import GamePred  from './EcosystemAssets/game-prediction.png'
import GamePredPurple from './EcosystemAssets/game-prediction-purple.png'
import PancakeProtectorsPurple from './EcosystemAssets/game-pancake-protectors-purple.png'
import PancakeProtectors from './EcosystemAssets/game-pancake-protectors.png'
import Lottery from './EcosystemAssets/game-lottery.png'
import LotteryPurple from './EcosystemAssets/game-lottery-purple.png'
import Pottery from './EcosystemAssets/game-pottery.png'
import PotteryPurple from './EcosystemAssets/game-pottery-purple.png'
import Crypto from './EcosystemAssets/nft-marketplace.png'
import MarketplacePurple from './EcosystemAssets/nft-marketplace-purple.png'
import Marketplace from './EcosystemAssets/nft-marketplace.png'
import BigGamesImg from './EcosystemAssets/game-nft-big-img.png'

const GamesCard = () => {
    const GamesData = [
        {
          gameURL: "https://pancakeswap.finance/prediction",
          gamesNFTimageSrc: GamePredPurple,
          gamesNFTHoveredImage: GamePred,
          gamesNFTTitle: "Prediction",
          gamesNFTDescription: "Forecast token prices within minutes",
          gamesNFTLink: "Try Now >",
        },
      
        {
          gameURL: "https://protectors.pancakeswap.finance/",
          gamesNFTimageSrc: PancakeProtectorsPurple,
          gamesNFTHoveredImage: PancakeProtectors,
          gamesNFTTitle: "Pancake Protectors",
          gamesNFTDescription: "Immersive PvP & PvE tower-defense GameFi",
          gamesNFTLink: "Play Now >",
        },
      
        {
          gameURL: "https://pancakeswap.finance/lottery",
          gamesNFTimageSrc: LotteryPurple,
          gamesNFTHoveredImage: Lottery,
          gamesNFTTitle: "Lottery",
          gamesNFTDescription: "Enter for a chance to win CAKE prize pools",
          gamesNFTLink: "Try Now >",
        },
      
        {
          gameURL: "https://pancakeswap.finance/pottery",
          gamesNFTimageSrc: PotteryPurple,
          gamesNFTHoveredImage: Pottery,
          gamesNFTTitle: "Pottery",
          gamesNFTDescription: "Stake CAKE, acquire pottery tickets, win prizes",
          gamesNFTLink: "Try Now >",
        },
      
        {
          gameURL: "https://pancakeswap.finance/nfts",
          gamesNFTimageSrc: MarketplacePurple,
          gamesNFTHoveredImage: Marketplace,
          gamesNFTTitle: "NFT Marketplace",
          gamesNFTDescription: "Trade unique NFTs on BNB Chain",
          gamesNFTLink: "Trade Now >",
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
        <img src={BigGamesImg} alt="" className="ecosystem-big-img" id="gamenft-img" />
        <div className="gamenft-card-container-all theme-change light-theme">
          <h3>Games & NFT</h3>
          <div className="gamenft-cards-container theme-change light-theme">
            {GamesData.map((data, index) => (
              <a key={index} href={data.gameURL} className="gamenft" 
              onMouseOver={(e) => handleMouseOver(e, data.gamesNFTHoveredImage)}
              onMouseOut={(e) => handleMouseOut(e, data.gamesNFTimageSrc)}
              >
                <div className="gamenft-card">
                  <div className="gamenft-img">
                    {isSmallScreen ? (
                      <img src={data.gamesNFTHoveredImage} data-hover-image={data.gamesNFTHoveredImage} alt="Trade" />
                    ) : (
                      <img src={data.gamesNFTimageSrc} data-hover-image={data.gamesNFTImage} alt="Trade" />
                    )}
                  </div>
                  <h4>{data.gamesNFTTitle}</h4>
                  <p className="ecosystem-description">{data.gamesNFTDescription}</p>
                  <p className="ecosystem-link theme-change light-theme">{data.gamesNFTLink}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesCard;
