import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import AlunosList from "../components/AlunosListOficina";
import Modal from "../components/ModalAdicionarAlunoCurso";

import "./styles/VerOficina.css";
import { useAuth } from "../context/AuthContext";

function VerOficina() {
    const location = useLocation();
    const workshop = location.state?.workshop;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [alunos, setAlunos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { token } = useAuth();

    useEffect(() => {
        if (workshop?.id) {
            axios
                .get(`${process.env.REACT_APP_API_URL}workshop/${workshop.id}/students`, { headers: { Authorization: `Bearer ${token}`}})
                .then((response) => {
                    setAlunos(response.data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error("Erro ao buscar alunos:", err);
                    setError("Erro ao carregar alunos.");
                    setLoading(false);
                });
        }
    }, [workshop?.id]);

    if (!workshop) {
        return <p>Oficina não encontrada!</p>;
    }

    return (
        <div className="main">
            <NavBar oficina={true} certificado={false} alunos={false} />
            <div className="contentPage">
                <div className="topPage">
                    <h1>{workshop.name}</h1>
                    <button onClick={() => setIsModalOpen(true)}>
                        Adicionar alunos
                    </button>
                </div>

                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

                <p className="dateOficina">{workshop.date}</p>
                <p className="descriptionOficina">{workshop.description}</p>

                <div className="alunosViewOficina">
                    <div className="legendaAlunos">
                        <div className="legendaAlunosNome">Nome</div>
                        <div className="legendaAlunosEmail">Email</div>
                        <div className="legendaAlunosTelefone">Telefone</div>
                        <div className="legendaAlunosIdade">Idade</div>
                        <div className="legendaAlunosConcluido">Concluído?</div>
                    </div>
                    <div className="dividerAlunos"></div>

                    {loading ? (
                        <p>Carregando alunos...</p>
                    ) : error ? (
                        <p className="error">{error}</p>
                    ) : (
                        alunos.map((student) => (<AlunosList key={student.id} student={student}/>))
                    )}
                </div>
            </div>
        </div>
    );
}

export default VerOficina;