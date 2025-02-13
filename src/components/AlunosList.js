import React from "react";

import "./styles/AlunosList.css";

function AlunosList({ student }) {
    return (
        <div className="bodyAlunosList">
            <div className="bottonAlunosList">
                <div className="contentAlunosList">
                    <div className="AlunosListNome">{ student.name }</div>
                    <div className="AlunosListEmail">{ student.email }</div>
                    <div className="AlunosListTelefone">{ student.phone }</div>
                    <div className="AlunosListData">{ student.birthdate }</div>
                </div>
                <div className="dividerAlunosList"></div>
            </div>
        </div>
    );
}

export default AlunosList;
