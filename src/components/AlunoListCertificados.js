import React from "react";
import "./styles/AlunoListCertificados.css";

function AlunoListCertificados() {
    return (
        <div className="bodyAlunosListCertificado">
            <div className="bottonAlunosListCertificado">
                <div className="contentAlunosListCertificado">
                    <div className="AlunosListCertificadoNome">Nome</div>
                    <div className="AlunosListCertificadoEmail">Email</div>
                    <div className="AlunosListCertificadoIdade">Idade</div>
                    <div className="legendaAlunosConcluido">
                        <input
                            type="checkbox"
                            className="checkboxAlunosListCertificado"
                        />
                    </div>
                    <div className="AlunosListCertificadoGerar">
                        Ver certificado
                    </div>
                </div>
                <div className="dividerAlunosListCertificado"></div>
            </div>
        </div>
    );
}

export default AlunoListCertificados;
