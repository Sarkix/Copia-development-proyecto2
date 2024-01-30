const Chain = () => {
    return (
      <>
        <div className="chain">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-danger dropdown-toggle theme-change light-theme"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="chain-btn"
            >
              <img
                src="src/assets/bnb.png"
                className="dropdown-img-btn"
                id="chain-img-btn"
              />
              BNB Smart Chain
            </button>
            <ul
              className="chain-menu dropdown-menu theme-change light-theme"
              id="chain-select"
            >
              <li>
                <h6 className="chain-item dropdown-header theme-change light-theme">
                  Select a Network
                </h6>
              </li>
              <li>
                <hr className="chain-item dropdown-divider theme-change light-theme" />
              </li>
              <li>
                <a
                  className="chain-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <img src="src/assets/bnb.png" className="dropdown-img" /> BNB
                  Smart Chain
                </a>
              </li>
              <li>
                <a
                  className="chain-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <img src="src/assets/eth.png" className="dropdown-img" />
                  Ethereum
                </a>
              </li>
              <li>
                <a
                  className="chain-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <img src="src/assets/pol.png" className="dropdown-img" />
                  Polygon
                </a>
              </li>
              <li>
                <a
                  className="chain-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <img src="src/assets/zKsync.png" className="dropdown-img" />
                  zKsync
                </a>
              </li>
              <li>
                <a
                  className="chain-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <img src="src/assets/Arbitrum.png" className="dropdown-img" />
                  Arbitrum
                </a>
              </li>
              <li>
                <a
                  className="chain-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <img src="src/assets/Linea.png" className="dropdown-img" />
                  Linea Mainnet
                </a>
              </li>
              <li>
                <a
                  className="chain-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <img src="src/assets/Base.png" className="dropdown-img" />
                  Base
                </a>
              </li>
              <li>
                <a
                  className="chain-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <img src="src/assets/bnb.png" className="dropdown-img" />
                  opBNB Mainnet
                </a>
              </li>
              <li>
                <a
                  className="chain-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <img src="src/assets/aptos.png" className="dropdown-img" />
                  Aptos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  };
  
  export default Chain;
  


