import React from "react";
import "../../../shared/sharedComponents/sharedStyles/style.css";
import "../MainBanner/MainBannerStyle.css";
import MainBannerTitle from "./MainBannerTitle";
import MainBannerBTNs from "./MainBannerBTNs";

const MainBannerText = () => {
  return (
    <>
      <div className="text-container">
        <MainBannerTitle />
        <MainBannerBTNs />
      </div>
    </>
  );
};

export default MainBannerText;
