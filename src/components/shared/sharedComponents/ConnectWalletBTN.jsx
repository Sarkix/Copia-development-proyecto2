import React, { useState, useRef, useEffect } from "react";
import HiddenFooterBanner from "../../pages/home/footerbanner/HiddenFooterBanner.jsx"
import "../../pages/home/footerbanner/FooterBannerStyle.css"

const ConnectWalletButton = () => {
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
        <div className="connect-wallet">
            <button
                className="btn-main-blue"
                id="button-s11"
                onClick={toggleHidden}
            >
                Connect Wallet
            </button>
            <div className="footerbanner-hidden-section">
                <div className="theme-change light-theme" style={{ display: isHidden ? "none" : "block" }}>
                    <HiddenFooterBanner />
                    <div className="overlay" ref={overlayRef} onClick={handleOverlayClick}></div>
                </div>
            </div>
        </div>
    );
};

export default ConnectWalletButton;
