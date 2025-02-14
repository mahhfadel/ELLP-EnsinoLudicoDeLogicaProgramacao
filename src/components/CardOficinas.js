import React from "react";

import "./styles/CardOficinas.css";
import imagemCapa from "../assets/html5.png";

import { Link } from "react-router-dom";

function CardOficinas({ workshop }) {
    return (
        <Link className="bodyCardOficina" to="/verOficina" state={{ workshop }}>
            <img className="imagemCapa" src={workshop.imageUri}></img>
            <div className="titleCardOficina">
                <p className="nameCardOficina">{workshop.name}</p>
                <p className="dataCardOficina"> {new Date(workshop.date).toLocaleDateString('pt-BR')}</p>
            </div>
            <p className="descriptionCardOficina">
                {workshop.description}
            </p>
        </Link>
    );
}

export default CardOficinas;
