import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Certificados from "./pages/Certificados";
import Alunos from "./pages/Alunos";
import VerOficina from "./pages/VerOficina";
import VerCertificado from "./pages/VerCertificado";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Home />} />
                <Route path="/certificados" element={<Certificados />} />
                <Route path="/alunos" element={<Alunos />} />
                <Route path="/verOficina" element={<VerOficina />} />
                <Route path="/verCertificado" element={<VerCertificado />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
