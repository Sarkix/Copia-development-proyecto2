import React, { useState, useEffect } from 'react';
import CarouselCard1 from './CarouselCard1';
import CarouselCard2 from './CarouselCard2';

const Carousel = () => {
  const [slideCommunityIndex, setSlideCommunityIndex] = useState(1);

  const showCommunityCard = (index) => {
    setSlideCommunityIndex(index);
  };

  const communityAutoShow = () => {
    const totalSlides = 2;

    let newIndex = slideCommunityIndex + 1;
    if (newIndex > totalSlides) {
      newIndex = 1;
    }

    setSlideCommunityIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(communityAutoShow, 6000);

    return () => clearInterval(interval);
  });

  return (
    <div className="community-card theme-change light-theme" id="community-card2">
      <div id="community-slider-container">
        <div className="slideshow-container">
          <div className={`community-card-slide ${slideCommunityIndex === 1 ? 'active' : ''}`}>
            {slideCommunityIndex === 1 && <CarouselCard1 />}
          </div>
          <div className={`community-card-slide ${slideCommunityIndex === 2 ? 'active' : ''}`}>
            {slideCommunityIndex === 2 && <CarouselCard2 />}
          </div>
          <div className="community-slideshow-buttons">
            <button
              id="community-slide-button1"
              className={slideCommunityIndex === 1 ? 'active' : ''}
              onClick={() => showCommunityCard(1)}
            ></button>
            <button
              id="community-slide-button2"
              className={slideCommunityIndex === 2 ? 'active' : ''}
              onClick={() => showCommunityCard(2)}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
