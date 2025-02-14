import React from "react";
import "./styles/AlunoListModal.css";

function ModalAdicionarAlunos({ student, setSelectedStudents, selectedStudents }) {
    const isSelected = selectedStudents.some(selectedStudent => selectedStudent.id === student.id);

    const handleClick = () => {
        if (isSelected) {
            setSelectedStudents(prevSelected =>
                prevSelected.filter(selectedStudent => selectedStudent.id !== student.id)
            );
        } else {
            setSelectedStudents(prevSelected => [...prevSelected, student]);
        }
    };

    return (
        <div
            className={`bodyModalAdicionarAlunos ${isSelected ? "selected" : ""}`}
            onClick={handleClick}
        >
            <div className="bottonModalAdicionarAlunos">
                <div className={`contentModalAdicionarAlunos ${isSelected ? "selected" : ""}`}>
                    <p className="ModalAdicionarAlunosNome">{student.name}</p>
                    <p className="ModalAdicionarAlunosEmail">{student.email}</p>
                    <p className="ModalAdicionarAlunosTelefone">{student.phone}</p>
                </div>
                <div className="dividerModalAdicionarAlunos"></div>
            </div>
        </div>
    );
}

export default ModalAdicionarAlunos;