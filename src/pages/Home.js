import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/CardOficinas";
import Modal from "../components/ModalAdicionarOficina";

import "./styles/Home.css";
//import { Link } from "react-router-dom";

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="main">
            <NavBar oficina={true} certificado={false} alunos={false}></NavBar>
            <div className="contentPage">
                <div className="topPage">
                    <h1>Oficinas</h1>
                    <buttom onClick={() => setIsModalOpen(true)}>
                        Adicionar oficina
                    </buttom>
                </div>

                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />

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
