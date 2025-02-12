import React from "react";

import "./styles/AlunosList.css";

function AlunosList() {
    return (
        <div className="bodyAlunosList">
            <div className="bottonAlunosList">
                <div className="contentAlunosList">
                    <div className="AlunosListNome">Nome</div>
                    <div className="AlunosListEmail">Email</div>
                    <div className="AlunosListTelefone">Telefone</div>
                    <div className="AlunosListData">Data nascimento</div>
                </div>
                <div className="dividerAlunosList"></div>
            </div>
        </div>
    );
}

export default AlunosList;
