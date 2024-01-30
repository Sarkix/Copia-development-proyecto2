const Game = ({title}) => {
    return (
        <>
       <div className="game theme-change light-theme">
        <h2>
          <div className="dropdown">
            <a
              className="game-dropdown btn btn-secondary theme-change light-theme"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="game-drop"
            >
              {title}
            </a>
            <ul className="dropdown-menu theme-change light-theme" id="game-menu">
              <li>
                <a
                  className=" game-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <h2>Prediction (BETA)</h2>
                </a>
              </li>
              <li>
                <a
                  className=" game-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <h2>Lottery</h2>
                </a>
              </li>
              <li>
                <a
                  className=" game-item dropdown-item theme-change light-theme extra-svg"
                  href="#"
                >
                  <h2>Pottery (BETA)</h2>
                </a>
              </li>
              <li>
                <a
                  className=" game-item dropdown-item theme-change light-theme extra-svg"
                  href="#"
                >
                  <h2>Pancake Protectors</h2>
                </a>
              </li>
            </ul>
          </div>
        </h2>
      </div>
      </>
    );
  };
  
  export default Game;