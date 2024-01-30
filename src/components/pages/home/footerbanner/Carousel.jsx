import React, { useState, useEffect } from 'react';
import FooterBannerCard1 from './FooterBannerCard1.jsx'
import FooterBannerCard2 from './FooterBannerCard2.jsx'

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const showCard = (index) => {
    setSlideIndex(index);
  };

  const cardAutoShow = () => {
    const totalSlides = 2;

    let newIndex = slideIndex + 1;
    if (newIndex > totalSlides) {
      newIndex = 1;
    }

    setSlideIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(cardAutoShow, 6000);

    return () => clearInterval(interval);
  });

  return (
    <div className="footer-tab-content theme-change light-theme" id="footer-tab-content2">
      <div className="w3-content">
        <div className="slideshow-container theme-change light-theme">
          <div className={`cw-card-slide ${slideIndex === 1 ? 'active' : ''}`}>
            {slideIndex === 1 && <FooterBannerCard1/>}
          </div>
          <div className={`cw-card-slide ${slideIndex === 2 ? 'active' : ''}`}>
            {slideIndex === 2 && <FooterBannerCard2/> }
          </div>
          <div className="footer-slideshow-buttons theme-change light-theme">
            <button
              id="w3-slide-button1"
              className={ "footer-slideshow-button1 theme-change light-theme " + (slideIndex === 1 ? 'active' : '') }
              onClick={() => showCard(1)}
            ></button>
            <button
              id="w3-slide-button2"
              className={ "footer-slideshow-button2 " + (slideIndex === 2 ? 'active' : '') }

              onClick={() => showCard(2)}
            ></button>
          </div>

            <div className="fb-button theme-change light-theme" id="fb-w3-button"> 
              <p>
                <a href="https://docs.pancakeswap.finance/get-started/wallet-guide">Learn How to Connect
                  <svg xmlns="http://www.w3.org/2000/svg" id="fb-icon-link" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                    <path d="M11 13l9 -9" />
                    <path d="M15 4h5v5" />
                  </svg>
                </a>
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;