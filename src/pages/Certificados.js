import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import CardCertificados from "../components/CardCertificados";

import "./styles/Certificados.css";
//import { Link } from "react-router-dom";

function Certificados() {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="main">
            <NavBar oficina={false} certificado={true} alunos={false}></NavBar>
            <div className="contentPage">
                <div className="topPage">
                    <h1>Certificados</h1>
                </div>
                <div className="bottonPage">
                    <CardCertificados></CardCertificados>
                    <CardCertificados></CardCertificados>
                    <CardCertificados></CardCertificados>
                    <CardCertificados></CardCertificados>
                </div>
            </div>
        </div>
    );
}

export default Certificados;
