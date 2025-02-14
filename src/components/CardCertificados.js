import React from "react";

import "./styles/CardCertificados.css";
import imagemCapa from "../assets/html5.png";

import { Link } from "react-router-dom";

function CardCertificados({ workshop }) {
    return (
        <Link className="bodyCardOficina" to="/verCertificado" state={{workshop}}>
            <img className="imagemCapa" src={workshop.imageUri}></img>
            <div className="titleCardOficina">
                <p className="nameCardOficina">{workshop.name}</p>
                <p className="dataCardOficina"> {new Date(workshop.date).toLocaleDateString('pt-BR')}</p>
            </div>
            <button className="buttonSendCertificate">
                Enviar certificado
            </button>
        </Link>
    );
}

export default CardCertificados;
