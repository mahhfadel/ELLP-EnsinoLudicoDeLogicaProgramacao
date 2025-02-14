import React, { useState } from "react";
import "./styles/AlunoListCertificados.css";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

function AlunoListCertificados({student, workshop}) {
        const [checkboxValue, setCheckboxValue] = useState(student.StudentsWorkshops.isCompleted);
        const [loading, setLoading] = useState(false);
    
        const { token } = useAuth();
    
        const getAge = (birthdate) => {
            if (!birthdate) return "N/A"; 
            const birthDateObj = new Date(birthdate);
            const today = new Date();
            let age = today.getFullYear() - birthDateObj.getFullYear();
            const monthDiff = today.getMonth() - birthDateObj.getMonth();
    
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
                age--;
            }
    
            return age;
        };
    
        const handleCheckbox = async () => {
            if (loading) return;
            setLoading(true);
    
            try {
                await axios.put(
                    `${process.env.REACT_APP_API_URL}workshop/${workshop.id}/students/${student.id}/completed`,
                    {}, 
                    { headers: { Authorization: `Bearer ${token}` } }
                );
    
                setCheckboxValue(!checkboxValue); 
            } catch (error) {
                console.error("Erro ao marcar como concluído:", error);
                alert("Erro ao atualizar status do aluno. Tente novamente!");
            } finally {
                setLoading(false); 
            }
        };

    return (
        <div className="bodyAlunosListOficina">
        <div className="bottonAlunosListOficina">
            <div className="contentAlunosListOficina">
                <div className="AlunosListOficinaNome">{student.name}</div>
                <div className="AlunosListOficinaEmail">{student.email}</div>
                <div className="AlunosListOficinaTelefone">{student.phone}</div>
                <div className="AlunosListOficinaIdade">{getAge(student.birthdate)} anos</div>
                <div className="legendaAlunosConcluido">
                    <input
                        type="checkbox"
                        className="checkboxAlunosListOficina"
                        checked={checkboxValue}
                        disabled={loading}
                        onChange={handleCheckbox}
                    />
                    {loading && <span className="loading-spinner">🔄</span>} {/* Indicador de loading */}
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
