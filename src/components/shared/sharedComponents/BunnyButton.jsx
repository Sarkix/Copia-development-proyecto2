const BunnyButton = ({ href, text }) => {
    return (
      <div className='dollar-link'>
          <a href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56">
                <img src="src\components\shared\footer\FooterAssets\footer-mini-logo.png" style={{
                    width:"40px",
                    height: "40px"
                }}/>
              <p>$2.383</p>
          </a>
      </div>
    );
  };
  
  export default BunnyButton;