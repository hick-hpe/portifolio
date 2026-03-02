import styled from 'styled-components';

const Page = styled.div`
    background-color: #010f3d;

    .card-text {
        font-size: 20px;
    }

    .titulo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-bottom: 40px;

        .barra {
            background-color: #fff;
            height: 2px;
            flex: 1;
        }
    }
`;

const SobreMim = () => {
    return (
        <Page id="sobre" className="text-light">
            <div className="container card-body pt-5">
                <div className="titulo">
                    <span className='barra'></span>
                    <h1 className="card-title">Sobre mim</h1>
                    <span className='barra'></span>
                </div>
                <p className="card-text">
                    Sou formado em Técnico em Informática, curso integrado ao Ensino Médio, onde adquiri minha base em desenvolvimento. Tenho conhecimentos em JavaScript, React, HTML5 e CSS3, com foco na criação de interfaces de usuário interativas e responsivas. Também possuo experiência no back-end, desenvolvendo APIs e sistemas com Node.js e Django. Durante meu estágio na Compass UOL, aprofundei meus conhecimentos em Linux e Docker.
                </p>
            </div>
        </Page>
    );
};

export default SobreMim;
