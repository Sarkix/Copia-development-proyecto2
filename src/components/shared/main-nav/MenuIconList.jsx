import React, { useState, useRef, useEffect } from "react"; 
import Exchange from "./MenuIconList/Exchange";
import Language from "./MenuIconList/Language";
import Settings from "./MenuIconList/Modal/Settings";
import Chain from "./MenuIconList/Chain";
import HiddenFooterBanner from "../../pages/home/footerbanner/HiddenFooterBanner.jsx";


const MenuIconList = () => {
  const [isHidden, setIsHidden] = useState(true);
    const containerRef = useRef(null);
    const overlayRef = useRef(null);

    const toggleHidden = () => {
        setIsHidden(!isHidden);
    };

    const handleOverlayClick = () => {
        setIsHidden(true);
    };

    const handleOutsideClick = (event) => {
        if (
            containerRef.current &&
            overlayRef.current &&
            !containerRef.current.contains(event.target) &&
            event.target === overlayRef.current
        ) {
            handleOverlayClick();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [isHidden]);


  return (
    <>
      <div className="menu-icon-list">
        <Exchange />
        <Language />
        <Settings />
        <Chain />

        <div className="wallet">
            <button className="btn-main-blue theme-change light-theme" id="connectw1"
            onClick={toggleHidden}
            >
            Connect <span className="text-hidden">Wallet</span>
            </button>
        </div>
        

        <div
                className="footerbanner-hidden-section"
                id="footer-banner-hidden-section1"
            >
                <div
                    className="theme-change light-theme"
                    style={{ display: isHidden ? "none" : "block" }}
                >
                    <HiddenFooterBanner svgId="svg1" tab1="tab1-1" tab2="tab2-1" w3container="w3container1" content2="content2-1"/>
                    <div
                        className="overlay"
                        ref={overlayRef}
                        onClick={handleOverlayClick}
                    ></div>
                </div>
            </div>
        </div>
    </>
  );
};

export default MenuIconList;