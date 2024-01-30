import "../ad.carrousel.css";
import BaseBunny1 from "../../../../../assets/Ad-caroussel/blue-card-1/base-bunny.webp"
import BaseBunnyBG1 from "../../../../../assets/Ad-caroussel/blue-card-1/bunnybgblue2.webp"
import BaseBunnyCloud from "../../../../../assets/Ad-caroussel/blue-card-1/cloudbunny1.webp"
import BaseBunnyBG2 from "../../../../../assets/Ad-caroussel/blue-card-1/bunny1bg2.webp"
import BaseBunnyBGAlt from "../../../../../assets/Ad-caroussel/blue-card-1/altbgbunny1.webp"
import BunnyLogo from "../../../../../assets/Ad-caroussel/bunnylogo.png"

const AdCard1 = () => {
  return (
    <div className="carousel-item active" id="carousel-item1">
      <div className="cardAC" id="card1">
        <div className="ad1text-container">
          <div className="logoCont">
            <img
              src={BunnyLogo}
              alt="PancakeSwap"
              id="bunny-logo"
            />
            |
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 60 16"
              fill="none"
              width="60"
              height="18"
              color="text"
              className="sc-bcPKhP cvmRst"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.8379 7.91893C15.8379 12.2924 12.2862 15.8379 7.90511 15.8379C3.74856 15.8379 0.338654 12.6466 0 8.58458H10.4853V7.25327H0C0.338654 3.19126 3.74856 0 7.90511 0C12.2862 0 15.8379 3.54542 15.8379 7.91893ZM45.2475 14.4031C47.9962 14.4031 49.799 12.9217 49.799 10.6906C49.799 8.62009 48.4424 7.6384 46.3899 7.29927L44.5692 6.99583C43.1771 6.7638 42.2488 6.15692 42.2488 4.81825C42.2488 3.46173 43.2842 2.42649 45.2475 2.42649C47.1573 2.42649 48.139 3.39033 48.2461 4.7647H49.6205C49.5134 2.94411 48.1211 1.31985 45.2653 1.31985C42.4452 1.31985 40.8924 2.9084 40.8924 4.8718C40.8924 6.96013 42.3024 7.92398 44.2301 8.24526L46.0686 8.53085C47.6035 8.79858 48.4602 9.42329 48.4602 10.7441C48.4602 12.297 47.193 13.2965 45.2653 13.2965C43.2663 13.2965 42.0168 12.3327 41.9097 10.6906H40.5533C40.6604 12.8325 42.3024 14.4031 45.2475 14.4031ZM24.9836 14.1533H19.9858V1.58759H24.8051C26.9291 1.58759 28.4105 2.83701 28.4105 4.83611C28.4105 6.28187 27.5895 7.24571 26.2688 7.56699V7.62055C27.8394 7.92398 28.8032 8.99492 28.8032 10.6727C28.8032 12.8325 27.2147 14.1533 24.9836 14.1533ZM24.6266 7.10293C26.1438 7.10293 27.0719 6.28187 27.0719 4.99674V4.81825C27.0719 3.53313 26.1438 2.72992 24.6266 2.72992H21.3246V7.10293H24.6266ZM24.7872 13.0109C26.4472 13.0109 27.4646 12.1006 27.4646 10.7084V10.5299C27.4646 9.08416 26.4294 8.20957 24.7694 8.20957H21.3246V13.0109H24.7872ZM39.6135 14.1533H38.1855L37.1146 10.7441H32.1169L31.046 14.1533H29.6894L33.8126 1.58759H35.4368L39.6135 14.1533ZM34.6871 2.96196H34.5801L32.4738 9.61964H36.7755L34.6871 2.96196ZM51.8096 14.1533V1.58759H59.8774V2.74777H53.1484V7.06723H59.342V8.20957H53.1484V12.9931H59.8774V14.1533H51.8096Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <div className="titleAC">
            <h3>PancakeSwap Now Live on Base!</h3>
          </div>
          <div className="subtitleAC">
            <h4>Swap and provide liquidity now</h4>
          </div>
          <div className="CTA">
            <button className="btn-sec" id="">
              Get Started
            </button>
          </div>
        </div>
        <div className="caroussel-img">
          <img
            src={BaseBunny1}
            id="base-bunny1"
          />
          <img
            src={BaseBunnyBG1}
            id="bunny-bg1"
          />
          <img
            src={BaseBunnyCloud}
            id="bunny-cloud1"
          />
          <img
            src={BaseBunnyBG2}
            id="bunny-bg1-2"
          />
          <img
            src={BaseBunnyBGAlt}
            id="bunny-altbg1"
          />
        </div>
      </div>
    </div>
  );
};

export default AdCard1;
