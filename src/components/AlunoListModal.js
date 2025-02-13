import React from "react";

import "./styles/AlunoListModal.css";

function ModalAdicionarAlunos() {
    return (
        <div className="bodyModalAdicionarAlunos">
            <div className="bottonModalAdicionarAlunos">
                <div className="contentModalAdicionarAlunos">
                    <div className="ModalAdicionarAlunosNome">Nome</div>
                    <div className="ModalAdicionarAlunosEmail">Email</div>
                    <div className="ModalAdicionarAlunosTelefone">Telefone</div>
                </div>
                <div className="dividerModalAdicionarAlunos"></div>
            </div>
        </div>
    );
}

export default ModalAdicionarAlunos;
