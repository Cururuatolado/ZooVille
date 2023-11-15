import React from "react";
import '../../../public/logo.png'
import '../indexstyle.css'

export default function Navbar () {
    return (
        <>
            <div className="navbarra">
                <a href="#" className="logo">
                    <img src="logo.png" alt="logo" width="100px" />
                </a><ul className="navlist">
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Sobre</a></li>
                        <li><a href="">Atualizações</a></li>
                        <li><a href="">Feedback</a></li>
                        <li><a href="">Suporte</a></li>
                    </ul><div className="bx bx-menu" id="menu"></div>
            </div>
        </>
    );
};