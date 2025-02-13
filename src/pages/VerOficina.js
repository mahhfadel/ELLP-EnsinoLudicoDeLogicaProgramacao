import React, { useState } from "react";
import NavBar from "../components/NavBar";
import AlunosList from "../components/AlunosListOficina";
import Modal from "../components/ModalAdicionarAlunoCurso";

import "./styles/VerOficina.css";
//import { Link } from "react-router-dom";

function VerOficina() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="main">
            <NavBar oficina={true} certificado={false} alunos={false}></NavBar>
            <div className="contentPage">
                <div className="topPage">
                    <h1>Lorem Ipsum</h1>
                    <buttom onClick={() => setIsModalOpen(true)}>
                        Adicionar alunos
                    </buttom>
                </div>

                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />

                <p className="dateOficina">05/05/2025</p>
                <p className="descriptionOficina">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer et felis at ipsum blandit pharetra. Nunc euismod
                    porta urna. Vivamus porta tellus quam, vitae dictum leo
                    laoreet vitae. Duis eleifend suscipit accumsan. Maecenas
                    lorem urna, sodales vitae aliquam at, convallis sed lorem.
                    Phasellus erat lacus, auctor in felis sed, ullamcorper
                    laoreet nibh. Maecenas lacinia dignissim nisi nec auctor.
                    Vivamus eget sollicitudin arcu, quis blandit ligula. Aenean
                    ut augue augue. Fusce augue nibh, pharetra id convallis a,
                    finibus at elit. In vel erat est. Sed eu purus urna. Proin
                    sodales eros ut ex bibendum.
                </p>

                <div className="alunosViewOficina">
                    <div className="legendaAlunos">
                        <div className="legendaAlunosNome">Nome</div>
                        <div className="legendaAlunosEmail">Email</div>
                        <div className="legendaAlunosTelefone">Telefone</div>
                        <div className="legendaAlunosIdade">Idade</div>
                        <div className="legendaAlunosConcluido">Concluído?</div>
                    </div>
                    <div className="dividerAlunos"></div>

                    <AlunosList></AlunosList>
                    <AlunosList></AlunosList>
                    <AlunosList></AlunosList>
                    <AlunosList></AlunosList>
                </div>
            </div>
        </div>
    );
}

export default VerOficina;
