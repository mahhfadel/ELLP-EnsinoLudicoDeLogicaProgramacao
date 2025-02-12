import React from "react";
import logo from "../assets/logo.png";
import ellpinho from "../assets/ellpinho_v2.png";

import "./styles/BaseAuthScreen.css";

function BaseAuthScreen({ children }) {
    return (
        <div className="baseAuthContainer">
            <div className="baseAuthLeft">
                <img className="logo" src={logo} />
                <img className="ellpinho" src={ellpinho} />
            </div>
            <div className="baseAuthRight">{children}</div>
        </div>
    );
}

export default BaseAuthScreen;
