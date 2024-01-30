import React from "react";
import "../../../shared/sharedComponents/sharedStyles/style.css";
import "../MainBanner/MainBannerStyle.css";
import IMG1 from "../../../../assets/main-banner-img.png"


const MainBannerIMG = () => {
  return (
    <>
        <div className="mbimg">
          <img src={IMG1} id="main-banner-img" />
        </div>
    </>
  );
};

export default MainBannerIMG;
