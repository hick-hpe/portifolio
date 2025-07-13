import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Page = styled.div`
    height: 100vh;
    background-color: #010f3d;

    .container {
        animation: appers 1s ease-out forwards;

        .card-title {
            font-size: 80px;
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
        <Page className="text-success d-flex justify-content-start align-items-center">
            <div className="container card-body d-flex flex-column w-50 align-items-start">
                <h1 className="card-title text-light">
                    Henrique Palermo
                </h1>
                <small className="lead text-muted">Desenvolvedor Full-Stack</small>
                <Link className="d-block mt-3 btn btn-light p-2 fs-5" to="https://github.com/hick-hpe">
                    <i className="bi bi-github"></i> Ver GitHub
                </Link>
            </div>
        </Page>
    );
};

export default Hero;