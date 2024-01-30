import "../ad.carrousel.css";
import BaseBunny3 from "../../../../../assets/Ad-caroussel/card3/liquidStakingBunnyimg.png";
import BaseBunny3Alt from "../../../../../assets/Ad-caroussel/card3/alt-bunny.png";
import BaseBunny3BG from "../../../../../assets/Ad-caroussel/card3/liquidStakingBunnyBg1.png";
import BaseBunny3BG2 from "../../../../../assets/Ad-caroussel/card3/liquidStakingBunnyBg2.png";

const AdCard3 = () => {
  return (
    <div className="carousel-item" id="carousel-item3">
      <div className="card3AC" id="card3">
        <div className="ad3text-container">
          <div className="logoCont">
            <img
              src="/src/assets/Ad-caroussel/bunnylogo.png?t=1704290924897"
              alt="PancakeSwap"
              id="bunny-logo3"
            />
          </div>
          <div className="titleAC3">
            <h3>Liquid Staking Integration for WBETH</h3>
          </div>
          <div className="subtitleAC3">
            <h4>ETH to WBETH conversion and earn ETH staking rewards</h4>
          </div>
          <div className="CTA3">
            <button className="btn-sec" id="">
              Get Started
            </button>
          </div>
        </div>
        <div className="caroussel-img">
          <img src={BaseBunny3} id="base-bunny3" />
          <img src={BaseBunny3Alt} id="base-bunny3-alt" />
          <img src={BaseBunny3BG} id="bunny-bg3" />
          <img src={BaseBunny3BG2} id="bunny-bg3-2" />
        </div>
      </div>
    </div>
  );
};

export default AdCard3;
