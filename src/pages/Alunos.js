import React, { useState } from "react";
import NavBar from "../components/NavBar";
import AlunosList from "../components/AlunosList";
import Modal from "../components/ModalAdicionarAluno";

import "./styles/Alunos.css";
//import { Link } from "react-router-dom";

function Alunos() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="main">
            <NavBar oficina={false} certificado={false} alunos={true}></NavBar>
            <div className="contentPage">
                <div className="topPage">
                    <h1>Alunos</h1>
                    <buttom onClick={() => setIsModalOpen(true)}>
                        Adicionar alunos
                    </buttom>
                </div>

                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />

                <div className="bottonPageAlunos">
                    <div className="topPageAlunos">
                        <div className="topPageAlunosNome">Nome</div>
                        <div className="topPageAlunosEmail">Email</div>
                        <div className="topPageAlunosTelefone">Telefone</div>
                        <div className="topPageAlunosData">Data nascimento</div>
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

export default Alunos;
