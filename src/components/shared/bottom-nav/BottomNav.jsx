import React, { useState, useRef, useEffect } from "react";
import "./bottom-nav.css";

const BottomNav = () => {
  const [menuVisibleTwo, setMenuVisibleTwo] = useState(false);
  const [menuVisibleThree, setMenuVisibleThree] = useState(false);
  const [menuVisibleFour, setMenuVisibleFour] = useState(false);
  const [menuVisibleFive, setMenuVisibleFive] = useState(false);
  const [theme, setTheme] = useState("");

  const handleOptionClick = (menuSetter, closeOthers) => {
    if (closeOthers) {
      setMenuVisibleTwo(false);
      setMenuVisibleThree(false);
      setMenuVisibleFour(false);
      setMenuVisibleFive(false);
    }

    menuSetter((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (
      !event.target.closest(".option-container") &&
      (menuVisibleTwo || menuVisibleThree || menuVisibleFour || menuVisibleFive)
    ) {
      setMenuVisibleTwo(false);
      setMenuVisibleThree(false);
      setMenuVisibleFour(false);
      setMenuVisibleFive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuVisibleTwo, menuVisibleThree, menuVisibleFour, menuVisibleFive]);

  const updateTheme = () => {
    const targetDiv = document.getElementById("main-nav-section");

    if (targetDiv) {
      setTheme(
        targetDiv.classList.contains("dark-theme")
          ? "dark-theme"
          : "light-theme"
      );
    }
  };

  useEffect(() => {
    updateTheme();

    document.addEventListener("click", updateTheme);

    return () => {
      document.removeEventListener("click", updateTheme);
    };
  }, []);

  return (
    <section
      id="reactive-nav-bottom"
      className={`reactive-nav-bottom light-theme ${theme}`}
    >
      <div className={`bottom-nav-container light-theme ${theme}`}>
        <div className="option-container">
          <span className="option-one">
            <a href="#" className={`option-link theme-change ${theme}`}>
              <div className="option-link-in">
                <div className="option-link-icon-container">
                  <div className={`option-link-icon theme-change ${theme}`}>
                    <svg
                      viewBox="0 0 24 24"
                      color="textSubtle"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-bcPKhP Eouil"
                    >
                      <path d="M21.2628 15.8306C21.5556 16.1235 21.5556 16.5983 21.2628 16.8912L18.654 19.5H20.3789C20.7931 19.5 21.1289 19.8358 21.1289 20.25C21.1289 20.6642 20.7931 21 20.3789 21L16.8433 21C16.4291 21 16.0933 20.6642 16.0933 20.25V16.7145C16.0933 16.3002 16.4291 15.9645 16.8433 15.9645C17.2575 15.9645 17.5933 16.3002 17.5933 16.7145V18.4393L20.2021 15.8306C20.495 15.5377 20.9699 15.5377 21.2628 15.8306Z"></path>
                      <path d="M2.81293 7.78034C3.10583 8.07323 3.5807 8.07323 3.87359 7.78034L6.48235 5.17158L6.48235 6.89645C6.48235 7.31067 6.81814 7.64645 7.23235 7.64645C7.64656 7.64645 7.98235 7.31067 7.98235 6.89645L7.98235 3.36092C7.98235 3.16201 7.90333 2.97124 7.76268 2.83059C7.62203 2.68994 7.43126 2.61092 7.23235 2.61092L3.69682 2.61092C3.2826 2.61092 2.94682 2.9467 2.94682 3.36092C2.94682 3.77513 3.2826 4.11092 3.69682 4.11092H5.42169L2.81293 6.71968C2.52004 7.01257 2.52004 7.48744 2.81293 7.78034Z"></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.46203 20.5622C8.66377 20.5827 8.86846 20.5932 9.07561 20.5932C12.3893 20.5932 15.0756 17.9069 15.0756 14.5932C18.3893 14.5932 21.0756 11.9069 21.0756 8.59315C21.0756 5.69362 19.0189 3.27448 16.2847 2.71504C15.9185 2.64011 15.5402 2.59853 15.153 2.59363C15.1272 2.5933 15.1014 2.59314 15.0755 2.59314C11.7618 2.59314 9.07549 5.27943 9.07549 8.59314C5.76179 8.59314 3.07549 11.2794 3.07549 14.5931C3.07549 17.5962 5.28172 20.0839 8.16175 20.524C8.26107 20.5392 8.36118 20.5519 8.46203 20.5622ZM5.07549 14.5931C5.07549 12.384 6.86636 10.5931 9.07549 10.5931C9.19246 10.5931 9.30806 10.5981 9.42214 10.6079C10.0255 12.3008 11.3678 13.6431 13.0607 14.2465C13.0705 14.3606 13.0755 14.4762 13.0755 14.5931C13.0755 16.8023 11.2846 18.5931 9.07549 18.5931C6.86636 18.5931 5.07549 16.8023 5.07549 14.5931ZM11.0755 8.59314C11.0755 6.384 12.8664 4.59314 15.0755 4.59314C17.2846 4.59314 19.0755 6.384 19.0755 8.59314C19.0755 10.8023 17.2846 12.5931 15.0755 12.5931C12.8664 12.5931 11.0755 10.8023 11.0755 8.59314Z"
                      ></path>
                    </svg>
                  </div>
                  <div className={`option-link-icon-two theme-change ${theme}`}>
                    <svg
                      viewBox="0 0 20 20"
                      color="secondary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-bcPKhP kHFuOR"
                    >
                      <path d="M1.87 6.163a.75.75 0 01-1.06-1.06l2.608-2.61H1.694a.75.75 0 110-1.5h3.535a.75.75 0 01.75.75V5.28a.75.75 0 11-1.5 0V3.554L1.87 6.164zM13.072 1.976a5 5 0 01.421 9.983A6.505 6.505 0 008.09 6.555a5 5 0 014.982-4.579z"></path>
                      <path d="M12.072 12.976a5 5 0 10-10 0 5 5 0 0010 0zM19.26 14.213a.75.75 0 010 1.061l-2.61 2.609h1.726a.75.75 0 010 1.5H14.84a.75.75 0 01-.75-.75v-3.536a.75.75 0 011.5 0v1.725l2.609-2.609a.75.75 0 011.06 0z"></path>
                    </svg>
                  </div>
                </div>
                <div className={`option-link-text theme-change ${theme}`}>
                  Trade
                </div>
              </div>
            </a>
          </span>
        </div>

        <div className="option-container menu-container-two">
          <div
            className="option-two"
            onClick={() => handleOptionClick(setMenuVisibleTwo, true)}
          >
            <button
              type="button"
              className={`option-button theme-change ${theme}`}
            >
              <div className={`option-button-in theme-change ${theme}`}>
                <div className="option-button-icon-container">
                  <div className={`option-button-icon theme-change ${theme}`}>
                    <svg
                      viewBox="0 0 24 24"
                      color="textSubtle"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.4063 19.9329C12.066 19.9329 12.6742 19.779 13.207 19.5106V21.6632C12.6449 21.8378 12.0415 21.9329 11.4063 21.9329H7.00792C2.52538 21.9329 -0.374267 17.1964 1.66429 13.2043L3.70684 9.20426C4.30576 8.03138 5.25922 7.11243 6.39803 6.55101L5.46396 4.68288C5.08785 3.93066 5.54693 3.02913 6.3765 2.89087L11.6153 2.01773C12.5647 1.8595 13.3292 2.78847 12.9912 3.68962L11.9333 6.51092C13.1087 7.06815 14.094 8.00302 14.7074 9.20426L16.6114 12.9329H14.3657L12.9261 10.1138C12.2427 8.77534 10.8666 7.93292 9.36372 7.93292H9.05047C7.54759 7.93292 6.17153 8.77534 5.48805 10.1138L3.4455 14.1138C2.08646 16.7753 4.01956 19.9329 
                                            7.00792 19.9329H11.4063ZM10.6623 4.20415L7.70695 4.69671L8.32504 5.93291H10.014L10.6623 4.20415Z"
                      ></path>
                      <path d="M14.707 13.9329C14.4309 13.9329 14.207 14.1568 14.207 14.4329V15.4329C14.207 15.7091 14.4309 15.9329 14.707 15.9329H20.707C20.9832 15.9329 21.207 15.7091 21.207 15.4329V14.4329C21.207 14.1568 20.9832 13.9329 20.707 13.9329H14.707Z"></path>
                      <path d="M15.207 17.4329C15.207 17.1568 15.4309 16.9329 15.707 16.9329H21.707C21.9832 16.9329 22.207 17.1568 22.207 17.4329V18.4329C22.207 18.7091 21.9832 18.9329 21.707 18.9329H15.707C15.4309 18.9329 15.207 18.7091 15.207 18.4329V17.4329Z"></path>
                      <path d="M14.707 19.9329C14.4309 19.9329 14.207 20.1568 14.207 20.4329V21.4329C14.207 21.7091 14.4309 21.9329 14.707 21.9329L20.707 21.9329C20.9832 21.9329 21.207 21.7091 21.207 21.4329V20.4329C21.207 20.1568 20.9832 19.9329 20.707 19.9329L14.707 19.9329Z"></path>
                      <path d="M9.9212 9.93292C9.9212 9.51871 9.58541 9.18292 9.1712 9.18292C8.75699 9.18292 8.4212 9.51871 8.4212 9.93292V10.2471C7.4372 10.4874 6.70692 11.3749 6.70692 12.4329C6.70692 13.6756 7.71427 14.6829 8.95691 14.6829H9.64423C10.0043 14.6829 10.3136 14.9388 10.381 15.2926C10.469 15.7548 10.1147 16.1829 9.64423 16.1829H8.89883C8.62969 16.1829 8.38118 16.0387 8.24765 15.805L8.1081 15.5608C7.90259 15.2012 7.44445 15.0762 7.08481 15.2817C6.72517 15.4872 6.60023 15.9454 6.80573 16.305L6.94528 16.5492C7.26526 17.1092 7.80531 17.4979 8.4212 17.6317V17.9329C8.4212 18.3471 8.75699 18.6829 9.1712 18.6829C9.58541 18.6829 9.9212 18.3471 9.9212 17.9329V17.6662C11.1913 17.5114 12.101 16.3061 11.8545 15.0119C11.6524 13.9507 10.7245 13.1829 9.64423 13.1829H8.95691C8.5427 13.1829 8.20692 12.8471 8.20692 12.4329C8.20692 12.0187 8.5427 11.6829 8.95691 11.6829H9.44357C9.71272 11.6829 9.96123 11.8271 10.0948 12.0608L10.2343 12.305C10.4398 12.6647 10.898 12.7896 11.2576 12.5841C11.6172 12.3786 11.7422 11.9205 11.5367 11.5608L11.3971 11.3166C11.0771 10.7566 10.5371 10.3679 9.9212 10.2341V9.93292Z"></path>
                    </svg>
                  </div>
                  <div
                    className={`option-button-icon-two theme-change ${theme}`}
                  >
                    <svg
                      viewBox="0 0 22 20"
                      color="secondary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.207 17.836a1 1 0 011-1v-2a1 1 0 01-1-1v-2a1 1 0 011-1h2.404l-1.904-3.728a6 6 0 00-3.234-2.889l1.05-2.801a.75.75 0 00-.825-1.004l-5.24.874a.75.75 0 00-.547 1.075l.945 1.889a6 6 0 00-3.15 2.856l-2.042 4c-2.038 3.992.861 8.728 5.344 8.728h4.398c.635 0 1.239-.095 1.801-.27v-1.73zM8.171 7.086a.75.75 0 01.75.75v.302a2.25 2.25 0 011.476 1.082l.14.244a.75.75 0 11-1.303.745l-.14-.245a.75.75 0 00-.65-.378h-.487a.75.75 0 100 1.5h.687a2.25 2.25 0 01.277 4.484v.266a.75.75 0 01-1.5 0v-.3a2.25 2.25 0 01-1.476-1.083l-.14-.244a.75.75 0 011.303-.745l.14.245a.75.75 0 00.65.377h.746a.75.75 0 100-1.5h-.687a2.25 2.25 0 01-.536-4.435v-.315a.75.75 0 01.75-.75z"
                      ></path>
                      <path d="M14.707 14.836a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-6zM13.707 11.836a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-6zM13.707 17.836a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-6z"></path>
                    </svg>
                  </div>
                </div>
                <div className={`option-link-text theme-change ${theme}`}>
                  Earn
                </div>
              </div>
            </button>
          </div>

          <div
            className={`menu-two dropdown-menu-two theme-change light-theme ${
              menuVisibleTwo ? "visible" : ""
            }`}
            style={{
              position: "absolute",
              inset: "auto auto 0px 0px",
              transform: "translate(0px, -50px)",
            }}
          >
            <div className={`option-two-in radius-one theme-change ${theme}`}>
              <a
                className={`option-in-link-visual-one option-in-link-visual theme-change ${theme}`}
                href="#"
              >
                Farms
              </a>
            </div>
            <div className={`option-two-in theme-change ${theme}`}>
              <a
                className={`option-in-link-visual theme-change ${theme}`}
                href="#"
              >
                Pools
              </a>
            </div>
            <div className={`option-two-in theme-change ${theme}`}>
              <a
                className={`option-in-link-visual theme-change ${theme}`}
                href="#"
              >
                Position Manager
                <div className="link-new">New</div>
              </a>
            </div>
            <div className={`option-two-in theme-change ${theme}`}>
              <a
                className={`option-in-link-visual theme-change ${theme}`}
                href="#"
              >
                Liquid Staking
              </a>
            </div>
            <div className={`option-two-in radius-final theme-change ${theme}`}>
              <a
                className={`option-in-link-visual option-in-link-visual-final theme-change ${theme}`}
                href="#"
              >
                Simple Staking
              </a>
            </div>
          </div>
        </div>

        <div className="option-container menu-container-three">
          <span
            className="option-three"
            onClick={() => handleOptionClick(setMenuVisibleThree, true)}
          >
            <button
              type="button"
              className={`option-button theme-change ${theme}`}
            >
              <div className="option-button-in">
                <div className="option-button-icon-container">
                  <div className="option-button-icon">
                    <svg
                      viewBox="0 0 24 27"
                      fill="none"
                      color="textSubtle"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.372 17.907h.011c2.261-.002 4.078-.539 5.345-1.499 1.281-.97 1.96-2.348 1.96-3.907 0-1.5-.677-2.583-1.444-3.315a6.393 6.393 0 00-1.76-1.168c.107-.322.243-.753.364-1.199.158-.578.31-1.252.31-1.744 0-.584-.128-1.167-.472-1.617-.361-.476-.906-.731-1.565-.731-.513 0-.948.188-1.29.513-.326.31-.544.725-.696 1.16-.27.774-.373 1.751-.401 2.727h-.712c-.028-.976-.131-1.953-.4-2.727-.152-.435-.371-.85-.698-1.16a1.824 1.824 0 00-1.289-.513c-.659 0-1.203.255-1.565.73-.344.451-.472 1.034-.472 1.618 0 .492.153 1.166.31 1.744.121.446.257.877.364 1.2-.464.209-1.145.58-1.76 1.167C5.745 9.918 5.067 11 5.067 12.5c0 1.559.68 2.936 1.961 3.907 1.267.96 3.084 1.497 5.344 1.499z"
                        fill="url(#paint0_linear_2863_25822)"
                        stroke="url(#paint1_linear_2863_25822)"
                        strokeWidth="1.21283"
                      ></path>
                      <g clipPath="url(#clip0_2863_25822)">
                        <path
                          transform="rotate(45 12.435 3.66)"
                          fill="#000"
                          stroke="url(#paint2_linear_2863_25822)"
                          strokeWidth="1.34759"
                          d="M12.4348 3.6607H27.2583V18.484199999999998H12.4348z"
                        ></path>
                      </g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.362 18.289c-2.024-.002-3.654-.482-4.793-1.345-1.152-.874-1.764-2.113-1.764-3.515 0-1.352.61-2.326 1.3-2.985A5.732 5.732 0 018.66 9.408c-.094-.286-.212-.66-.317-1.046-.14-.516-.278-1.122-.278-1.566 0-.526.116-1.054.428-1.464.33-.433.827-.665 1.425-.665.467 0 .863.171 1.174.467.296.282.494.658.63 1.049.24.688.333 1.551.36 2.413h.571c.027-.862.12-1.725.36-2.413.136-.391.333-.767.63-1.05.31-.295.707-.466 1.174-.466.598 0 1.094.232 1.424.665.313.41.428.938.428 1.464 0 .444-.137 1.05-.278 1.566-.105.386-.222.76-.316 1.046.416.19 1.013.52 1.554 1.036.69.66 1.3 1.633 1.3 2.985 0 1.402-.611 2.641-1.764 3.515-1.139.863-2.769 1.343-4.793 1.345h-.01z"
                        fill="#000"
                      ></path>
                      <path
                        d="M9.918 5.167c-.876 0-1.279.652-1.279 1.555 0 .717.469 2.154.66 2.713a.251.251 0 01-.148.313c-.701.276-2.771 1.289-2.771 3.607 0 2.442 2.103 4.283 5.983 4.286H12.372c3.88-.003 5.983-1.844 5.983-4.286 0-2.319-2.07-3.33-2.772-3.607a.251.251 0 01-.148-.313c.192-.559.66-1.996.66-2.713 0-.903-.403-1.555-1.278-1.555-1.26 0-1.574 1.783-1.596 3.698a.234.234 0 01-.233.231h-1.241a.234.234 0 01-.233-.231c-.023-1.915-.337-3.698-1.596-3.698z"
                        fill="#fff"
                      ></path>
                      <path
                        d="M12.372 16.858c-2.85 0-5.988-1.524-5.992-3.499v.01c0 2.443 2.107 4.286 5.992 4.286s5.992-1.843 5.992-4.287v-.009c-.005 1.975-3.142 3.5-5.992 3.5z"
                        fill="#E5E5E5"
                      ></path>
                      <path
                        d="M10.788 12.753c0 .666-.315 1.014-.704 1.014-.389 0-.704-.348-.704-1.014 0-.667.315-1.014.704-1.014.389 0 .704.347.704 1.014zM15.363 12.753c0 .666-.315 1.014-.703 1.014-.39 0-.704-.348-.704-1.014 0-.667.315-1.014.704-1.014.388 0 .703.347.703 1.014z"
                        fill="#000"
                      ></path>
                      <path
                        d="M15.13 19.333H9.74L12.567 22l2.563-2.667z"
                        fill="#FFE70F"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_2863_25822"
                          x1="10.4332"
                          y1="2.00002"
                          x2="15.7348"
                          y2="12.0469"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#57F1FF"></stop>
                          <stop offset="1" stopColor="#61CCFE"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_2863_25822"
                          x1="6.0573"
                          y1="3.7328"
                          x2="19.2144"
                          y2="16.3639"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#54FDFF"></stop>
                          <stop offset="1" stopColor="#69A9FD"></stop>
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_2863_25822"
                          x1="11.4819"
                          y1="0.774107"
                          x2="28.1575"
                          y2="6.01502"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#54FDFF"></stop>
                          <stop offset="1" stopColor="#69A9FD"></stop>
                        </linearGradient>
                        <clipPath id="clip0_2863_25822">
                          <path
                            fill="#fff"
                            transform="translate(1 8.752)"
                            d="M0 0H22.9091V17.5187H0z"
                          ></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className={`option-link-text theme-change ${theme}`}>
                  Game
                </div>
              </div>
            </button>
            <span
              color="failure"
              className={`span-three theme-change ${theme}`}
            ></span>
          </span>

          <div
            className={`menu-three dropdown-menu-three theme-change light-theme ${
              menuVisibleThree ? "visible" : ""
            }`}
            style={{
              position: "absolute",
              inset: "auto auto 0px 0px",
              transform: "translate(18px, -50px)",
              display: menuVisibleThree ? "block" : "none",
            }}
            data-popper-reference-hidden="false"
            data-popper-escaped="false"
            data-popper-placement="top"
          >
            <div className={`option-three-in radius-one theme-change ${theme}`}>
              <a
                className={`option-in-link-visual-one option-in-link-visual theme-change ${theme}`}
                href="#"
              >
                Prediction (BETA)
              </a>
            </div>
            <div className={`option-three-in theme-change ${theme}`}>
              <a
                className={`option-in-link-visual theme-change ${theme}`}
                href="#"
              >
                Lottery
              </a>
            </div>
            <div className={`option-three-in theme-change ${theme}`}>
              <a
                className={`option-in-link-visual theme-change ${theme}`}
                href="#"
              >
                Pottery (BETA)
              </a>
            </div>
            <div
              className={`option-three-in radius-final theme-change ${theme}`}
            >
              <a
                className={`option-in-link-visual-final option-in-link-visual theme-change ${theme}`}
                href="#"
              >
                <div className={`pre-svg theme-change ${theme}`}>
                  Pancake Protectors
                  <svg
                    viewBox="0 0 24 24"
                    color="textSubtle"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-bcPKhP Eouil"
                  >
                    <path d="M16.3 8.09014C15.91 8.48014 15.91 9.10014 16.3 9.49014L18.2 11.3901H9C8.45 11.3901 8 11.8401 8 12.3901C8 12.9401 8.45 13.3901 9 13.3901H18.2L16.3 15.2901C15.91 15.6801 15.91 16.3001 16.3 16.6901C16.69 17.0801 17.31 17.0801 17.7 16.6901L21.29 13.1001C21.68 12.7101 21.68 12.0801 21.29 11.6901L17.7 8.09014C17.31 7.70014 16.69 7.70014 16.3 8.09014ZM4 19.3901H11C11.55 19.3901 12 19.8401 12 20.3901C12 20.9401 11.55 21.3901 11 21.3901H4C2.9 21.3901 2 20.4901 2 19.3901V5.39014C2 4.29014 2.9 3.39014 4 3.39014H11C11.55 3.39014 12 3.84014 12 4.39014C12 4.94014 11.55 5.39014 11 5.39014H4V19.3901Z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="option-container menu-container-four">
          <span
            className="option-four"
            onClick={() => handleOptionClick(setMenuVisibleFour, true)}
          >
            <button
              type="button"
              className={`option-button theme-change ${theme}`}
            >
              <div className="option-button-in">
                <div className="option-button-icon-container">
                  <div className={`option-button-icon theme-change ${theme}`}>
                    <svg
                      viewBox="0 0 24 24"
                      color="textSubtle"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.8533 3.39627C12.4633 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02255 10.1449 7.50212 11 8.28305 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM2.99999 19.5C2.99999 20.6046 3.89542 21.5 4.99999 21.5H8.99999C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 8.99999 13.5H4.99999C3.89542 13.5 2.99999 14.3954 2.99999 15.5V19.5ZM4.99999 15.5H8.99999V19.5H4.99999V15.5Z"></path>
                    </svg>
                  </div>
                  <div
                    className={`option-button-icon-two theme-change ${theme}`}
                  >
                    <svg
                      viewBox="0 0 19 20"
                      color="secondary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.853.8a1 1 0 00-1.706 0L4.43 6.882a1 1 0 00.853 1.522h7.434a1 1 0 00.853-1.522L9.853.8zm4.647 9.604c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zM0 16.904a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2H2a2 2 0 00-2 2v4z"></path>
                    </svg>
                  </div>
                </div>
                <div className={`option-link-text theme-change ${theme}`}>
                  NFT
                </div>
              </div>
            </button>
            <span
              color="failure"
              className={`span-four theme-change ${theme}`}
            ></span>
          </span>

          <div
            className={`menu-four dropdown-menu-four theme-change ${theme} ${
              menuVisibleFour ? "visible" : ""
            }`}
            style={{
              position: "absolute",
              inset: "auto auto 0px 0px",
              transform: "translate(32px, -50px)",
            }}
            data-popper-reference-hidden="false"
            data-popper-escaped="false"
            data-popper-placement="top"
          >
            <div className={`option-four-in radius-one theme-change ${theme}`}>
              <a
                className={`option-in-link-visual-one option-in-link-visual theme-change ${theme}`}
                href="#"
              >
                Overview
              </a>
            </div>
            <div className={`option-four-in theme-change ${theme}`}>
              <a
                className={`option-in-link-visual theme-change ${theme}`}
                href="#"
              >
                Collections
              </a>
            </div>
            <div
              className={`option-four-in radius-final theme-change ${theme}`}
            >
              <a
                className={`option-in-link-visual-final option-in-link-visual theme-change ${theme}`}
                href="#"
              >
                Activity
              </a>
            </div>
          </div>
        </div>

        <div className="option-container menu-container-five">
          <span
            className="option-five"
            onClick={() => handleOptionClick(setMenuVisibleFive, true)}
          >
            <button
              type="button"
              className={`option-button theme-change ${theme}`}
            >
              <div className="option-button-in">
                <div className="option-button-icon-container">
                  <div className={`option-button-icon theme-change ${theme}`}>
                    <svg
                      viewBox="0 0 24 24"
                      color="textSubtle"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-bcPKhP Eouil"
                    >
                      <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="option-link-text-points"></div>
              </div>
            </button>
            <span
              color="failure"
              className={`span-five theme-change ${theme}`}
            ></span>
          </span>

          <div
            className={`menu-five dropdown-menu-five theme-change ${theme} ${
              menuVisibleFive ? "visible" : ""
            }`}
            style={{
              position: "absolute",
              inset: "auto auto 0px 0px",
              transform: "translate(32px, -50px)",
            }}
            data-popper-reference-hidden="false"
            data-popper-escaped="false"
            data-popper-placement="top"
          >
            <div className={`option-five-in radius-one theme-change ${theme}`}>
              <a
                className={`option-in-link-visual-one option-in-link-visual theme-change ${theme}`}
                href="#"
              >
                Info
              </a>
            </div>
            <div className={`option-five-in theme-change ${theme}`}>
              <a
                className={`option-in-link-visual theme-change ${theme}`}
                href="#"
              >
                IFO
              </a>
            </div>
            <div className={`option-five-in theme-change ${theme}`}>
              <a
                className={`option-in-link-visual theme-change ${theme}`}
                href="#"
              >
                Affiliate Program
              </a>
            </div>
            <div className={`option-five-in theme-change ${theme}`}>
              <a
                className={`option-in-link-visual theme-change ${theme}`}
                href="#"
              >
                Voting
              </a>
            </div>
            <div>
              <hr className={`option-in-line theme-change ${theme}`}></hr>
            </div>
            <div className={`option-five-in theme-change ${theme}`}>
              <a
                className={`option-in-link-visual theme-change ${theme}`}
                href="#"
              >
                Leaderboard
              </a>
            </div>
            <div>
              <hr className={`option-in-line theme-change ${theme}`}></hr>
            </div>
            <div className={`option-five-in theme-change ${theme}`}>
              <a
                className={`option-in-link-visual theme-change ${theme}`}
                href="#"
              >
                <div className={`pre-svg theme-change ${theme}`}>
                  Blog
                  <svg
                    viewBox="0 0 24 24"
                    color="textSubtle"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-bcPKhP Eouil"
                  >
                    <path d="M16.3 8.09014C15.91 8.48014 15.91 9.10014 16.3 9.49014L18.2 11.3901H9C8.45 11.3901 8 11.8401 8 12.3901C8 12.9401 8.45 13.3901 9 13.3901H18.2L16.3 15.2901C15.91 15.6801 15.91 16.3001 16.3 16.6901C16.69 17.0801 17.31 17.0801 17.7 16.6901L21.29 13.1001C21.68 12.7101 21.68 12.0801 21.29 11.6901L17.7 8.09014C17.31 7.70014 16.69 7.70014 16.3 8.09014ZM4 19.3901H11C11.55 19.3901 12 19.8401 12 20.3901C12 20.9401 11.55 21.3901 11 21.3901H4C2.9 21.3901 2 20.4901 2 19.3901V5.39014C2 4.29014 2.9 3.39014 4 3.39014H11C11.55 3.39014 12 3.84014 12 4.39014C12 4.94014 11.55 5.39014 11 5.39014H4V19.3901Z"></path>
                  </svg>
                </div>
              </a>
            </div>
            <div
              className={`option-five-in radius-final theme-change ${theme}`}
            >
              <a
                className={`option-in-link-visual option-in-link-visual-final theme-change ${theme}`}
                href="#"
              >
                <div className={`pre-svg theme-change ${theme}`}>
                  Docs
                  <svg
                    viewBox="0 0 24 24"
                    color="textSubtle"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-bcPKhP Eouil"
                  >
                    <path d="M16.3 8.09014C15.91 8.48014 15.91 9.10014 16.3 9.49014L18.2 11.3901H9C8.45 11.3901 8 11.8401 8 12.3901C8 12.9401 8.45 13.3901 9 13.3901H18.2L16.3 15.2901C15.91 15.6801 15.91 16.3001 16.3 16.6901C16.69 17.0801 17.31 17.0801 17.7 16.6901L21.29 13.1001C21.68 12.7101 21.68 12.0801 21.29 11.6901L17.7 8.09014C17.31 7.70014 16.69 7.70014 16.3 8.09014ZM4 19.3901H11C11.55 19.3901 12 19.8401 12 20.3901C12 20.9401 11.55 21.3901 11 21.3901H4C2.9 21.3901 2 20.4901 2 19.3901V5.39014C2 4.29014 2.9 3.39014 4 3.39014H11C11.55 3.39014 12 3.84014 12 4.39014C12 4.94014 11.55 5.39014 11 5.39014H4V19.3901Z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomNav;
