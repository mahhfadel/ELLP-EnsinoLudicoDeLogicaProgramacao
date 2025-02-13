import React from "react";

import "./styles/CardOficinas.css";
import imagemCapa from "../assets/html5.png";

import { Link } from "react-router-dom";

function CardOficinas() {
    return (
        <Link className="bodyCardOficina" to="/verOficina">
            <img className="imagemCapa" src={imagemCapa}></img>
            <div className="titleCardOficina">
                <p className="nameCardOficina"> Lorem Ipsum</p>
                <p className="dataCardOficina">xx/xx/xxxx</p>
            </div>
            <p className="descriptionCardOficina">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
        </Link>
    );
}

export default CardOficinas;
