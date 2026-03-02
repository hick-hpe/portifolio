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
            border-radius: 10px 10px 0 0;
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
    const projetos = [
        {
            nome: "ProfessorHub",
            descricao: "Um website para auxiliar os professores a realizar o planejamento das aulas.",
            img: "/img/professorhub.png",
            links: {
                github: "https://github.com/hick-hpe/professorhub-api-based",
                demo: "",
            }
        },
        {
            nome: "Coleta IF",
            descricao: "ColetaIF é um projeto de extensão do IFPR - Campus Cascavel que tem como objetivo conscientizar a comunidade sobre o lixo eletrônico, seus impactos ambientais e as boas práticas de descarte e reciclagem.",
            img: "/img/coleta-if.png",
            links: {
                github: "https://github.com/hick-hpe/coleta-if",
                demo: "https://coleta-if.vercel.app/",
            }
        },
        {
            nome: "Sistema de Vendas",
            descricao: "O Sistema de Vendas é uma aplicação web desenvolvida com o framework Django, projetada para auxiliar no controle e gestão de vendas, produtos e categorias. O projeto também foi configurado como Progressive Web App (PWA), permitindo que seja instalado em dispositivos móveis ou desktops e utilizado com suporte básico offline.",
            img: "/img/webapp-vendas.png",
            links: {
                github: "https://github.com/hick-hpe/webapp-sistema-vendas",
                demo: "https://palermo.pythonanywhere.com/",
            }
        },
        {
            nome: "API CEP",
            descricao: "API desenvolvida em Node.js consumindo a API ViaCEP, com tratamento de erros e padronização de respostas.",
            img: "/img/api-viacep.png",
            links: {
                github: "https://github.com/hick-hpe/api-viacep",
                demo: "https://hick-hpe.github.io/api-viacep/",
            }
        },
    ];

    return (
        <Page>
            <div className="container card-body">
                <div className="titulo">
                    <span className="barra"></span>
                    <h1>Meus Projetos</h1>
                    <span className="barra"></span>
                </div>
            </div>

            {/* listagem */}
            <div className="container">
                <div className="row g-4">
                    {projetos.map((proj, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card h-100">
                                <img src={proj.img} alt="Projeto" />

                                <div className="card-body">
                                    <h5 className="card-title">{proj.nome}</h5>
                                    <p className="card-text">{proj.descricao}</p>

                                    <div className="d-flex justify-content-between">
                                        <a
                                            href={proj.links.github}
                                            className="btn-github"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="bi bi-github"></i> Ver no GitHub
                                        </a>

                                        {
                                            proj.links.demo && (
                                                <a
                                                    href={proj.links.demo}
                                                    className="btn-live"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <i className="bi bi-box-arrow-up-right"></i> Ver Demo
                                                </a>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Page>
    );
};

export default ProjetosList;
