import "../ad.carrousel.css";
import React from "react";
import BunnyLogo from "../../../../../assets/Ad-caroussel/bunnylogo.png";
import BaseBunny2 from "../../../../../assets/Ad-caroussel/card2/opbnb-bunny.webp";
import BNBLogo from "../../../../../assets/bnb.png";

const AdCard2 = () => {
  return (
    <>
    <div className="carousel-item active" id="carousel-item2">
      <div className="card2AC" id="card2">
        <div className="text-container">
          <div className="logoCont">
            <img src={BunnyLogo} alt="PancakeSwap" id="bunny-logo2" />
            |
            <img src={BNBLogo} alt="PancakeSwap" id="bnb-logo2" />
          </div>
          <div className="titleAC2">
            <h3>PancakeSwap Now Live on opBNB!</h3>
          </div>
          <div className="subtitleAC2">
            <h4>Swap and provide liquidity now</h4>
          </div>
          <div className="CTA2">
            <button className="btn-sec" id="main">
              Get Started
            </button>
          </div>
        </div>
        <div className="caroussel-img">
          <img src={BaseBunny2} id="base-bunny2" />
        </div>
      </div>
    </div>
    </>
  );
};

export default AdCard2;
