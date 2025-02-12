import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import AlunosList from "../components/AlunosList";

import "./styles/Alunos.css";
//import { Link } from "react-router-dom";

function Alunos() {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="main">
            <NavBar oficina={false} certificado={false} alunos={true}></NavBar>
            <div className="contentPage">
                <div className="topPage">
                    <h1>Alunos</h1>
                    <buttom>Adicionar alunos</buttom>
                </div>
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
