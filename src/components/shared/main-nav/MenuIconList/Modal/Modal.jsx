import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import ToggleSwitch from '../../../sharedComponents/ToggleSwitchNav';

const ModalNav = ({}) => {
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState('');
  const [isChecked, setIsChecked] = useState(false)
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateTheme = () => {
    const targetDiv = document.getElementById('main-nav-section');

    if (targetDiv) {
      setTheme(targetDiv.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme');
      setIsChecked(targetDiv.classList.contains('dark-theme') ? true : false);
    }
  };

  const selectTransactionSpeed = (speedNumber) => {
    document.querySelectorAll('.transaction-speed-btn').forEach((button) => {
      button.classList.remove('selected');
    });

    const selectedButton = document.getElementById('speedBtn' + speedNumber);
    if (selectedButton) {
      selectedButton.classList.add('selected');
    }
  };

  const handleButtonClick = (speedNumber) => {
    return () => {
      selectTransactionSpeed(speedNumber);
    };
  };

  useEffect(() => {
    updateTheme();

    document.addEventListener('click', updateTheme);

    return () => {
      document.removeEventListener('click', updateTheme);
    };
  }, []);

  useEffect(() => {
    selectTransactionSpeed(1);
  }, [theme]);

    return (
        <>

        <button onClick={handleShow}
            className="settings-btn"
          >
            <h2>
              <i className="fa-solid fa-gear icon-list"></i>
            </h2>
          </button>

          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className={`modal-header theme-change ${theme}`}>
          <h1 className={`modal-title theme-change ${theme}`} id="exampleModalLabel">
                    Settings
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      color="#1FC7D7"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-bcPKhP bIlHZF"
                    >
                      <path
                        fill="currentColor"
                        d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"
                      ></path>
                    </svg>
                  </button>
        </Modal.Header>
        <Modal.Body className={`theme-change ${theme}`}>
        <h5 className="modal-subtitle">GLOBAL</h5>
        <div className="toggle-list">
                    <div className={`text-toggle theme-change ${theme}`}>
                      Dark mode
                      <ToggleSwitch isCheck={isChecked}/>
                    </div>
                    <div className={`text-toggle theme-change ${theme}`}>
                      Subgraph Health Indicator{" "}
                      <span className={`toggle-modal theme-change ${theme}`}>
                        {" "}
                        <label className={`switch-generic theme-change ${theme}`}>
                          <input type="checkbox" checked readOnly/>
                          <span className={`slider-generic round theme-change ${theme}`}></span>
                        </label>
                      </span>
                    </div>
                    <div className={`text-toggle theme-change ${theme}`}>
                      <span>
                        Show username{" "}
                        <svg
                          viewBox="0 0 24 24"
                          width="16px"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sc-bcPKhP Eouil text-toggle-icon"
                          color=""
                        >
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04"
                            fill="#afa4c7 !important"
                          ></path>
                        </svg>
                      </span>{" "}
                      <span className={`toggle-modal theme-change ${theme}`}>
                        {" "}
                        <label className={`switch-generic theme-change ${theme}`}>
                          <input type="checkbox" checked readOnly/>
                          <span className={`slider-generic round theme-change ${theme}`}></span>
                        </label>
                      </span>
                    </div>
                    <div className={`text-toggle theme-change ${theme}`}>
                      <span>
                        Token Risk Scanning{" "}
                        <svg
                          viewBox="0 0 24 24"
                          width="16px"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sc-bcPKhP Eouil text-toggle-icon"
                        >
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04"
                            fill="#afa4c7 !important"
                          ></path>
                        </svg>{" "}
                      </span>{" "}
                      <span className={`toggle-modal theme-change ${theme}`}>
                        {" "}
                        <label className={`switch-generic theme-change ${theme}`}>
                          <input type="checkbox" checked readOnly/>
                          <span className={`slider-generic round theme-change ${theme}`}></span>
                        </label>
                      </span>
                    </div>
                    <div className={`text-toggle theme-change ${theme}`}>
                      <span>
                        Default Transaction Speed (GWEI){" "}
                        <svg
                          viewBox="0 0 24 24"
                          width="16px"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sc-bcPKhP Eouil text-toggle-icon"
                        >
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04"
                            fill="#afa4c7 !important"
                          ></path>
                        </svg>{" "}
                      </span>{" "}
                      <span className="toggle"></span>
                    </div>
                  </div>
                  <div className="transaction-speed-container">
                    <button
                      id="speedBtn1"
                      className={`transaction-speed-btn selected theme-change ${theme}`}
                      onClick={handleButtonClick(1)}
                    >
                      Default
                    </button>
                    <button
                      id="speedBtn2"
                      className={`transaction-speed-btn theme-change ${theme}`}
                      onClick={handleButtonClick(2)}
                    >
                      Standard (3)
                    </button>
                    <button
                      id="speedBtn3"
                      className={`transaction-speed-btn theme-change ${theme}`}
                      onClick={handleButtonClick(3)}
                    >
                      Fast (4)
                    </button>
                    <button
                      id="speedBtn4"
                      className={`transaction-speed-btn theme-change ${theme}`}
                      onClick={handleButtonClick(4)}
                    >
                      Instant (5)
                    </button>
                  </div>
        </Modal.Body>
        <Modal.Footer className={`theme-change ${theme}`}>
        </Modal.Footer>
      </Modal>
      </>
    );
  };
  
  export default ModalNav;