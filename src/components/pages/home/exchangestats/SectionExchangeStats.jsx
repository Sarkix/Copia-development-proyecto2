import React from "react";
import ExchangeStats from "./ExchangeStats";
import "./SectionExchangeStats.css";

export default function SectionExchangeStats() {
    return (
        <div className="exchange-stats2 light-theme theme-change">
            <div className="exchange-stats2-title light-theme theme-change">
                <h2 className="exchange-cake theme-change light-theme">
                    CAKE{" "}
                    <span
                        id="exchange-figures"
                        className="exchange-figures light-theme theme-change"
                    >
                        Figures
                    </span>
                </h2>
            </div>
            <div className="exchange-container light-theme theme-change">
                <ExchangeStats />
            </div>
            <div id="bottom-wedge4-2" className="sc-bgCTdi eLkFjc bg-com inner-wedge theme-change light-theme">
        <svg
          viewBox="0 0 1660 48"
          preserveAspectRatio="none"
          color="text"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
          className="sc-grXZZQ ktVOoD theme-change light-theme"
        >
          <path d="M0 0C520.985 1.81132 1323.74 32.7547 1660 48H0V0Z"></path>
        </svg>
      </div>
        </div>
    );
}
