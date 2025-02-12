import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/CardOficinas";

import "./styles/Home.css";
//import { Link } from "react-router-dom";

function Home() {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="main">
            <NavBar oficina={true} certificado={false} alunos={false}></NavBar>
            <div className="contentPage">
                <div className="topPage">
                    <h1>Oficinas</h1>
                    <buttom>Adicionar oficina</buttom>
                </div>
                <div className="bottonPage">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
        </div>
    );
}

export default Home;
