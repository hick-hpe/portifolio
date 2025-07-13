import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Page = styled.div`
    height: 100vh;
    color: white;
    background: linear-gradient(-45deg, #010f3d, #0a2647, #1d3557, #010f3d);
    background-size: 400% 400%;
    animation: gradientBG 15s ease infinite;

    .container {
        animation: appers 1s ease-out forwards;
        padding: 2rem;

        .card-title {
            font-size: 64px;
            font-weight: bold;
        }

        .lead {
            font-size: 20px;
        }
    }

    @keyframes gradientBG {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    @keyframes appers {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;


const Hero = () => {
    return (
        <Page className="d-flex justify-content-center align-items-center">
            <div className="container card-body d-flex flex-column w-75">
                <h1 className="card-title text-info">Henrique Palermo</h1>
                <small className="lead text-light mb-3">
                    Desenvolvedor Full-Stack com experiência em JavaScript, React, Node.js e Django. Apaixonado por tecnologia.
                </small>

                <div className="d-flex gap-3">
                    <Link className="btn btn-light p-2 fs-6" to="https://github.com/hick-hpe" target="_blank">
                        <i className="bi bi-github"></i> Ver GitHub
                    </Link>
                    <Link className="btn btn-outline-info p-2 fs-6" to="/contato">
                        <i className="bi bi-envelope"></i> Entrar em Contato
                    </Link>
                </div>
            </div>
        </Page>
    );
};

export default Hero;
