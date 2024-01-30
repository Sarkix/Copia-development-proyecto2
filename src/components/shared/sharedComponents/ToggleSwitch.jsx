import React from "react";
import ThemeChange from "./ThemeChange";
import "../main-nav/MainNavbarStyle.css";
import "../sharedComponents/sharedStyles/style.css";
import "../sharedComponents/sharedStyles/modal.css";

const ToggleSwitch = () => {
    return (
        <>
            <label className="switch">
                <input type="checkbox" id="main" />
                <span className="slider round">
                    <div className="slider-images">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon-ligth theme-change light-theme"
                            id="icon-sun"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#27262c"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" />
                            <path d="M6.343 17.657l-1.414 1.414" />
                            <path d="M6.343 6.343l-1.414 -1.414" />
                            <path d="M17.657 6.343l1.414 -1.414" />
                            <path d="M17.657 17.657l1.414 1.414" />
                            <path d="M4 12h-2" />
                            <path d="M12 4v-2" />
                            <path d="M20 12h2" />
                            <path d="M12 20v2" />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon-light theme-change light-theme"
                            id="icon-moon"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#9a6aff"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="" />
                            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                        </svg>
                    </div>
                </span>
            </label>
            <ThemeChange id="main" />
        </>
    );
};

export default ToggleSwitch;
