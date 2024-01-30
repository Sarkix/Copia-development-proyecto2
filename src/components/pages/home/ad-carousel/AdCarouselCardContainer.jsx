import React from "react";
import "./ad.carrousel.css";
import AdCarouselInnerCards from "./AdCarouselInner.jsx";
import AdCarouselIndicators from "./AdCarouselIndicators.jsx";

const AdCarouselCardContainer = () => {
  return (
    <div className="caroussel-card">
      <div className="carousel slide" id="carouselExampleIndicators">
        <AdCarouselIndicators />
        <AdCarouselInnerCards />
      </div>
    </div>
  );
};

export default AdCarouselCardContainer;
