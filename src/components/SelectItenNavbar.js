import React from "react";

import "./styles/SelectItemNavbar.css";

function SelectItemNavbar({ textElement, icon, select, onClick }) {
    const handleClick = () => {
        onClick();
    };
    return (
        <div
            className="element"
            onClick={handleClick}
            style={{ backgroundColor: select ? "#f79335" : "transparent" }}
        >
            {icon}
            {textElement}
        </div>
    );
}

export default SelectItemNavbar;
