import React from "react";

import "./styles/AlunosListOficina.css";

function AlunosListOficina() {
    return (
        <div className="bodyAlunosListOficina">
            <div className="bottonAlunosListOficina">
                <div className="contentAlunosListOficina">
                    <div className="AlunosListOficinaNome">Nome</div>
                    <div className="AlunosListOficinaEmail">Email</div>
                    <div className="AlunosListOficinaTelefone">Telefone</div>
                    <div className="AlunosListOficinaIdade">Idade</div>
                    <div className="legendaAlunosConcluido">Concluído?</div>
                </div>
                <div className="dividerAlunosListOficina"></div>
            </div>
        </div>
    );
}

export default AlunosListOficina;
