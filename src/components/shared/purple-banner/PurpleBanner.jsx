import React, { useState } from 'react';
import './PurpleBanner.css';

const PurpleBanner = () => {
    const [isClosed, setIsClosed] = useState(false);

    const closeBanner = () => {
        setIsClosed(!isClosed);
    };

return (
    <div>
      {isClosed ? null : (
        <div className="purpleBanner">
          <div className="purpleFirst">
            <img
              src="https://pancakeswap.finance/images/decorations/phishing-warning-bunny.webp"
              id="purple-banner-img"
            />
            <p>
              <span>PHISHING WARNING:</span> please make sure you're visiting{" "}
              <span> https://pancakeswap.finance </span> - check the URL
              carefully.{" "}
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={closeBanner}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default PurpleBanner;
