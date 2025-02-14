import React, { useEffect, useState } from "react";
import "./styles/Modal.css";
import AlunosList from "../components/AlunoListModal";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const Modal = ({ isOpen, onClose, workshopStudents, setWorkshopStudents, workshop }) => {

    const { token } = useAuth();
    const [students, setStudents] = useState([]);
    const [selectedStudents, setSelectedStudents] = useState([]);
    
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

                
                const filteredStudents = response.data.data.filter(student => 
                    !workshopStudents.find(workshopStudent => workshopStudent.id === student.id)
                );
    
                setStudents(filteredStudents);
            } catch (error) {
                console.error("Erro ao buscar alunos:", error.response?.data || error.message);
            }
        };

        fetchStudents();
    }, [token, workshopStudents]);

    if (!isOpen) return null;

    const handleAdicionar = async () => {
        try {
            const ids = selectedStudents.map(student => student.id);
    
            const result = await axios.post(
                `${process.env.REACT_APP_API_URL}workshop/${workshop.id}/students`,
                { studentIds: ids },
                { headers: { Authorization: `Bearer ${token}` } }
            );
    
            if (result.status === 200 || result.status === 201) {
                const studentsToAdd = selectedStudents.map(student => ({
                    ...student,
                    StudentsWorkshops: { isCompleted: false }
                }));

                setWorkshopStudents(prevWorkshopStudents => [
                    ...prevWorkshopStudents,
                    ...studentsToAdd
                ]);
    
                onClose();
            } else {
                console.error("Erro ao adicionar alunos:", result.data);
            }
        } catch (error) {
            console.error("Erro ao adicionar alunos:", error.response?.data || error.message);
        }
    };
    

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

                    {students && students.map(student => <AlunosList key={student.id} student={student} setSelectedStudents={setSelectedStudents} selectedStudents={selectedStudents}/>)}
                    
                    <div className="modal-footer">
                        <button className="modal-button" onClick={handleAdicionar}>
                            Adicionar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
