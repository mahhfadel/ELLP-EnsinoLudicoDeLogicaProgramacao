import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/CardOficinas";
import Modal from "../components/ModalAdicionarOficina";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

import "./styles/Home.css";

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
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

    // Função para adicionar a nova oficina ao estado
    const handleWorkshopCreated = (newWorkshop) => {
        setWorkshops((prevWorkshops) => [...prevWorkshops, newWorkshop]);
    };

    return (
        <div className="main">
            <NavBar oficina={true} certificado={false} alunos={false} />
            <div className="contentPage">
                <div className="topPage">
                    <h1>Oficinas</h1>
                    <button onClick={() => setIsModalOpen(true)}>
                        Adicionar oficina
                    </button>
                </div>

                <Modal 
                    isOpen={isModalOpen} 
                    onClose={() => setIsModalOpen(false)} 
                    onWorkshopCreated={handleWorkshopCreated} 
                />

                <div className="bottonPage">
                    {workshops.length > 0 ? (
                        workshops.map((workshop) => (
                            <Card key={workshop.id} workshop={workshop} />
                        ))
                    ) : (
                        <p>Nenhuma oficina disponível.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;