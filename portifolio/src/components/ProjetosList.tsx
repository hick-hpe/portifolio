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
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;
    }

    .card {
        width: 280px;
        background-color: #fff;
        color: #010f3d;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        transition: transform 0.2s ease;

        &:hover {
            transform: translateY(-5px);
        }

        img {
            height: 160px;
            width: 100%;
            object-fit: cover;
        }

        .card-body {
            padding: 20px;
        }

        .card-title {
            font-size: 1.3rem;
            margin-bottom: 10px;
        }

        .card-text {
            font-size: 0.95rem;
            margin-bottom: 15px;
            line-height: 1.4;
        }

        .btn-blue {
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

            <div className="container cards">
                <div className="card">
                    <img src="/projeto-react-blog.png" alt="Projeto React Blog" />
                    <div className="card-body">
                        <h5 className="card-title">MyBlog</h5>
                        <p className="card-text">
                            Blog em React que permite criar e visualizar posts com título e descrição. Projeto simples, limpo e funcional.
                        </p>
                        <a
                            href="https://github.com/hick-hpe/react-blog"
                            className="btn-blue"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-github"></i> Ver no GitHub
                        </a>
                    </div>
                </div>

                <div className="card">
                    <img src="/image.png" alt="Outro projeto" />
                    <div className="card-body">
                        <h5 className="card-title">Título</h5>
                        <p className="card-text">
                            Descrição breve do projeto. Aqui você pode detalhar a stack, funcionalidades ou objetivo.
                        </p>
                        <a
                            href="#blog"
                            className="btn-blue"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-github"></i> Ver no GitHub
                        </a>
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default ProjetosList;
