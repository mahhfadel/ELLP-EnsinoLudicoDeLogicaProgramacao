import React from "react";
import { TbCertificate2 } from "react-icons/tb";
import {
    MdOutlinePeople,
    MdOutlineBook,
    MdOutlineLogout,
} from "react-icons/md";
import logo from "../assets/logo.png";
import ellpinho from "../assets/ellpinho_v2.png";
import SelectItemNavbar from "../components/SelectItenNavbar";
import { useAuth } from '../context/AuthContext';

import { Link } from "react-router-dom";

import "./styles/NavBar.css";

function NavBar({ oficina, certificado, alunos }) {
    const { logout } = useAuth();
        return (
        <div className="navbarElement">
            <img className="logo" src={logo} />
            <div className="divider"></div>
            <div className="content">
                <Link className="link" to="/home">
                    <SelectItemNavbar
                        textElement="Oficinas"
                        icon={<MdOutlineBook />}
                        select={oficina}
                    ></SelectItemNavbar>
                </Link>

                <Link className="link" to="/certificados">
                    <SelectItemNavbar
                        textElement="Certificados"
                        icon={<TbCertificate2 />}
                        select={certificado}
                    ></SelectItemNavbar>
                </Link>

                <Link className="link" to="/alunos">
                    <SelectItemNavbar
                        textElement="Alunos"
                        icon={<MdOutlinePeople />}
                        select={alunos}
                    ></SelectItemNavbar>
                </Link>

                <SelectItemNavbar onClick={logout}
                    textElement="Sair"
                    icon={<MdOutlineLogout />}
                    select={false}
                ></SelectItemNavbar>
            </div>
            <div className="ellpinhoBox">
                <img className="ellpinho" src={ellpinho} />
            </div>
        </div>
    );
}

export default NavBar;
