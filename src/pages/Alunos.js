import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import AlunosList from "../components/AlunosList";
import Modal from "../components/ModalAdicionarAluno";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

import "./styles/Alunos.css";

function Alunos() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [students, setStudents] = useState([]);
    const { token } = useAuth(); // Apenas pegando o token

    useEffect(() => {
        const fetchStudents = async () => {
            if (!token) {
                console.error("Token de autenticação não encontrado");
                return;
            }

            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}student`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                setStudents(response.data.data);
            } catch (error) {
                console.error("Erro ao buscar alunos:", error.response?.data || error.message);
            }
        };

        fetchStudents();
    }, [token]);

    const handleStudentCreated = (newStudent) => {
        setStudents((prevStudents) => [...prevStudents, newStudent]);
    };

    return (
        <div className="main">
            <NavBar oficina={false} certificado={false} alunos={true} />
            <div className="contentPage">
                <div className="topPage">
                    <h1>Alunos</h1>
                    <button onClick={() => setIsModalOpen(true)}>
                        Adicionar aluno
                    </button>
                </div>

                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onStudentCreated={handleStudentCreated} // Atualiza a lista ao adicionar
                />

                <div className="bottonPageAlunos">
                    <div className="topPageAlunos">
                        <div className="topPageAlunosNome">Nome</div>
                        <div className="topPageAlunosEmail">Email</div>
                        <div className="topPageAlunosTelefone">Telefone</div>
                        <div className="topPageAlunosData">Data de nascimento</div>
                    </div>
                    <div className="dividerAlunos"></div>

                    {students.length > 0 ? (
                        students.map((student) => (
                            <AlunosList key={student.id} student={student} />
                        ))
                    ) : (
                        <p>Nenhum aluno encontrado.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Alunos;