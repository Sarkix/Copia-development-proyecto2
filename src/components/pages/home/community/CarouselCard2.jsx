import React from 'react';
import CardImage2 from "./CommunityAssets/community-card-img.png"

const CarouselCard2 = ({ currentSlide }) => {
    return (
        <div className={`community-card-slide ${currentSlide === 1 ? '' : 'hidden'}`} id="community-card-slide2">
            <h5>Latest Blog Post</h5>
            <img src={CardImage2} alt="" id="community-card-img"/>
            <p id="community-date">2023-11-13</p>
            <p>PancakeMasters Weirdest Inerview Series: str1ke, the bot-blaster Ambassador</p>
        </div>
    );
};

export default CarouselCard2;
