import "./App.css";
import SectionFooterBanner from "./components/pages/home/footerbanner/SectionFooterBanner";
import SectionCommunity from "./components/pages/home/community/SectionCommunity.jsx";
import ArrowButton from "./components/shared/arrow-button/ArrowButton.jsx";
import BuyCakeComponent from "./components/shared/buycake/BuyCake.jsx";
import SectionFooter from "./components/shared/footer/SectionFooter.jsx";
import ExchangeStatsOne from "./components/pages/home/Exchange-stats-1/ExchangeStatsOne.jsx";
import PartnersAnimation from "./components/pages/home/partners-animation/PartnersAnimation.jsx";
import MainBannerComponent from "./components/pages/home/MainBanner/MainBanner";
import SectionEcosystem from "./components/pages/home/ecosystem/SectionEcosystem.jsx";
import SectionExchangeStats from "./components/pages/home/exchangestats/SectionExchangeStats.jsx";
import News from "./components/pages/home/News/News.jsx";
import BottomNav from "./components/shared/bottom-nav/BottomNav.jsx";
import PurpleBanner from "./components/shared/purple-banner/PurpleBanner.jsx"
import MainNav from "./components/shared/main-nav/MainNav";
import AdCarouselComponent from "./components/pages/home/ad-carousel/AdCarouselComponent.jsx"
import "../src/components/shared/sharedComponents/sharedStyles/style.css"


function App() {
  return (
    <div>
      <div className="stickySection">
          <PurpleBanner/>
          <MainNav />
      </div>
      <BottomNav />
      <ArrowButton />
      <AdCarouselComponent />
      <MainBannerComponent />
      <ExchangeStatsOne />
      <SectionEcosystem />
      <BuyCakeComponent />
      <PartnersAnimation />
      <SectionExchangeStats />
      <SectionCommunity />
      <News />
      <SectionFooterBanner />
      <SectionFooter />
    </div>
  );
}

export default App;
