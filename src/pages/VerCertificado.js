import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import AlunoListCertificados from "../components/AlunoListCertificados";

import "./styles/VerCertificado.css";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

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


   useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    if (!workshop) {
        return <p>Oficina não encontrada!</p>;
    }

    return (
        <div className="main">
            <NavBar oficina={false} certificado={true} alunos={false}></NavBar>
            <div className="contentPage">
                <div className="topPage">
                    <h1>{workshop.name}</h1>
                </div>
                <p className="dateOficina">{new Date(workshop.date).toLocaleDateString('pt-BR')}</p>
                <p className="descriptionOficina">
                    {workshop.description}
                </p>

                <div className="alunosViewCertificado">
                    <div className="legendaAlunos">
                        <div className="legendaAlunosNome">Nome</div>
                        <div className="legendaAlunosEmail">Email</div>
                        <div className="legendaAlunosIdade">Idade</div>
                        <div className="legendaAlunosConcluido">Concluído?</div>
                        <div className="legendaAlunosTelefone">Certificado</div>
                    </div>
                    <div className="dividerAlunos"></div>

                    {alunos && alunos.map(aluno => <AlunoListCertificados key={aluno.id} workshop={workshop} student={aluno}/>)}
                </div>

                <button className="buttonGerarCertificados">
                    Gerar todos certificados
                </button>
            </div>
        </div>
    );
}

export default VerOficina;
