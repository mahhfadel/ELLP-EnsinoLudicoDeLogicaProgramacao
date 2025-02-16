import React from "react";

import "./styles/SelectItemNavbar.css";

function SelectItemNavbar({ textElement, icon, select, onClick }) {
    const handleClick = () => {
        console.log("Elemento foi clicado!");
    };
    return (
        <div
            className="element"
            onClick={handleClick}
            style={{ backgroundColor: select ? "#f79335" : "transparent" }}
            onClick={onClick}
        >
            {icon}
            {textElement}
        </div>
    );
}

export default SelectItemNavbar;
