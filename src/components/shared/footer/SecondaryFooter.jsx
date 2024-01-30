import BunnyButton from "../sharedComponents/BunnyButton"
import StandardButton from "../sharedComponents/StandarButton"
import ToggleSwitch from "../sharedComponents/ToggleSwitch";
import './FooterStyle.css'
import '../sharedComponents/sharedStyles/style.css';
import LanguageMenu from "./LanguageMenu";


const SecondaryFooter = () => {
    

    return (
        <div className="secondary-footer">
            <img src='src\components\shared\footer\FooterAssets\footer-logo.png'id="footer-logo-hidden" />
            <hr id="footer-separator3"/>
            <div className="footer-buttons">
                <div className="footer-left">
                    <ToggleSwitch/>
                    <LanguageMenu />
                </div>
                <div className="footer-rigth">
                    <BunnyButton />
                    <StandardButton href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56" text="Buy CAKE →" />
                </div>
            </div>
            <hr id="footer-separator2"/>
        </div>
    );
};

export default SecondaryFooter;
