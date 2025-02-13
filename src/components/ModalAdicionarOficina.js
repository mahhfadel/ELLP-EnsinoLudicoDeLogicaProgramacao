import React from "react";
import "./styles/Modal.css";

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">Adicionar oficina</h2>
                    <button className="modal-close" onClick={onClose}>
                        X
                    </button>
                </div>

                <form className="modal-form">
                    <label>Nome</label>
                    <input
                        type="text"
                        placeholder="Insira o nome do curso"
                        required
                    />
                    <label>Descrição</label>
                    <textarea
                        placeholder="Insira a descrição do curso"
                        required
                    />
                    <label>Data</label>
                    <input type="date" required />
                    <button className="modal-button">Criar oficina</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
