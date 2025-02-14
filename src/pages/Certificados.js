import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import CardCertificados from "../components/CardCertificados";

import "./styles/Certificados.css";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

function Certificados() {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const [workshops, setWorkshops] = useState([]);
        const { token } = useAuth();
    
        useEffect(() => {
            const fetchData = async () => {
                if (!token) {
                    console.error("Token de autenticação não encontrado");
                    return;
                }
    
                try {
                    const response = await axios.get(`${process.env.REACT_APP_API_URL}workshop`, {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    console.log(response.data.data)
                    setWorkshops(response.data.data);
                } catch (error) {
                    console.error("Erro ao buscar oficinas:", error.response?.data || error.message);
                }
            };
    
            fetchData();
        }, [token]);

    return (
        <div className="main">
            <NavBar oficina={false} certificado={true} alunos={false}></NavBar>
            <div className="contentPage">
                <div className="topPage">
                    <h1>Certificados</h1>
                </div>
                <div className="bottonPage">
                    {workshops && workshops.map((workshop) => (<CardCertificados workshop={workshop}/>))}
                </div>
            </div>
        </div>
    );
}

export default Certificados;
