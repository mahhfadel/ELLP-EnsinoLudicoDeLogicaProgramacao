import React from "react";

import "./styles/CardCertificados.css";
import imagemCapa from "../assets/html5.png";

function CardCertificados() {
    return (
        <div className="bodyCardOficina">
            <img className="imagemCapa" src={imagemCapa}></img>
            <div className="titleCardOficina">
                <p className="nameCardOficina"> Lorem Ipsum</p>
                <p className="dataCardOficina">xx/xx/xxxx</p>
            </div>
            <button className="buttonSendCertificate">
                Enviar certificado
            </button>
        </div>
    );
}

export default CardCertificados;
