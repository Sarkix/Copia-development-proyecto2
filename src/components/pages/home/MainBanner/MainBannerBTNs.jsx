import React, { useState, useRef, useEffect } from "react";
import "../../../shared/sharedComponents/sharedStyles/style.css";
import "../MainBanner/MainBannerStyle.css";
import ConnectWalletBTN from "../../../shared/sharedComponents/ConnectWalletBTN";
import HiddenFooterBanner from "../../home/footerbanner/HiddenFooterBanner.jsx";
import "../../../shared/sharedComponents/sharedStyles/style.css";
import "../../../pages/home/MainBanner/MainBannerStyle.css";

const MainBannerBTNs = () => {
  const [isHidden, setIsHidden] = useState(true);
  const containerRef = useRef(null);
  const overlayRef = useRef(null);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  const handleOverlayClick = () => {
    setIsHidden(true); // Hides HiddenFooterBanner when overlay is clicked
  };

  const handleOutsideClick = (event) => {
    if (
      containerRef.current &&
      overlayRef.current &&
      !containerRef.current.contains(event.target) &&
      event.target === overlayRef.current
    ) {
      handleOverlayClick();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isHidden]);

  return (
    <>
      <div className="BannerBTN">
        <button
          className="btn-main-blue btn-expanded theme-change light-theme"
          id="connectw2"
          onClick={toggleHidden}
        >
          Connect Wallet
        </button>

        <button
        className="btn-sec-mb btn-expanded-mb theme-change light-theme"
        id=""
      >
        <a href="https://pancakeswap.finance/swap">Trade Now</a>
      </button>
        <div
          className="footerbanner-hidden-section"
          id="footer-banner-hidden-section2"
        >
          <div
            className="theme-change light-theme"
            style={{ display: isHidden ? "none" : "block" }}
          >
            <HiddenFooterBanner
              svgId="svg2"
              tab1="tab1-2"
              tab2="tab2-2"
              w3container="w3container2"
              content2="content2-2"
              style={{
                justifyContent: "center",
              }}
            />
            <div
              className="overlay"
              ref={overlayRef}
              onClick={handleOverlayClick}
            ></div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default MainBannerBTNs;