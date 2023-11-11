import React from 'react';
import './indexstyle.css'

export default function Index () {
    return (
        <>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>ZooVille - Narwhal Tech</title>
                <link href="https://www.rockstargames.com/br/gta-v" rel="canonical" />
                <link rel="apple-touch-icon" sizes="180x180" href="img/logo.png" />
                <link rel="icon" type="image/png" sizes="52x52" href="img/logo.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="img/logo.png" />
                <link rel="mask-icon" color="#666666" href="img/logo.png" />
                <link href="img/logo.png" type="image/x-icon" rel="icon" />
                <link href="img/logo.png" type="image/x-icon" rel="shortcut icon" />
                <link rel="stylesheet" href="style.css" />

                <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />

                <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <header>
                    <a href="#" className="logo">
                        <img src="logo.png" alt="logo" width="100px" />
                    </a>
                    <ul className="navlist">
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="pages/sobre.html">Sobre</a></li>
                        <li><a href="pages/Att.html">Atualizações</a></li>
                        <li><a href="pages/feedbacks.html">Feedback</a></li>
                        <li><a href="pages/Sup.html">Suporte</a></li>
                    </ul>

                    <div className="bx bx-menu" id="menu"></div>
                </header>

                <section className="hero">
                    <div className="hero-text">
                        <h4>Narwhal Tech Presents</h4>
                        <img className="hero-img" src="img/logo.png" alt="logo" />
                        <p>
                            Junte-se á jogadores de todo o mundo enquanto constrói seu ZOO. Crie seu zoologico
                            para ser o melhor!!
                        </p>
                        <a href="#">Jogar</a>
                        <a href="#" className="ctaa">
                            <i className="ri-play-fill"></i>Assistir Gameplay
                        </a>
                    </div>

                    <div className="hero-img">
                        <img src="img/png-transparent-giant-panda-bear-pixel-art-mammal-animals-carnivoran-removebg-preview.png" alt="" />
                    </div>
                </section>

                <div className="icons">
                    <a href="# "><i className="ri-instagram-line"></i></a>
                    <a href="# "><i className="ri-youtube-line"></i></a>
                    <a href="# "><i className="ri-chat-3-line"></i></a>
                </div>

                <div className="scroll-down">
                    <a href="#"></a>
                </div>

                <script src="https://unpkg.com/scrollreveal"></script>

                <script src="script.js"></script>
            </body>
        </>
    );
};

