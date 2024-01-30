import React, { useRef } from "react";
import "./news.css";

const News = () => {
    const cardsContainerRef = useRef(null);

    const cardData = [
        {
            imageSrc: "../../../../../img/sec10-news-img-1.jpg",
            title: "From [Cointelegraph]",
            date: "Oct 30, 2023",
            description:
                "PancakeSwap adds portfolio manager function in partnership with Bril",
            content:
                "Decentralized crypto exchange PancakeSwap now has portfolio manager functionality, according to an Oct. 30 announcement. The feature has been added in partnership with decentralized finance (DeFi) protocol Bril Finance.",
            externalLink:
                "https://cointelegraph.com/news/pancakeswap-adds-portfolio-manager-function-partnership-bril",
        },
        {
            imageSrc: "../../../../../img/sec10-news-img-2.jpg",
            title: "From [Decrypt]",
            date: "Aug 31, 2023",
            description:
                "PancakeSwap Expands to Coinbase-Incubated Base Network",
            content:
                "PancakeSwap joins DeFi heavyweights like Uniswap, SushiSwap, and 1inch launching on the buzzy layer-2 network Base.",
            externalLink:
                "https://decrypt.co/154426/pancakeswap-expands-coinbase-incubated-base-network",
        },
        {
            imageSrc: "../../../../../img/sec10-news-img-3.jpg",
            title: "From [CoinDesk]",
            date: "Aug 10, 2023",
            description:
                "PancakeSwap Deploys on Ethereum Scaling Network Arbitrum in Expansion Drive",
            content:
                "The decentralized exchange has joined several networks this year in the search for new users and revenue streams.",
            externalLink:
                "https://cointelegraph.com/news/pancakeswap-wants-to-cap-token-inflation-rate-between-3-to-5-per-annum",
        },
        {
            imageSrc: "../../../../../img/sec10-news-img-4.jpg",
            title: "From [Blockwords]",
            date: "Jul 28, 2023",
            description: "zkSync Era welcomes PancakeSwap to the ecosystem",
            content:
                "ZkSync Era will be the third zero-knowledge platform on which PancakeSwap will launch.",
            externalLink: "https://blockworks.co/news/zksync-era-pancakeswap",
        },
        {
            imageSrc: "../../../../../img/sec10-news-img-5.png",
            title: "From [Google Cloud]",
            date: "Jul 11, 2023",
            description:
                "PancakeSwap: Supporting the DeFi ecosystem with an always-available infrastructure",
            content:
                "PancakeSwap implements Google Cloud to maintain platform availability at all times so that users can trade seamlessly around the clock.",
            externalLink: "https://cloud.google.com/customers/pancakeswap",
        },
        {
            imageSrc: "../../../../../img/sec10-news-img-6.jpg",
            title: "From [CoinTelegraph]",
            date: "May 30, 2023",
            description: "Decentralized exchange PancakeSwap moves into GameFi",
            content:
                "The DEX has partnered with BNB GameFi protocol Mobox to create a blockchain tower defense game.",
            externalLink:
                "https://cointelegraph.com/news/pancakeswap-seeks-300-million-cake-token-supply-revamp",
        },
    ];

    const handleScroll = (direction) => {
        const cardsContainer = cardsContainerRef.current;
        const currentScrollPosition = cardsContainer.scrollLeft;
        const scrollAmount = 300;

        let desiredScrollPosition;
        if (direction === "left") {
            desiredScrollPosition = Math.max(
                0,
                currentScrollPosition - scrollAmount
            );
        } else {
            desiredScrollPosition = currentScrollPosition + scrollAmount;
        }

        cardsContainer.scrollTo({
            left: desiredScrollPosition,
            behavior: "smooth",
        });
    };

    return (
        <section
            id="news"
            className="news-first-container theme-change light-theme"
            style={{ boxSizing: "border-box" }}
        >
            <section className="news theme-change light-theme">
                <div className="news-title">
                    <div className="featured theme-change light-theme">
                        Featured
                    </div>
                    <div className="news- theme-change light-theme">News</div>
                </div>
                <div className="news-carousel-container">
                    <div className="arrow-container">
                        <div
                            className="arrow arrow-left"
                            onClick={() => handleScroll("left")}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                color="var(--colors-textSubtle)"
                                width="20px"
                                xmlns="http://www.w3.org/2000/svg"
                                className="sc-bcPKhP Eouil"
                            >
                                <path d="M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div
                        className="news-cards-container"
                        ref={cardsContainerRef}
                    >
                        {cardData.map((data, index) => (
                            <a
                                key={index}
                                className="card theme-change light-theme"
                                href={data.externalLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="card-img-container">
                                    <img src={data.imageSrc} alt="Image" />
                                </div>
                                <div className="card-text-container theme-change light-theme">
                                    <div className="text-title-date theme-change light-theme">
                                        <div className="text-title theme-change light-theme">
                                            {data.title}
                                        </div>
                                        <div className="text-date theme-change light-theme">
                                            {data.date}
                                        </div>
                                    </div>
                                    <div className="text-description theme-change light-theme">
                                        {data.description}
                                    </div>
                                    <div className="text-content theme-change light-theme">
                                        {data.content}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className="arrow-container">
                        <div
                            className="arrow arrow-right"
                            onClick={() => handleScroll("right")}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                color="var(--colors-textSubtle)"
                                width="20px"
                                xmlns="http://www.w3.org/2000/svg"
                                className="sc-bcPKhP Eouil"
                            >
                                <path d="M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default News;
