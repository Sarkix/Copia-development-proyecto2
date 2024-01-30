import React, { useState } from "react";
import metamaskImg from "./FooterBannerAssets/metamaskImg.png";
import trustImg from "./FooterBannerAssets/trustImg.png";
import mathImg from "./FooterBannerAssets/mathImg.png";
import tokenImg from "./FooterBannerAssets/tokenImg.png";
import safeImg from "./FooterBannerAssets/safeImg.png";
import coin98Img from "./FooterBannerAssets/coin98Img.png";

const ConnectWalletList = ({ onWalletItemClick }) => {
    const footerBannerData = [
        {
            src: "https://assets.pancakeswap.finance/web/wallets/metamask.png",
            description: "Metamask",
        },
        {
            src: "https://assets.pancakeswap.finance/web/wallets/binance.png",
            description: "Binance Wallet",
        },
        {
            src: "https://assets.pancakeswap.finance/web/wallets/coinbase.png",
            description: "Coinbase Wallet",
        },
        {
            src: "https://assets.pancakeswap.finance/web/wallets/trust.png",
            description: "Trust Wallet",
        },
        {
            src: "https://assets.pancakeswap.finance/web/wallets/walletconnect.png ",
            description: "WalletConnect",
        },
        {
            src: "https://assets.pancakeswap.finance/web/wallets/opera.png ",
            description: "Opera Wallet",
        },
        {
            src: "https://assets.pancakeswap.finance/web/wallets/brave.png",
            description: "Brave Wallet",
        },

        {
            src: "https://assets.pancakeswap.finance/web/wallets/rabby.png",
            description: "Rabby Wallet",
        },
        {
            src: "https://assets.pancakeswap.finance/web/wallets/mathwallet.png",
            description: "MathWallet",
        },
        {
            src: "https://assets.pancakeswap.finance/web/wallets/tokenpocket.png",
            description: "TokenPocket",
        },
        {
            src: "https://assets.pancakeswap.finance/web/wallets/safepal.png",
            description: "SafePal",
        },
        {
            src: "https://assets.pancakeswap.finance/web/wallets/coin98.png",
            description: "Coin98",
        },
        {
            src: "https://assets.pancakeswap.finance/web/wallets/blocto.png",
            description: "Blocto",
        },
        {
            src: "https://assets.pancakeswap.finance/web/wallets/ledger.png",
            description: "Ledger",
        },
    ];

    const [showMore, setShowMore] = useState(false);
    const [showSVG, setShowSVG] = useState(true);

    const toggleShowMore = () => {
        setShowMore(!showMore);
        setShowSVG(true);
    };

    const handleWalletItemClick = (description) => {
        let walletContent = {};

        switch (description) {
            case "Metamask":
                walletContent = {
                    title: "Metamask is not installed",
                    button1: "Install",
                    src: metamaskImg,
                };
                break;
            case "Binance Wallet":
                walletContent = {
                    title: "Binance Wallet is not installed",
                    text: "Please install the Binance Wallet browser extension to connect the Binance Wallet wallet.",
                    button1: "Setup Guide",
                    button2: "Install",
                };

                break;
            case "Coinbase Wallet":
                walletContent = {
                    title: "Opening Coinbase Wallet",
                    text: "Please confirm in Coinbase Wallet",
                    src: "https://assets.pancakeswap.finance/web/wallets/coinbase.png",
                };
                break;

            case "Trust Wallet":
                walletContent = {
                    title: "Trust Wallet is not installed",
                    button1: "Setup Guide",
                    button2: "Install",
                    src: trustImg,
                };
                break;

            case "WalletConnect":
                walletContent = {
                    title: "Opening WalletConnect",
                    text: "Please confirm in WalletConnect",
                    src: "https://assets.pancakeswap.finance/web/wallets/walletconnect.png",
                };
                break;
            case "Opera Wallet":
                walletContent = {
                    title: "Opera Wallet is not installed",
                    text: "Please install the Opera Wallet browser extension to connect the Opera Wallet wallet.",
                    button1: "Install",
                };
                break;

            case "Brave Wallet":
                walletContent = {
                    title: "Brave Wallet is not installed",
                    text: "Please install the Brave Wallet browser extension to connect the Brave Wallet wallet.",
                    button1: "Install",
                };
                break;

            case "Rabby Wallet":
                walletContent = {
                    title: "Rabby Wallet is not installed",
                    text: "Please install the Rabby Wallet browser extension to connect the Rabby Wallet wallet.",
                    button1: "Setup Guide",
                    button2: "Install",
                };
                break;

            case "MathWallet":
                walletContent = {
                    title: "MathWallet is not installed",
                    src: mathImg,
                };
                break;

            case "TokenPocket":
                walletContent = {
                    title: "TokenPocket is not installed",
                    src: tokenImg,
                };
                break;

            case "SafePal":
                walletContent = {
                    title: "SafePal is not installed",
                    src: safeImg,
                    button1: "Install",
                };
                break;

            case "Coin98":
                walletContent = {
                    title: "Coin98 is not installed",
                    src: coin98Img,
                };
                break;

            case "Blocto":
                walletContent = {
                    src: "https://assets.pancakeswap.finance/web/wallets/blocto.png",
                    title: "Opening Blocto",
                    text: "Please confirm in Blocto",
                };
                break;

            case "Ledger":
                walletContent = {
                    src: "https://assets.pancakeswap.finance/web/wallets/ledger.png",
                    title: "Opening Ledger",
                    text: "Please confirm in Ledger",
                };
                break;
        }

        onWalletItemClick((setContent) => setContent(walletContent));
    };

    return (
        <div className="cw-cards">
            {footerBannerData
                .slice(0, showMore ? footerBannerData.length : 8)
                .map((item, index) => (
                    <div
                        key={index}
                        className="cw-card theme-change light-theme"
                        onClick={() =>
                            handleWalletItemClick(item.description, index)
                        }
                    >
                        <img
                            src={item.src}
                            alt={item.description}
                            width="50"
                            height="50"
                            style={{
                                borderRadius: "12px",
                            }}
                        />
                        <p>{item.description}</p>
                    </div>
                ))}

            {!showMore && (
                <div
                    className="cw-card theme-change light-theme"
                    onClick={toggleShowMore}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon-dots theme-change light-theme"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    </svg>
                    <p>More</p>
                </div>
            )}
        </div>
    );
};

export default ConnectWalletList;
