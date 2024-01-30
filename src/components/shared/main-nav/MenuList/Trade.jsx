const Trade = ({ title }) => {
  return (
    <>
      <div className="trade theme-change light-theme">
        <h2>
          <div className="dropdown">
            <a
              className="trade-dropdown btn btn-secondary theme-change light-theme"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="trade-drop"
            >
              {title}
            </a>
            <ul className="dropdown-menu theme-change light-theme" id="trade-menu">
              <li>
                <a
                  className=" trade-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <h2>Swap</h2>
                </a>
              </li>
              <li>
                <a
                  className=" trade-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <h2>Liquidity</h2>
                </a>
              </li>
              <li>
                <a
                  className=" trade-item dropdown-item theme-change light-theme extra-svg"
                  href="#"
                >
                  <h2>Perpetual</h2>
                  <svg
                    viewBox="0 0 24 24"
                    fill="#7a6cab"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    className="trade-drop-icon"
                  >
                    <path d="M16.3 8.09014C15.91 8.48014 15.91 9.10014 16.3 9.49014L18.2 11.3901H9C8.45 11.3901 8 11.8401 8 12.3901C8 12.9401 8.45 13.3901 9 13.3901H18.2L16.3 15.2901C15.91 15.6801 15.91 16.3001 16.3 16.6901C16.69 17.0801 17.31 17.0801 17.7 16.6901L21.29 13.1001C21.68 12.7101 21.68 12.0801 21.29 11.6901L17.7 8.09014C17.31 7.70014 16.69 7.70014 16.3 8.09014ZM4 19.3901H11C11.55 19.3901 12 19.8401 12 20.3901C12 20.9401 11.55 21.3901 11 21.3901H4C2.9 21.3901 2 20.4901 2 19.3901V5.39014C2 4.29014 2.9 3.39014 4 3.39014H11C11.55 3.39014 12 3.84014 12 4.39014C12 4.94014 11.55 5.39014 11 5.39014H4V19.3901Z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className=" trade-item dropdown-item theme-change light-theme extra-svg"
                  href="#"
                >
                  <h2>Bridge</h2>
                  <svg
                    viewBox="0 0 24 24"
                    fill="#7a6cab"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    className="trade-drop-icon"
                  >
                    <path d="M16.3 8.09014C15.91 8.48014 15.91 9.10014 16.3 9.49014L18.2 11.3901H9C8.45 11.3901 8 11.8401 8 12.3901C8 12.9401 8.45 13.3901 9 13.3901H18.2L16.3 15.2901C15.91 15.6801 15.91 16.3001 16.3 16.6901C16.69 17.0801 17.31 17.0801 17.7 16.6901L21.29 13.1001C21.68 12.7101 21.68 12.0801 21.29 11.6901L17.7 8.09014C17.31 7.70014 16.69 7.70014 16.3 8.09014ZM4 19.3901H11C11.55 19.3901 12 19.8401 12 20.3901C12 20.9401 11.55 21.3901 11 21.3901H4C2.9 21.3901 2 20.4901 2 19.3901V5.39014C2 4.29014 2.9 3.39014 4 3.39014H11C11.55 3.39014 12 3.84014 12 4.39014C12 4.94014 11.55 5.39014 11 5.39014H4V19.3901Z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="trade-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <h2>Limit (V2)</h2>
                </a>
              </li>
              <li>
                <a
                  className="trade-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <h2>Buy crypto</h2>
                </a>
              </li>
              <li>
                <a
                  className="trade-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <h2>Trading Reward</h2>
                </a>
              </li>
            </ul>
          </div>
        </h2>
      </div>
    </>
  );
};

export default Trade;
