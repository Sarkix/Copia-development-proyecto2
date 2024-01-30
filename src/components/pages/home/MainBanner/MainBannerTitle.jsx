import React from "react";
import "../../../shared/sharedComponents/sharedStyles/style.css";
import "../MainBanner/MainBannerStyle.css";
import ColorChange from "../../../shared/sharedComponents/ColorChange";

const MainBannerTitle = () => {
  return (
    <>
      <h2 className="titleMB theme-change dark-theme">
        Everyone's <ColorChange text="Favourite" /> DEX
      </h2>
      <h4>Trade, earn, and own crypto on the all-in-one multichain DEX</h4>
    </>
  );
};

export default MainBannerTitle;
