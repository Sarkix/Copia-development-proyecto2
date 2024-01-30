const Earn = ({ title }) => {
  return (
    <>
      <div className="earn-nav theme-change light-theme">
        <h2>
          <div className="dropdown">
            <a
              className="earn-dropdown btn btn-secondary theme-change light-theme"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="earn-drop"
            >
              {title}
            </a>
            <ul className="dropdown-menu theme-change light-theme" id="earn-menu">
              <li>
                <a
                  className=" earn-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <h2>Farms</h2>
                </a>
              </li>
              <li>
                <a
                  className=" earn-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <h2>Pools</h2>
                </a>
              </li>
              <li>
                <a
                  className=" earn-item dropdown-item theme-change light-theme extra-svg"
                  href="#"
                >
                  <h2>Position Manager</h2>
                </a>
              </li>
              <li>
                <a
                  className=" earn-item dropdown-item theme-change light-theme extra-svg"
                  href="#"
                >
                  <h2>Liquid Staking</h2>
                </a>
              </li>
              <li>
                <a
                  className="earn-item dropdown-item theme-change light-theme"
                  href="#"
                >
                  <h2>Simple Staking</h2>
                </a>
              </li>
            </ul>
          </div>
        </h2>
      </div>
    </>
  );
};

export default Earn;
