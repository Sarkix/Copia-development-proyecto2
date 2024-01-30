import './FooterStyle.css'

const FooterList = () => {
    const sections = [
        { 
        footerTitle: 'ECOSYSTEM',
        footerListLinks: [
            {label: 'Trade', url: 'https://pancakeswap.finance/swap'},
            {label: 'Earn', url: 'https://pancakeswap.finance/farms'},
            {label: 'Game', url: 'https://pancakeswap.games/'},
            {label: 'NFT', url: 'https://pancakeswap.finance/nfts'},
            {label: 'Tokenomics', url: 'https://docs.pancakeswap.finance/governance-and-tokenomics/cake-tokenomics'},
            {label: 'Litepaper', url: 'https://assets.pancakeswap.finance/litepaper/v2litepaper.pdf'},
            {label: 'CAKE Emission Projection', url: 'https://analytics.pancakeswap.finance/'},
            {label: 'Merchandise', url: 'https://merch.pancakeswap.finance/'},
            ]
        },

        { 
            footerTitle: 'BUSINESS',
            footerListLinks: [
                {label: 'Farms And Syrup Pools', url: 'https://docs.pancakeswap.finance/ecosystem-and-partnerships/business-partnerships/syrup-pools-and-farms'},
                {label: 'IFO', url: 'https://docs.pancakeswap.finance/ecosystem-and-partnerships/business-partnerships/initial-farm-offerings-ifoshttps://docs.pancakeswap.finance/ecosystem-and-partnerships/business-partnerships/initial-farm-offerings-ifos'},
                {label: 'NFT Marketplace', url: 'https://docs.pancakeswap.finance/ecosystem-and-partnerships/business-partnerships/nft-market-applications'},
            ]
        },

        { 
            footerTitle: 'DEVELOPERS',
            footerListLinks: [
                {label: 'Contributing', url: 'https://docs.pancakeswap.finance/developers/contributing'},
                {label: 'Github', url: 'https://github.com/pancakeswap'},
                {label: 'Bug Bounty', url: 'https://docs.pancakeswap.finance/developers/bug-bounty'},
            ]
        },

        { 
            footerTitle: 'SUPPORT',
            footerListLinks: [
                {label: 'Contact', url: 'https://docs.pancakeswap.finance/contact-us/customer-support'},
                {label: 'Troubleshooting', url: 'https://docs.pancakeswap.finance/readme/help/troubleshooting'},
                {label: 'Documentation', url: 'https://docs.pancakeswap.finance/'},
            ]
        },

        { 
            footerTitle: 'ABOUT',
            footerListLinks: [
                {label: 'Terms', url: 'https://pancakeswap.finance/terms-of-service'},
                {label: 'Blog', url: 'https://blog.pancakeswap.finance/'},
                {label: 'Brand Assets', url: 'https://docs.pancakeswap.finance/ecosystem-and-partnerships/brand'},
                {label: 'Careers', url: 'https://docs.pancakeswap.finance/team/become-a-chef'},
            ]
        }
    ]

    return (
        <div className="footer-links-container" >
            {sections.map((section, index) => (
                <div key={index} className="footer-list-section">
                    <h2 className="footer-title" >{section.footerTitle}</h2>
                    <ul>
                        {section.footerListLinks.map((link, linkIndex) => (
                        <li key={linkIndex} className="footer-linked" >
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.label}
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
                
                ))}
            <img src='./src\components\shared\footer\FooterAssets\footer-logo-reduced.png' id="footer-reduced-logo" />
            <img src='src\components\shared\footer\FooterAssets\footer-logo.png'id="footer-logo" />
        </div>
    )

}

export default FooterList;