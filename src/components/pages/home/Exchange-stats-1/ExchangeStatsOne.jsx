import React, { useState, useEffect } from "react";
import "./exchange-stats-one.css";

const ExchangeStatsOne = () => {
    const [imageSrc, setImageSrc] = useState(
        "/img/exchange-stats-one-invisible-2.svg"
    );
    const [secondImageSrc, setSecondImageSrc] = useState(
        "/img/exchange-stats-one-invisible-3.svg"
    );

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1080) {
                setImageSrc("/img/exchange-stats-one-invisible-2-big.svg");
            } else {
                setImageSrc("/img/exchange-stats-one-invisible-2.svg");
            }

            if (window.innerWidth > 1080) {
                setSecondImageSrc(
                    "/img/exchange-stats-one-invisible-3-big.svg"
                );
            } else {
                setSecondImageSrc("/img/exchange-stats-one-invisible-3.svg");
            }
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section id="sec4-container" className="sec4-container">
            <div className="exchange-div-container">
                <div
                    id="home-2"
                    className="page-bg hjMNFe jciDMZ UlmxL theme-change light-theme"
                >
                    <div
                        className="kHgHJL gVCLyc"
                        style={{ margin: "0px", width: "100%", padding: "0px" }}
                    >
                        <div className="fVbmfK ZuZHX">
                            <div className="cDHLip theme-change light-theme">
                                Shaping the Future of Decentralized Trading:
                            </div>
                            <div className="lmRHOx theme-change light-theme">
                                PancakeSwaps Unstoppable Expansion
                            </div>
                            <div
                                className="cjGCak jTConU"
                                style={{ gap: "50px" }}
                            >
                                <div className="stEjy">
                                    <div className="kMoRyU theme-change light-theme">
                                        Total Users:
                                    </div>
                                    <div className="icozZq theme-change light-theme">
                                        <span>1,255,059</span>
                                    </div>
                                    <div className="eXpyRM theme-change light-theme">
                                        in the last 30 days
                                    </div>
                                </div>
                                <div>
                                    <div className="kMoRyU theme-change light-theme">
                                        Total Trades:
                                    </div>
                                    <div className="icozZq theme-change light-theme">
                                        <span>18,429,241</span>
                                    </div>
                                    <div className="eXpyRM theme-change light-theme">
                                        in the last 30 days
                                    </div>
                                </div>
                                <div>
                                    <div className="kMoRyU theme-change light-theme">
                                        Total Value Locked:
                                    </div>
                                    <div className="icozZq theme-change light-theme">
                                        <span>$1,590,402,344</span>
                                    </div>
                                    <div className="eXpyRM theme-change light-theme">
                                        in the last 30 days
                                    </div>
                                </div>
                            </div>

                            <div
                                className="rfm-marquee-container dbFZKb theme-change light-theme"
                                style={{
                                    "--pause-on-hover": "running",
                                    "--pause-on-click": "running",
                                    "--width": "100%",
                                    "--transform": "none",
                                }}
                            >
                                <div
                                    className="rfm-marquee"
                                    style={{
                                        "--play": "running",
                                        "--direction": "normal",
                                        "--duration": "28.4422s",
                                        "--delay": "0s",
                                        "--iteration-count": "infinite",
                                        "--min-width": "100%",
                                    }}
                                >
                                    <div className="rfm-initial-child-container">
                                        <div
                                            className="rfm-child"
                                            style={{ "--transform": "none" }}
                                        >
                                            <div
                                                className="hdRJqv"
                                                style={{
                                                    background:
                                                        "linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), rgb(240, 185, 11)",
                                                }}
                                            >
                                                <div
                                                    width="26px"
                                                    color="invertedContrast"
                                                    className="sc-kxSiKH bDutNz theme-change light-theme"
                                                >
                                                    <svg
                                                        viewBox="0 0 40 40"
                                                        color="text"
                                                        width="20px"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="sc-bcPKhP cvmRst theme-change light-theme"
                                                    >
                                                        <path d="M14.2487 9.59637L10.7888 7.58546L20.1999 2.08337L29.6387 7.58546L26.1787 9.59637L20.1999 6.13313L14.2487 9.59637ZM32.1022 13.0596V17.1094L35.5622 15.0985V11.0487L32.1022 9.00986L28.6422 11.0208L32.1022 13.0596ZM16.7399 11.0487L20.1999 13.0596L23.6599 11.0487L20.1999 9.00986L16.7399 11.0487ZM29.6387 14.5119L26.1787 12.501L20.1999 15.9643L14.2487 12.501L10.7888 14.5119V18.5617L16.7399 22.0249V28.9514L20.1999 30.9623L23.6599 28.9514V22.0249L29.6387 18.5617V14.5119ZM32.1022 26.9405L26.1511 30.4038V34.4535L35.5899 28.9514V17.9752L32.1022 20.014V26.9405ZM26.1511 27.527L29.611 25.5161V21.4384L26.1511 23.4493V27.527ZM16.7399 31.8561V35.9058L20.1999 37.9168L23.6599 35.9058V31.8561L20.1999 33.867L16.7399 31.8561ZM4.80992 15.0985L8.2699 17.1094V13.0596L11.7299 11.0487L8.29758 9.00986L4.8376 11.0208V15.0985H4.80992ZM8.29758 20.014L4.8376 18.0031V28.9794L14.2764 34.4814V30.4317L8.29758 26.9405V20.014ZM14.2487 23.4773L10.7888 21.4664V25.5161L14.2487 27.527V23.4773Z"></path>
                                                    </svg>
                                                </div>
                                                <div className="fYRZaE theme-change light-theme">
                                                    BNB Chain
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="rfm-child"
                                            style={{ "--transform": "none" }}
                                        >
                                            <div
                                                className="hdRJqv"
                                                style={{
                                                    background:
                                                        "rgb(23, 186, 146)",
                                                }}
                                            >
                                                <svg
                                                    viewBox="0 0 60 60"
                                                    width="22px"
                                                    color="invertedContrast"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="sc-bcPKhP jIIotV theme-change light-theme"
                                                >
                                                    <path d="M46.47 20.07h-5.31a2.15 2.15 0 01-1.61-.72l-2.16-2.42a1.69 1.69 0 00-2.53 0L33 19a3.21 3.21 0 01-2.39 1.07h-29A30.26 30.26 0 000 27.48h27.42a1.78 1.78 0 001.28-.54l2.56-2.66a1.67 1.67 0 011.22-.52h.1a1.7 1.7 0 011.27.57L36 26.75a2.17 2.17 0 001.61.73H60a30.26 30.26 0 00-1.58-7.41h-12zM16.6 43.05a1.78 1.78 0 001.27-.54l2.56-2.66a1.7 1.7 0 011.22-.52h.1a1.7 1.7 0 011.25.57l2.15 2.42a2.14 2.14 0 001.62.73h30.35a29.73 29.73 0 002.47-7.48H30.47a2.17 2.17 0 01-1.62-.72l-2.15-2.43a1.69 1.69 0 00-2.53 0l-1.85 2.08a3.18 3.18 0 01-2.38 1.07H.41a29.73 29.73 0 002.47 7.48zM38.12 12a1.74 1.74 0 001.27-.54L42 8.78a1.69 1.69 0 011.22-.51h.1a1.69 1.69 0 011.27.56l2.15 2.43a2.17 2.17 0 001.62.72h5.77A30.19 30.19 0 005.92 12zM26.53 50.46h-7.89a2.17 2.17 0 01-1.64-.72l-2.15-2.43a1.71 1.71 0 00-2.53 0l-1.85 2.08a3.18 3.18 0 01-2.38 1.07H8a30.16 30.16 0 0044 0z"></path>
                                                </svg>
                                                <div className="fYRZaE theme-change light-theme">
                                                    Aptos
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="rfm-child"
                                            style={{ "--transform": "none" }}
                                        >
                                            <div
                                                className="hdRJqv"
                                                style={{
                                                    background:
                                                        "rgb(98, 122, 216)",
                                                }}
                                            >
                                                <svg
                                                    viewBox="0 0 10 14"
                                                    fill="none"
                                                    width="16px"
                                                    color="invertedContrast"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="sc-bcPKhP jIIotV theme-change light-theme"
                                                >
                                                    <path
                                                        d="M4.99103 0.174805V5.13368L9.18211 7.00671L4.99103 0.174805Z"
                                                        fillOpacity="0.602"
                                                    ></path>
                                                    <path d="M4.99083 0.174805L0.799744 7.00671L4.99083 5.13368V0.174805Z"></path>
                                                    <path
                                                        d="M4.99103 10.2201V13.5896L9.18456 7.78711L4.99103 10.2201Z"
                                                        fillOpacity="0.602"
                                                    ></path>
                                                    <path d="M4.99083 13.5896V10.2201L0.799744 7.78711L4.99083 13.5896Z"></path>
                                                    <path
                                                        d="M4.99103 9.4398L9.18211 7.00682L4.99103 5.13379V9.4398Z"
                                                        fillOpacity="0.2"
                                                    ></path>
                                                    <path
                                                        d="M0.799744 7.00682L4.99083 9.4398V5.13379L0.799744 7.00682Z"
                                                        fillOpacity="0.602"
                                                    ></path>
                                                </svg>
                                                <div className="fYRZaE theme-change light-theme">
                                                    Ethereum
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="rfm-child"
                                            style={{ "--transform": "none" }}
                                        >
                                            <div
                                                className="hdRJqv"
                                                style={{
                                                    background:
                                                        "rgb(173, 115, 222)",
                                                }}
                                            >
                                                <div
                                                    width="24px"
                                                    color="invertedContrast"
                                                    className="sc-kxSiKH bDutNz theme-change light-theme"
                                                >
                                                    <svg
                                                        viewBox="0 0 14 14"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        color="text"
                                                        width="20px"
                                                        className="sc-bcPKhP cvmRst theme-change light-theme"
                                                    >
                                                        <path d="M10.3944 9.53278L13.7152 7.61529C13.8912 7.51343 14 7.32455 14 7.12182V3.28683C14 3.0841 13.8912 2.89522 13.7152 2.79337L10.3944 0.875873C10.2184 0.774016 9.99986 0.775005 9.82481 0.875873L6.50406 2.79337C6.32803 2.89522 6.21925 3.0841 6.21925 3.28683V10.14L3.89037 11.4839L1.56149 10.14V7.45113L3.89037 6.1072L5.42614 6.99425V5.19048L4.17517 4.46759C4.08914 4.41814 3.99025 4.39144 3.89037 4.39144C3.79049 4.39144 3.6916 4.41814 3.60556 4.46759L0.284806 6.38508C0.10878 6.48694 0 6.67582 0 6.87855V10.7135C0 10.9163 0.10878 11.1051 0.284806 11.207L3.60556 13.1245C3.78159 13.2254 3.99915 13.2254 4.17517 13.1245L7.49593 11.207C7.67196 11.1051 7.78074 10.9163 7.78074 10.7135V3.8604L7.82227 3.83666L10.1086 2.51647L12.4375 3.8604V6.54924L10.1086 7.89317L8.57483 7.0081V8.81187L9.82383 9.53278C9.99986 9.63365 10.2184 9.63365 10.3934 9.53278H10.3944Z"></path>
                                                    </svg>
                                                </div>
                                                <div className="fYRZaE theme-change light-theme">
                                                    Polygon zkEVM
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="rfm-child"
                                            style={{ "--transform": "none" }}
                                        >
                                            <div
                                                className="hdRJqv"
                                                style={{
                                                    background:
                                                        "rgb(104, 110, 167)",
                                                }}
                                            >
                                                <svg
                                                    viewBox="0 0 27 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="26px"
                                                    color="invertedContrast"
                                                    className="sc-bcPKhP jIIotV theme-change light-theme"
                                                >
                                                    <path d="M15.3652 3.72137L7.96087 9.27481V15L0.5 7.44275L7.84783 0V3.72137H15.3652Z"></path>
                                                    <path d="M19.0957 5.55343V0L26.5 7.5L19.0957 15V11.2214H11.6348L19.0957 5.55343Z"></path>
                                                </svg>
                                                <div className="fYRZaE theme-change light-theme">
                                                    zkSync Era
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="rfm-child"
                                            style={{ "--transform": "none" }}
                                        >
                                            <div
                                                className="hdRJqv"
                                                style={{
                                                    background:
                                                        "rgb(110, 137, 174)",
                                                }}
                                            >
                                                <svg
                                                    viewBox="0 0 20 22"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20px"
                                                    color="invertedContrast"
                                                    className="sc-bcPKhP jIIotV theme-change light-theme"
                                                >
                                                    <path d="M10.0333 1.36361C10.087 1.36361 10.1407 1.37808 10.1889 1.40521L18.45 6.09817C18.5463 6.15242 18.6055 6.25369 18.6037 6.36039L18.5722 15.6939C18.5722 15.8024 18.513 15.9018 18.4167 15.9561L10.1241 20.5966C10.0778 20.6237 10.0222 20.6364 9.96852 20.6364C9.91481 20.6364 9.86111 20.6219 9.81296 20.5948L1.55186 15.9018C1.45556 15.8476 1.3963 15.7463 1.39815 15.6396L1.42964 6.30614C1.42964 6.19763 1.4889 6.09817 1.58519 6.04391L9.87778 1.4034C9.92407 1.37627 9.97778 1.36361 10.0333 1.36361ZM10.037 3.2297e-05C9.74259 -0.00177616 9.44815 0.0723708 9.18333 0.220665L0.890748 4.85937C0.361119 5.15596 0.0351931 5.70392 0.0314893 6.30071L7.89425e-06 15.6342C-0.00184396 16.2292 0.32223 16.7807 0.848155 17.081L9.10926 21.7739C9.37222 21.924 9.66667 21.9982 9.96296 22C10.2574 22.0018 10.5519 21.9276 10.8167 21.7793L19.1093 17.1388C19.6389 16.8422 19.9648 16.2943 19.9685 15.6975L20 6.36582C20.0018 5.77083 19.6778 5.21925 19.1518 4.91905L10.8907 0.22609C10.6259 0.0759877 10.3315 3.2297e-05 10.037 3.2297e-05Z"></path>
                                                    <path d="M11.711 5.08594H10.4999C10.4091 5.08594 10.3277 5.142 10.2962 5.22519L6.40359 15.6492C6.37767 15.7179 6.42952 15.7902 6.50544 15.7902H7.71655C7.80729 15.7902 7.88878 15.7342 7.92026 15.651L11.8147 5.22519C11.8369 5.15828 11.7851 5.08594 11.711 5.08594ZM9.59248 5.08594H8.38137C8.29063 5.08594 8.20915 5.142 8.17766 5.22519L4.28507 15.6492C4.25915 15.7179 4.311 15.7902 4.38693 15.7902H5.59804C5.68878 15.7902 5.77026 15.7342 5.80174 15.651L9.69618 5.22519C9.72025 5.15828 9.6684 5.08594 9.59248 5.08594ZM11.161 9.12785C11.1258 9.03562 10.9925 9.03562 10.9573 9.12785L10.3277 10.8133C10.311 10.8604 10.311 10.911 10.3277 10.958L12.0814 15.6528C12.1128 15.736 12.1943 15.792 12.2851 15.792H13.4962C13.5721 15.792 13.624 15.7197 13.598 15.651L11.161 9.12785ZM15.7147 15.6492L12.2203 6.29399C12.1851 6.20176 12.0517 6.20176 12.0166 6.29399L11.3869 7.97948C11.3703 8.0265 11.3703 8.07713 11.3869 8.12415L14.1999 15.6528C14.2314 15.736 14.3128 15.792 14.4036 15.792H15.6147C15.6869 15.7902 15.7406 15.7179 15.7147 15.6492Z"></path>
                                                </svg>
                                                <div className="fYRZaE theme-change light-theme">
                                                    Arbitrum One
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="rfm-child"
                                            style={{ "--transform": "none" }}
                                        >
                                            <div
                                                className="hdRJqv"
                                                style={{
                                                    background:
                                                        "linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), rgb(129, 216, 234)",
                                                }}
                                            >
                                                <svg
                                                    viewBox="0 0 14 14"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18px"
                                                    color="invertedContrast"
                                                    className="sc-bcPKhP jIIotV theme-change light-theme"
                                                >
                                                    <path d="M12 14H0V2H3V11H12V14Z"></path>
                                                    <path d="M12.0002 4C13.1045 4 14 3.10457 14 2C14 0.895432 13.1045 0 12.0002 0C10.8955 0 10 0.895432 10 2C10 3.10457 10.8955 4 12.0002 4Z"></path>
                                                </svg>
                                                <div className="fYRZaE theme-change light-theme">
                                                    Linea
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="rfm-child"
                                            style={{ "--transform": "none" }}
                                        >
                                            <div
                                                className="hdRJqv"
                                                style={{
                                                    background:
                                                        "linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), rgb(117, 161, 255)",
                                                }}
                                            >
                                                <div
                                                    width="20px"
                                                    color="invertedContrast"
                                                    className="bDutNz theme-change light-theme"
                                                >
                                                    <svg
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        color="text"
                                                        width="20px"
                                                        className="sc-bcPKhP cvmRst theme change light-theme"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M10 16.25C13.4518 16.25 16.25 13.4518 16.25 10C16.25 6.54822 13.4518 3.75 10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 13.4518 6.54822 16.25 10 16.25ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                                                        ></path>
                                                        <path
                                                            fill="white"
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M11.875 10.625H0V9.375H11.875V10.625Z"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div className="fYRZaE theme-change light-theme">
                                                    Base
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="rfm-marquee"
                                    style={{
                                        "--play": "running",
                                        "--direction": "normal",
                                        "--duration": "28.4422s",
                                        "--delay": "0s",
                                        "--iteration-count": "infinite",
                                        "--min-width": "100%",
                                    }}
                                >
                                    <div
                                        className="rfm-child"
                                        style={{ "--transform": "none" }}
                                    >
                                        <div
                                            className="hdRJqv"
                                            style={{
                                                background:
                                                    "linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), rgb(240, 185, 11)",
                                            }}
                                        >
                                            <div
                                                width="26px"
                                                color="invertedContrast"
                                                className="bDutNz theme-change light-theme"
                                            >
                                                <svg
                                                    viewBox="0 0 40 40"
                                                    color="text"
                                                    width="20px"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="sc-bcPKhP cvmRst theme-change light-theme"
                                                >
                                                    <path d="M14.2487 9.59637L10.7888 7.58546L20.1999 2.08337L29.6387 7.58546L26.1787 9.59637L20.1999 6.13313L14.2487 9.59637ZM32.1022 13.0596V17.1094L35.5622 15.0985V11.0487L32.1022 9.00986L28.6422 11.0208L32.1022 13.0596ZM16.7399 11.0487L20.1999 13.0596L23.6599 11.0487L20.1999 9.00986L16.7399 11.0487ZM29.6387 14.5119L26.1787 12.501L20.1999 15.9643L14.2487 12.501L10.7888 14.5119V18.5617L16.7399 22.0249V28.9514L20.1999 30.9623L23.6599 28.9514V22.0249L29.6387 18.5617V14.5119ZM32.1022 26.9405L26.1511 30.4038V34.4535L35.5899 28.9514V17.9752L32.1022 20.014V26.9405ZM26.1511 27.527L29.611 25.5161V21.4384L26.1511 23.4493V27.527ZM16.7399 31.8561V35.9058L20.1999 37.9168L23.6599 35.9058V31.8561L20.1999 33.867L16.7399 31.8561ZM4.80992 15.0985L8.2699 17.1094V13.0596L11.7299 11.0487L8.29758 9.00986L4.8376 11.0208V15.0985H4.80992ZM8.29758 20.014L4.8376 18.0031V28.9794L14.2764 34.4814V30.4317L8.29758 26.9405V20.014ZM14.2487 23.4773L10.7888 21.4664V25.5161L14.2487 27.527V23.4773Z"></path>
                                                </svg>
                                            </div>
                                            <div className="sc-grXZZQ fYRZaE theme-change light-theme">
                                                BNB Chain
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="rfm-child"
                                        style={{ "--transform": "none" }}
                                    >
                                        <div
                                            className="hdRJqv"
                                            style={{
                                                background: "rgb(23, 186, 146)",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 60 60"
                                                width="22px"
                                                color="invertedContrast"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="sc-bcPKhP jIIotV theme-change light-theme"
                                            >
                                                <path d="M46.47 20.07h-5.31a2.15 2.15 0 01-1.61-.72l-2.16-2.42a1.69 1.69 0 00-2.53 0L33 19a3.21 3.21 0 01-2.39 1.07h-29A30.26 30.26 0 000 27.48h27.42a1.78 1.78 0 001.28-.54l2.56-2.66a1.67 1.67 0 011.22-.52h.1a1.7 1.7 0 011.27.57L36 26.75a2.17 2.17 0 001.61.73H60a30.26 30.26 0 00-1.58-7.41h-12zM16.6 43.05a1.78 1.78 0 001.27-.54l2.56-2.66a1.7 1.7 0 011.22-.52h.1a1.7 1.7 0 011.25.57l2.15 2.42a2.14 2.14 0 001.62.73h30.35a29.73 29.73 0 002.47-7.48H30.47a2.17 2.17 0 01-1.62-.72l-2.15-2.43a1.69 1.69 0 00-2.53 0l-1.85 2.08a3.18 3.18 0 01-2.38 1.07H.41a29.73 29.73 0 002.47 7.48zM38.12 12a1.74 1.74 0 001.27-.54L42 8.78a1.69 1.69 0 011.22-.51h.1a1.69 1.69 0 011.27.56l2.15 2.43a2.17 2.17 0 001.62.72h5.77A30.19 30.19 0 005.92 12zM26.53 50.46h-7.89a2.17 2.17 0 01-1.64-.72l-2.15-2.43a1.71 1.71 0 00-2.53 0l-1.85 2.08a3.18 3.18 0 01-2.38 1.07H8a30.16 30.16 0 0044 0z"></path>
                                            </svg>
                                            <div className="fYRZaE theme-change light-theme">
                                                Aptos
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="rfm-child"
                                        style={{ "--transform": "none" }}
                                    >
                                        <div
                                            className="hdRJqv"
                                            style={{
                                                background: "rgb(98, 122, 216)",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 10 14"
                                                fill="none"
                                                width="16px"
                                                color="invertedContrast"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="sc-bcPKhP jIIotV theme-change light-theme"
                                            >
                                                <path
                                                    d="M4.99103 0.174805V5.13368L9.18211 7.00671L4.99103 0.174805Z"
                                                    fillOpacity="0.602"
                                                ></path>
                                                <path d="M4.99083 0.174805L0.799744 7.00671L4.99083 5.13368V0.174805Z"></path>
                                                <path
                                                    d="M4.99103 10.2201V13.5896L9.18456 7.78711L4.99103 10.2201Z"
                                                    fillOpacity="0.602"
                                                ></path>
                                                <path d="M4.99083 13.5896V10.2201L0.799744 7.78711L4.99083 13.5896Z"></path>
                                                <path
                                                    d="M4.99103 9.4398L9.18211 7.00682L4.99103 5.13379V9.4398Z"
                                                    fillOpacity="0.2"
                                                ></path>
                                                <path
                                                    d="M0.799744 7.00682L4.99083 9.4398V5.13379L0.799744 7.00682Z"
                                                    fillOpacity="0.602"
                                                ></path>
                                            </svg>
                                            <div className="fYRZaE theme-change light-theme">
                                                Ethereum
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="rfm-child"
                                        style={{ "--transform": "none" }}
                                    >
                                        <div
                                            className="hdRJqv"
                                            style={{
                                                background:
                                                    "rgb(173, 115, 222)",
                                            }}
                                        >
                                            <div
                                                width="24px"
                                                color="invertedContrast"
                                                className="bDutNz theme-change light-theme"
                                            >
                                                <svg
                                                    viewBox="0 0 14 14"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    color="text"
                                                    width="20px"
                                                    className="sc-bcPKhP cvmRst theme-change light-theme"
                                                >
                                                    <path
                                                        fill="white"
                                                        d="M10.3944 9.53278L13.7152 7.61529C13.8912 7.51343 14 7.32455 14 7.12182V3.28683C14 3.0841 13.8912 2.89522 13.7152 2.79337L10.3944 0.875873C10.2184 0.774016 9.99986 0.775005 9.82481 0.875873L6.50406 2.79337C6.32803 2.89522 6.21925 3.0841 6.21925 3.28683V10.14L3.89037 11.4839L1.56149 10.14V7.45113L3.89037 6.1072L5.42614 6.99425V5.19048L4.17517 4.46759C4.08914 4.41814 3.99025 4.39144 3.89037 4.39144C3.79049 4.39144 3.6916 4.41814 3.60556 4.46759L0.284806 6.38508C0.10878 6.48694 0 6.67582 0 6.87855V10.7135C0 10.9163 0.10878 11.1051 0.284806 11.207L3.60556 13.1245C3.78159 13.2254 3.99915 13.2254 4.17517 13.1245L7.49593 11.207C7.67196 11.1051 7.78074 10.9163 7.78074 10.7135V3.8604L7.82227 3.83666L10.1086 2.51647L12.4375 3.8604V6.54924L10.1086 7.89317L8.57483 7.0081V8.81187L9.82383 9.53278C9.99986 9.63365 10.2184 9.63365 10.3934 9.53278H10.3944Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div className="fYRZaE theme-change light-theme">
                                                Polygon zkEVM
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="rfm-child"
                                        style={{ "--transform": "none" }}
                                    >
                                        <div
                                            className="hdRJqv"
                                            style={{
                                                background:
                                                    "rgb(104, 110, 167)",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 27 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="26px"
                                                color="invertedContrast"
                                                className="sc-bcPKhP jIIotV theme-change light-theme"
                                            >
                                                <path d="M15.3652 3.72137L7.96087 9.27481V15L0.5 7.44275L7.84783 0V3.72137H15.3652Z"></path>
                                                <path d="M19.0957 5.55343V0L26.5 7.5L19.0957 15V11.2214H11.6348L19.0957 5.55343Z"></path>
                                            </svg>
                                            <div className="fYRZaE theme-change light-theme">
                                                zkSync Era
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="rfm-child"
                                        style={{ "--transform": "none" }}
                                    >
                                        <div
                                            className="hdRJqv"
                                            style={{
                                                background:
                                                    "rgb(110, 137, 174)",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 20 22"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20px"
                                                color="invertedContrast"
                                                className="sc-bcPKhP jIIotV theme-change light-theme"
                                            >
                                                <path d="M10.0333 1.36361C10.087 1.36361 10.1407 1.37808 10.1889 1.40521L18.45 6.09817C18.5463 6.15242 18.6055 6.25369 18.6037 6.36039L18.5722 15.6939C18.5722 15.8024 18.513 15.9018 18.4167 15.9561L10.1241 20.5966C10.0778 20.6237 10.0222 20.6364 9.96852 20.6364C9.91481 20.6364 9.86111 20.6219 9.81296 20.5948L1.55186 15.9018C1.45556 15.8476 1.3963 15.7463 1.39815 15.6396L1.42964 6.30614C1.42964 6.19763 1.4889 6.09817 1.58519 6.04391L9.87778 1.4034C9.92407 1.37627 9.97778 1.36361 10.0333 1.36361ZM10.037 3.2297e-05C9.74259 -0.00177616 9.44815 0.0723708 9.18333 0.220665L0.890748 4.85937C0.361119 5.15596 0.0351931 5.70392 0.0314893 6.30071L7.89425e-06 15.6342C-0.00184396 16.2292 0.32223 16.7807 0.848155 17.081L9.10926 21.7739C9.37222 21.924 9.66667 21.9982 9.96296 22C10.2574 22.0018 10.5519 21.9276 10.8167 21.7793L19.1093 17.1388C19.6389 16.8422 19.9648 16.2943 19.9685 15.6975L20 6.36582C20.0018 5.77083 19.6778 5.21925 19.1518 4.91905L10.8907 0.22609C10.6259 0.0759877 10.3315 3.2297e-05 10.037 3.2297e-05Z"></path>
                                                <path d="M11.711 5.08594H10.4999C10.4091 5.08594 10.3277 5.142 10.2962 5.22519L6.40359 15.6492C6.37767 15.7179 6.42952 15.7902 6.50544 15.7902H7.71655C7.80729 15.7902 7.88878 15.7342 7.92026 15.651L11.8147 5.22519C11.8369 5.15828 11.7851 5.08594 11.711 5.08594ZM9.59248 5.08594H8.38137C8.29063 5.08594 8.20915 5.142 8.17766 5.22519L4.28507 15.6492C4.25915 15.7179 4.311 15.7902 4.38693 15.7902H5.59804C5.68878 15.7902 5.77026 15.7342 5.80174 15.651L9.69618 5.22519C9.72025 5.15828 9.6684 5.08594 9.59248 5.08594ZM11.161 9.12785C11.1258 9.03562 10.9925 9.03562 10.9573 9.12785L10.3277 10.8133C10.311 10.8604 10.311 10.911 10.3277 10.958L12.0814 15.6528C12.1128 15.736 12.1943 15.792 12.2851 15.792H13.4962C13.5721 15.792 13.624 15.7197 13.598 15.651L11.161 9.12785ZM15.7147 15.6492L12.2203 6.29399C12.1851 6.20176 12.0517 6.20176 12.0166 6.29399L11.3869 7.97948C11.3703 8.0265 11.3703 8.07713 11.3869 8.12415L14.1999 15.6528C14.2314 15.736 14.3128 15.792 14.4036 15.792H15.6147C15.6869 15.7902 15.7406 15.7179 15.7147 15.6492Z"></path>
                                            </svg>
                                            <div className="fYRZaE theme-change light-theme">
                                                Arbitrum One
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="rfm-child"
                                        style={{ "--transform": "none" }}
                                    >
                                        <div
                                            className="hdRJqv"
                                            style={{
                                                background:
                                                    "linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), rgb(129, 216, 234)",
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 14 14"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18px"
                                                color="invertedContrast"
                                                className="sc-bcPKhP jIIotV theme-change light-theme"
                                            >
                                                <path d="M12 14H0V2H3V11H12V14Z"></path>
                                                <path d="M12.0002 4C13.1045 4 14 3.10457 14 2C14 0.895432 13.1045 0 12.0002 0C10.8955 0 10 0.895432 10 2C10 3.10457 10.8955 4 12.0002 4Z"></path>
                                            </svg>
                                            <div className="fYRZaE theme-change light-theme">
                                                Linea
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="rfm-child"
                                        style={{ "--transform": "none" }}
                                    >
                                        <div
                                            className="hdRJqv"
                                            style={{
                                                background:
                                                    "linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), rgb(117, 161, 255)",
                                            }}
                                        >
                                            <div
                                                width="20px"
                                                color="invertedContrast"
                                                className="bDutNz"
                                            >
                                                <svg
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    color="text"
                                                    width="20px"
                                                    className="sc-bcPKhP cvmRst theme-change light-theme"
                                                >
                                                    <path
                                                        fill="white"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M10 16.25C13.4518 16.25 16.25 13.4518 16.25 10C16.25 6.54822 13.4518 3.75 10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 13.4518 6.54822 16.25 10 16.25ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                                                    ></path>
                                                    <path
                                                        fill="white"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M11.875 10.625H0V9.375H11.875V10.625Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div className="fYRZaE theme-change light-theme">
                                                Base
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc-kkczzW cyBpOR">
                                <div className="sc-gZGhCx dgYKRw">
                                    <span
                                        style={{
                                            boxSizing: "border-box",
                                            display: "inline-block",
                                            overflow: "hidden",
                                            width: "initial",
                                            height: "initial",
                                            background: "none",
                                            opacity: 1,
                                            border: "0px",
                                            margin: "0px",
                                            padding: "0px",
                                            position: "relative",
                                            maxWidth: "100%",
                                        }}
                                    >
                                        <span
                                            style={{
                                                boxSizing: "border-box",
                                                display: "block",
                                                width: "initial",
                                                height: "initial",
                                                background: "none",
                                                opacity: 1,
                                                border: "0px",
                                                margin: "0px",
                                                padding: "0px",
                                                maxWidth: "100%",
                                            }}
                                        >
                                            <img
                                                alt=""
                                                aria-hidden="true"
                                                src="/img/exchange-stats-one-invisible-1.svg"
                                                style={{
                                                    display: "block",
                                                    maxWidth: "100%",
                                                    width: "initial",
                                                    height: "initial",
                                                    background: "none",
                                                    opacity: 1,
                                                    border: "0px",
                                                    margin: "0px",
                                                    padding: "0px",
                                                }}
                                            />
                                        </span>
                                        <img
                                            alt="bnbBallRocket"
                                            src="/img/exchange-stats-one-1.png"
                                            decoding="async"
                                            data-nimg="intrinsic"
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                boxSizing: "border-box",
                                                padding: 0,
                                                border: "none",
                                                margin: "auto",
                                                display: "block",
                                                width: 0,
                                                height: 0,
                                                minWidth: "100%",
                                                maxWidth: "100%",
                                                minHeight: "100%",
                                                maxHeight: "100%",
                                            }}
                                        />
                                        <noscript></noscript>
                                    </span>
                                </div>

                                <div className="sc-dhiFBQ htUhZF">
                                    <span
                                        style={{
                                            boxSizing: "border-box",
                                            display: "inline-block",
                                            overflow: "hidden",
                                            width: "initial",
                                            height: "initial",
                                            background: "none",
                                            opacity: 1,
                                            border: "0px",
                                            margin: "0px",
                                            padding: "0px",
                                            position: "relative",
                                            maxWidth: "100%",
                                        }}
                                    >
                                        <span
                                            style={{
                                                boxSizing: "border-box",
                                                display: "block",
                                                width: "initial",
                                                height: "initial",
                                                background: "none",
                                                opacity: 1,
                                                border: "0px",
                                                margin: "0px",
                                                padding: "0px",
                                                maxWidth: "100%",
                                            }}
                                        >
                                            <img
                                                alt=""
                                                aria-hidden="true"
                                                src={imageSrc}
                                                style={{
                                                    display: "block",
                                                    maxWidth: "100%",
                                                    width: "initial",
                                                    height: "initial",
                                                    background: "none",
                                                    opacity: 1,
                                                    border: "0px",
                                                    margin: "0px",
                                                    padding: "0px",
                                                }}
                                            />
                                        </span>
                                        <img
                                            alt="ethBallRocket"
                                            src="/img/exchange-stats-one-2.png"
                                            decoding="async"
                                            data-nimg="intrinsic"
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                boxSizing: "border-box",
                                                padding: 0,
                                                border: "none",
                                                margin: "auto",
                                                display: "block",
                                                width: 0,
                                                height: 0,
                                                minWidth: "100%",
                                                maxWidth: "100%",
                                                minHeight: "100%",
                                                maxHeight: "100%",
                                            }}
                                        />
                                    </span>
                                </div>

                                <div className="sc-ECa-Dv dOGPyt">
                                    <span
                                        style={{
                                            boxSizing: "border-box",
                                            display: "inline-block",
                                            overflow: "hidden",
                                            width: "initial",
                                            height: "initial",
                                            background: "none",
                                            opacity: 1,
                                            border: "0px",
                                            margin: "0px",
                                            padding: "0px",
                                            position: "relative",
                                            maxWidth: "100%",
                                        }}
                                    >
                                        <span
                                            style={{
                                                boxSizing: "border-box",
                                                display: "block",
                                                width: "initial",
                                                height: "initial",
                                                background: "none",
                                                opacity: 1,
                                                border: "0px",
                                                margin: "0px",
                                                padding: "0px",
                                                maxWidth: "100%",
                                            }}
                                        >
                                            <img
                                                alt=""
                                                aria-hidden="true"
                                                src={secondImageSrc}
                                                style={{
                                                    display: "block",
                                                    maxWidth: "100%",
                                                    width: "initial",
                                                    height: "initial",
                                                    background: "none",
                                                    opacity: 1,
                                                    border: "0px",
                                                    margin: "0px",
                                                    padding: "0px",
                                                }}
                                            />
                                        </span>
                                        <img
                                            alt="aptosBallRocket"
                                            src="/img/exchange-stats-one-3.png"
                                            decoding="async"
                                            data-nimg="intrinsic"
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                boxSizing: "border-box",
                                                padding: 0,
                                                border: "none",
                                                margin: "auto",
                                                display: "block",
                                                width: 0,
                                                height: 0,
                                                minWidth: "100%",
                                                maxWidth: "100%",
                                                minHeight: "100%",
                                                maxHeight: "100%",
                                            }}
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExchangeStatsOne;