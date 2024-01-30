import React, { useState } from 'react';
import userImage from "./CommunityAssets/community-user-img.png"

const CarouselCard1 = () => {
    return (
       <div id="community-tweet">
            <div className="community-card-slide" id="community-card-slide1">
                <h5>Top Tweet of the week</h5>
                <img src={userImage} alt="" id="community-user-img" />
                    <div id="community-tweet-user">
                        <p>PancakeSwap🥞Ev3ryone's Favourite D3X</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-discount-check-filled" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" strokeWidth="0" fill="currentColor" />
                        </svg>
                    </div>

                    <div id="community-tweet-icons">
                    <p>@PancakeSwap</p>
                    <hr />
                    <p>Sep 22</p>
                    <hr />
                    <div id="community-tweet-likes">
                        <svg xmlns="http://www.w3.org/2000/svg" id="community-tweet-icon" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#b8add2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                        </svg>
                        <p>249</p>
                    </div>
                    <hr />                                    
                    <div id="community-tweet-charts">
                        <svg xmlns="http://www.w3.org/2000/svg" className="community-tweet-icon" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#b8add2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                            <path d="M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                            <path d="M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                            <path d="M4 20l14 0" />
                        </svg>
                        <p>19.7k</p>
                    </div>
                </div>
                <p id='tweet-content'>🎂 3 years ago, we planted the seed on the BNB Chain, and today, it has grown into Everyone's Favorite DEX ...</p>
                <p>
                    <a href="https://docs.pancakeswap.finance/get-started/wallet-guide" id="community-tweet-link">Web Link
                        <svg xmlns="http://www.w3.org/2000/svg" id="fb-icon-link" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#1fc7d4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                            <path d="M11 13l9 -9" />
                            <path d="M15 4h5v5" />
                        </svg>
                    </a>
                </p>
                                    
            </div>  
       </div>
                        
            
    );
}

export default CarouselCard1;
