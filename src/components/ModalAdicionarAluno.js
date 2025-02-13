import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import "./styles/Modal.css";

const Modal = ({ isOpen, onClose, onStudentCreated }) => {
    const { token } = useAuth();
    
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");

    if (!isOpen) return null;

    const formatarTelefone = (valor) => {
        let numero = valor.replace(/\D/g, ""); // Remove tudo que não for número

        if (numero.length > 10) {
            return `(${numero.substring(0, 2)}) ${numero.substring(2, 7)}-${numero.substring(7, 11)}`;
        } else if (numero.length > 6) {
            return `(${numero.substring(0, 2)}) ${numero.substring(2, 6)}-${numero.substring(6, 10)}`;
        } else if (numero.length > 2) {
            return `(${numero.substring(0, 2)}) ${numero.substring(2)}`;
        } else if (numero.length > 0) {
            return `(${numero}`;
        }
        return "";
    };

    const handleTelefoneChange = (e) => {
        setTelefone(formatarTelefone(e.target.value));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nome || !email || !telefone || !dataNascimento) {
            alert("Todos os campos são obrigatórios.");
            return;
        }

        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}student`,
                { name: nome, email: email, phone: telefone, birthdate: dataNascimento },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            onStudentCreated(response.data.data);
            onClose();
        } catch (error) {
            console.error("Erro ao adicionar aluno:", error.response?.data || error.message);
            alert("Erro ao adicionar aluno. Tente novamente.");
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">Adicionar aluno</h2>
                    <button className="modal-close" onClick={onClose}>X</button>
                </div>

                <form className="modal-form" onSubmit={handleSubmit}>
                    <label>Nome</label>
                    <input
                        type="text"
                        placeholder="Insira o nome do aluno"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Insira o email do aluno"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label>Telefone</label>
                    <input
                        type="tel"
                        placeholder="(99) 99999-9999"
                        value={telefone}
                        onChange={handleTelefoneChange}
                        maxLength="15"
                        required
                    />
                    <label>Data de nascimento</label>
                    <input
                        type="date"
                        value={dataNascimento}
                        onChange={(e) => setDataNascimento(e.target.value)}
                        required
                    />
                    <button className="modal-button" type="submit">Adicionar aluno</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;