import React from "react";
import "./ad.carrousel.css";
import AdCard1 from "./AdCarouselCards/AdCard1.jsx";
import AdCard2 from "./AdCarouselCards/AdCard2.jsx";
import AdCard3 from "./AdCarouselCards/AdCard3.jsx";
import AdCard4 from "./AdCarouselCards/AdCard4.jsx";
import AdCard5 from "./AdCarouselCards/AdCard5.jsx";

const AdCarouselInnerCards = () => {
  return (
    <div className="carousel-inner">
       {/* <AdCard2 /> */}
      <AdCard1 /> 
       <AdCard3 />
      <AdCard4 />
      <AdCard5 /> 
    </div>
  );
};

export default AdCarouselInnerCards;
