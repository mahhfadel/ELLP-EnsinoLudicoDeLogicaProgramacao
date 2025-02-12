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

import "./styles/NavBar.css";

function NavBar({ oficina, certificado, alunos }) {
    return (
        <div className="navbarElement">
            <img className="logo" src={logo} />
            <div className="divider"></div>
            <div className="content">
                <SelectItemNavbar
                    textElement="Oficinas"
                    icon={<MdOutlineBook />}
                    select={oficina}
                ></SelectItemNavbar>

                <SelectItemNavbar
                    textElement="Certificados"
                    icon={<TbCertificate2 />}
                    select={certificado}
                ></SelectItemNavbar>

                <SelectItemNavbar
                    textElement="Alunos"
                    icon={<MdOutlinePeople />}
                    select={alunos}
                ></SelectItemNavbar>

                <SelectItemNavbar
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
