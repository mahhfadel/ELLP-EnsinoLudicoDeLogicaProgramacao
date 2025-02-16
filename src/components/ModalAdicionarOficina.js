import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import "./styles/Modal.css";

const Modal = ({ isOpen, onClose, onWorkshopCreated }) => {
    const { token } = useAuth();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [loading, setLoading] = useState(false);
    const [imageUri, setImageUri] = useState('');
    const [error, setError] = useState(null);

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}workshop`,
                { name, description, date, imageUri },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            onWorkshopCreated(response.data.data);

            setName("");
            setDescription("");
            setDate("");
            onClose();
        } catch (err) {
            setError(err.response?.data?.message || "Erro ao criar oficina.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">Adicionar oficina</h2>
                    <button className="modal-close" onClick={onClose}>X</button>
                </div>

                <form className="modal-form" onSubmit={handleSubmit}>
                    <label>Nome</label>
                    <input
                        type="text"
                        placeholder="Insira o nome do curso"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <label>Descrição</label>
                    <textarea
                        placeholder="Insira a descrição do curso"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />

                    <label>Data</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />

                    <label>Imagem</label>
                    <input
                        type="url"
                        value={imageUri}
                        onChange={(e) => setImageUri(e.target.value)}
                        required
                    />

                    {error && <p className="error-message">{error}</p>}

                    <button className="modal-button" type="submit" disabled={loading}>
                        {loading ? "Criando..." : "Criar oficina"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Modal;