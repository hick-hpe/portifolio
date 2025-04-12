import styled from 'styled-components';

const Page = styled.div`
    height: 100vh;
    background-color: #010f3d;

    .container {
        animation: appers 1s ease-out forwards;
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
                <h1 className="card-title text-light" style={{ fontSize: '80px' }}>
                    Henrique Palermo
                </h1>
                <small className="lead text-muted">Desenvolvedor Frontend | Desenvolvedor Backend</small>
                <button className="d-block mt-3 btn btn-light p-2 fs-5">
                    <i className="bi bi-github"></i> Ver GitHub
                </button>
            </div>
        </Page>
    );
};

export default Hero;