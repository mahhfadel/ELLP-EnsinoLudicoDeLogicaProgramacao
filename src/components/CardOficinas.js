import React from "react";

import "./styles/CardOficinas.css";
import imagemCapa from "../assets/html5.png";

function CardOficinas() {
    return (
        <div className="bodyCardOficina">
            <img className="imagemCapa" src={imagemCapa}></img>
            <div className="titleCardOficina">
                <p className="nameCardOficina"> Lorem Ipsum</p>
                <p className="dataCardOficina">xx/xx/xxxx</p>
            </div>
            <p className="descriptionCardOficina">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
        </div>
    );
}

export default CardOficinas;
