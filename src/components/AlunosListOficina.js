import React, { useState } from "react";
import "./styles/AlunosListOficina.css";

function AlunosListOficina({ student }) {
    const [checkboxValue, setCheckboxValue] = useState(student.StudentsWorkshops.isCompleted);

    // Função para calcular a idade com base na data de nascimento
    const getAge = (birthdate) => {
        if (!birthdate) return "N/A"; // Retorna "N/A" se não houver data de nascimento
        const birthDateObj = new Date(birthdate);
        const today = new Date();
        let age = today.getFullYear() - birthDateObj.getFullYear();
        const monthDiff = today.getMonth() - birthDateObj.getMonth();

        // Se ainda não fez aniversário este ano, subtrai 1 da idade
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
            age--;
        }

        return age;
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
                            onChange={() => setCheckboxValue(!checkboxValue)}
                        />
                    </div>
                </div>
                <div className="dividerAlunosListOficina"></div>
            </div>
        </div>
    );
}

export default AlunosListOficina;