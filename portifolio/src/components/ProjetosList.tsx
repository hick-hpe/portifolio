import styled from 'styled-components';

const Page = styled.div`
    background-color: #010f3d;
    min-height: 100vh;
    padding: 60px 20px;

    .titulo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        margin-bottom: 40px;

        h1 {
            font-size: 2.5rem;
            font-weight: bold;
            color: #fff;
        }

        .barra {
            background-color: #fff;
            height: 2px;
            flex: 1;
        }
    }

    .cards {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;
    }

    .card {
        /* height: 380px; */
        width: clamp(300px, 30vw, 400px);
        background-color: #fff;
        color: #010f3d;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        transition: transform 0.2s ease;
        cursor: pointer;

        &:hover {
            transform: translateY(-5px);
        }

        img {
            height: 160px;
            width: 100%;
            object-fit: cover;
        }

        .card-body {
            padding: 15px;
        }

        .card-title {
            font-size: 1.3rem;
            border-bottom: 2px solid #010f3d;
            padding-bottom: 10px;
        }

        .card-text {
            font-size: 0.95rem;
            line-height: 1.4;
            height: 90px;
            overflow-y: auto;
        }

        .btn-github {
            background-color: #010f3d;
            color: #fff;
            text-decoration: none;
            border: none;
            padding: 8px 14px;
            border-radius: 5px;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: #0b1f5f;
            }

            i {
                margin-right: 6px;
            }
        }

        .btn-live {
            background-color: #1a1e2c;
            color: #fff;
            text-decoration: none;
            border: none;
            padding: 8px 14px;
            border-radius: 5px;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: #0b1f5f;
            }

            i {
                margin-right: 6px;
            }
        }

        @media (max-width: 768px) {
            width: 100%;
        }

    }
`;

const ProjetosList = () => {
    return (
        <Page>
            <div className="container card-body">
                <div className="titulo">
                    <span className="barra"></span>
                    <h1>Meus Projetos</h1>
                    <span className="barra"></span>
                </div>
            </div>

            <div className="container cards d-flex flex-wrap">
                <div className="card">
                    <img src="/projeto-react-blog.png" alt="Projeto React Blog" />
                    <div className="card-body">
                        <h5 className="card-title">MyBlog</h5>
                        <p className="card-text">
                            Blog em React que permite criar e visualizar posts com título e descrição. Projeto simples, limpo e funcional.
                        </p>
                        <div className='d-flex justify-content-between'>
                            <a
                                href="https://github.com/hick-hpe/react-blog"
                                className="btn-github"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-github"></i> Ver no GitHub
                            </a>
                            <a
                                href="#"
                                className="btn-live"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-box-arrow-up-right"></i> Ver Demo
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img src="/image.png" alt="Outro projeto" />
                    <div className="card-body">
                        <h5 className="card-title">DevQuiz</h5>
                        <p className="card-text">
                            Um site de quizzes da disciplina de TADS para auxiliar alunos a estudarem, com emissão de certificados como gamificação. <br />
                            <i>Em desenvolvimento</i>
                        </p>
                        <div className='d-flex justify-content-between'>
                            <a
                                href="https://github.com/hick-hpe/projeto-Integrador-2025"
                                className="btn-github"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-github"></i> Ver no GitHub
                            </a>
                            <a
                                href="#"
                                className="btn-live"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-box-arrow-up-right"></i> Ver Demo
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img src="/professorhub.png" alt="Outro projeto" />
                    <div className="card-body">
                        <h5 className="card-title">ProfessorHub</h5>
                        <p className="card-text">
                            Um website para auxiliar os professores a realizar o planejamento das aulas. <br />
                            <i>Em desenvolvimento</i>
                        </p>
                        <div className='d-flex justify-content-between'>
                            <a
                                href="#"
                                className="btn-github"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-github"></i> Ver no GitHub
                            </a>
                            <a
                                href="#"
                                className="btn-live"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-box-arrow-up-right"></i> Ver Demo
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img src="/tic-tac-toe.png" alt="Outro projeto" />
                    <div className="card-body">
                        <h5 className="card-title">Tic Tac Toe</h5>
                        <p className="card-text">
                            Este projeto é um jogo da velha (Tic Tac Toe) com suporte a multiplayer em tempo real, utilizando Socket.IO. <br /><br />
                            Todas as funcionalidades foram desenvolvidas em branches separadas ao longo do processo. A branch main representa a versão final e estável do projeto, contendo todas as funcionalidades integradas:
                            <ul>
                                <li>Criação de salas de jogo</li>
                                <li>Jogo multiplayer em tempo real</li>
                                <li>Interface amigável e responsiva</li>
                                <li>Histórico de partidas</li>
                                <li>Chat integrado</li>
                            </ul>
                        </p>
                        <div className='d-flex justify-content-between'>
                            <a
                                href="https://github.com/hick-hpe/tic-tac-toe"
                                className="btn-github"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-github"></i> Ver no GitHub
                            </a>
                            <a
                                href="https://tic-tac-toe-8woi.onrender.com/"
                                className="btn-live"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-box-arrow-up-right"></i> Ver Demo
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img src="/image.png" alt="Outro projeto" />
                    <div className="card-body">
                        <h5 className="card-title">Título do Projeto</h5>
                        <p className="card-text">
                            Descrição do projeto. Mostrar funcionalidades ou objetivo.
                        </p>
                        <div className='d-flex justify-content-between'>
                            <a
                                href="#"
                                className="btn-github"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-github"></i> Ver no GitHub
                            </a>
                            <a
                                href="#"
                                className="btn-live"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-box-arrow-up-right"></i> Ver Demo
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img src="/image.png" alt="Outro projeto" />
                    <div className="card-body">
                        <h5 className="card-title">Título do Projeto</h5>
                        <p className="card-text">
                            Descrição do projeto. Mostrar funcionalidades ou objetivo.
                        </p>
                        <div className='d-flex justify-content-between'>
                            <a
                                href="#"
                                className="btn-github"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-github"></i> Ver no GitHub
                            </a>
                            <a
                                href="#"
                                className="btn-live"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="bi bi-box-arrow-up-right"></i> Ver Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default ProjetosList;
