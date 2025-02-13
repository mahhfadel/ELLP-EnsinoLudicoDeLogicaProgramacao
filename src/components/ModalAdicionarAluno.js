import React, { useState } from "react";
import "./styles/Modal.css";

const Modal = ({ isOpen, onClose }) => {
    const [telefone, setTelefone] = useState("");

    if (!isOpen) return null;

    const formatarTelefone = (valor) => {
        let numero = valor.replace(/\D/g, ""); // Remove tudo que não for número

        if (numero.length > 10) {
            numero = `(${numero.substring(0, 2)}) ${numero.substring(
                2,
                7
            )}-${numero.substring(7, 11)}`;
        } else if (numero.length > 6) {
            numero = `(${numero.substring(0, 2)}) ${numero.substring(
                2,
                6
            )}-${numero.substring(6, 10)}`;
        } else if (numero.length > 2) {
            numero = `(${numero.substring(0, 2)}) ${numero.substring(2)}`;
        } else if (numero.length > 0) {
            numero = `(${numero}`;
        }

        return numero;
    };

    const handleChange = (e) => {
        setTelefone(formatarTelefone(e.target.value));
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">Adicionar aluno</h2>
                    <button className="modal-close" onClick={onClose}>
                        X
                    </button>
                </div>

                <form className="modal-form">
                    <label>Nome</label>
                    <input
                        type="text"
                        placeholder="Insira o nome do aluno"
                        required
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Insira o email do aluno"
                        required
                    />
                    <label>Telefone</label>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={telefone}
                        onChange={handleChange}
                        placeholder="(99) 99999-9999"
                        maxLength="15"
                        required
                    />
                    <label>Data de nascimento</label>
                    <input type="date" />
                    <button className="modal-button">Adicionar aluno</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
