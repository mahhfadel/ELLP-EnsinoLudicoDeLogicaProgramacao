import React from "react";

import "./styles/CardCertificados.css";
import imagemCapa from "../assets/html5.png";

import { Link } from "react-router-dom";

function CardCertificados() {
    return (
        <Link className="bodyCardOficina" to="/verCertificado">
            <img className="imagemCapa" src={imagemCapa}></img>
            <div className="titleCardOficina">
                <p className="nameCardOficina"> Lorem Ipsum</p>
                <p className="dataCardOficina">xx/xx/xxxx</p>
            </div>
            <button className="buttonSendCertificate">
                Enviar certificado
            </button>
        </Link>
    );
}

export default CardCertificados;
