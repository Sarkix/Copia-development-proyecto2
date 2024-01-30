import "../ad.carrousel.css";
import BaseBunny6 from "../../../../../assets/Ad-caroussel/card6/trading-reward-bunny.webp";
import LVB from "../../../../../assets/Ad-caroussel/card6/love-butterbg.webp";
import BaseBunnyBG6 from "../../../../../assets/Ad-caroussel/card6/butterbg.webp";

const AdCard5 = () => {
  return (
    <div className="carousel-item" id="carousel-item6">
      <div className="card6AC" id="card6">
        <div className="ad6text-container">
          <div className="subtitleAC6">
            <h4>Trade to earn rewards</h4>
          </div>
          <div className="titleAC6">
            <h3>10% Trading rebates <span className="respo-text">to be earned</span></h3>
          </div>
          <div className="CTA6">
            <button className="btn-main-blue theme-change light-theme" id="">
              Trade Now
            </button>
            <button className="btn-main-white" id="LMCTA6">
              Learn more
            </button>
          </div>
        </div>
        <div className="caroussel-img">
          <img src={BaseBunny6} id="base-bunny6" />
          <img src={BaseBunnyBG6} id="bunny-bg6" />
          <img src={LVB} id="bunny-bg6-2" />
          <img src={BaseBunnyBG6} id="bunny-bg6-3" />
        </div>
      </div>
    </div>
  );
};

export default AdCard5;
