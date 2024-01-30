import React, { useState, useEffect } from "react";
import ConnectWalletList from "./ConnectWalletList";
import Carousel from "./Carousel";
import isDark from "../../../shared/sharedComponents/ThemeChange";


const HiddenFooterBanner = ({ svgId, tab1, tab2, w3container, content2 }) => {
    const [cwRightContent, setCwRightContent] = useState({
        title: "Haven't got a wallet yet?",
        src: "https://cdn.pancakeswap.com/wallets/wallet_intro.png",
        button1: (
            <div>
                <span
                    style={{
                        backgroundColor: "none",
                    }}
                >
                    <a href="https://docs.pancakeswap.finance/get-started/wallet-guide">
                        Learn How to Connect
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id={svgId}
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                            <path d="M11 13l9 -9" />
                            <path d="M15 4h5v5" />
                        </svg>
                    </a>
                </span>
            </div>
        ),
    }); // for custom content placed on the right side of HiddenFooterBanner window + default content

    const handleWalletItemClick = (contentFunction) => {
        contentFunction(setCwRightContent);
    };

    return (
        <div className="footer-tabs theme-change light-theme">
            <div className="footer-tab-container theme-change light-theme">
                <div
                    id={tab2}
                    className="footer-tab theme-change light-theme"
                >
                    <a href={`#${tab2}`}>What's a Web3 Wallet?</a>
                    <div id={w3container}>
                        <div
                            className="footer-tab-content theme-change light-theme"
                            id={content2}
                        >
                            <div className="w3-content theme-change light-theme">
                                <Carousel />
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    id={tab1}
                    className="footer-tab theme-change light-theme"
                >
                    <a href={`#${tab1}`}>Connect Wallet</a>
                    <div className="footer-tab-content theme-change light-theme">
                        <div className="footer-tab-content-cw">
                            <div
                                className="theme-change light-theme cw-left"
                            >
                                <h3>Connect Wallet</h3>
                                <p>
                                    Start by connecting with one of the wallets
                                    below. Be sure to store your private keys or
                                    seed phrase securely. Never share them with
                                    anyone.
                                </p>
                                <div className="cw-left-grid">
                                    <ConnectWalletList
                                        onWalletItemClick={
                                            handleWalletItemClick
                                        }
                                    />
                                </div>
                            </div>
                            <div
                                className="fb-button theme-change light-theme cw-right"
                            >
                                {cwRightContent && (
                                    <div
                                        className="fb-text theme-change light-theme cw-right-content"
                                    >
                                        <h3>{cwRightContent.title}</h3>
                                        {cwRightContent.src && (
                                            <img
                                                src={cwRightContent.src}
                                                alt={cwRightContent.title}
                                                className="cw-img"
                                            />
                                        )}
                                        {cwRightContent.text && (
                                            <p
                                                className="cw-text"
                                                style={{
                                                    backgroundColor: "unset",
                                                    textAlign: "center",
                                                    boxShadow: "none",
                                                }}
                                            >
                                                {cwRightContent.text}
                                            </p>
                                        )}
                                        {cwRightContent.button1 && (
                                            <p
                                                style={{
                                                    fontWeight: "bold",
                                                    padding: "10px 12px",
                                                    borderRadius: "10px",
                                                    display: "flex",
                                                    width: "fit-content",
                                                }}
                                            >
                                                {cwRightContent.button1}
                                            </p>
                                        )}
                                        {cwRightContent.button2 && (
                                            <p
                                                style={{
                                                    fontWeight: "bold",
                                                    padding: "10px 12px",
                                                    borderRadius: "10px",
                                                    display: "flex",
                                                    width: "fit-content",
                                                }}
                                            >
                                                {cwRightContent.button2}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HiddenFooterBanner;