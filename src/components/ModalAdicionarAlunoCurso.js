import React from "react";
import "./styles/Modal.css";
import AlunosList from "../components/AlunoListModal";

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">Adicionar alunos</h2>
                    <button className="modal-close" onClick={onClose}>
                        X
                    </button>
                </div>

                <div className="bodyModalAdicionarAlunos">
                    <div className="topModalAdicionarAlunos">
                        <div className="topModalAdicionarAlunosNome">Nome</div>
                        <div className="topModalAdicionarAlunosEmail">
                            Email
                        </div>
                        <div className="topModalAdicionarAlunosTelefone">
                            Telefone
                        </div>
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
};

export default Modal;
