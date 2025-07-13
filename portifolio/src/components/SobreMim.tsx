import styled from 'styled-components';

const Page = styled.div`
    background-color: #010f3d;

    .card-text {
        font-size: 20px;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 15px;
    }

    ul li {
        background-color: #1b2a47;
        padding: 10px;
        border-radius: 5px;
        color: white;
        font-size: 18px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        transition: .5s;
    }

    ul li:hover {
        background-color: #428ad2;
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
                <ul className="list-unstyled">
                    <li><img src="/react.svg" className="me-2" style={{ height: '40px' }} alt="React" />ReactJS</li>
                    <li><img src="/node.svg" className="me-2" style={{ height: '40px' }} alt="Node.js" />NodeJS</li>
                    <li><img src="/django.svg" className="me-2" style={{ height: '40px' }} alt="Django" />Django</li>
                    <li><img src="/express.svg" className="me-2" style={{ height: '40px' }} alt="Express" />Express</li>
                    <li><img src="/bootstrap.svg" className="me-2" style={{ height: '40px' }} alt="Bootstrap" />Bootstrap</li>
                    <li><img src="/git.svg" className="me-2" style={{ height: '40px' }} alt="Git" />Git</li>
                    <li><img src="/docker.svg" className="me-2" style={{ height: '40px' }} alt="Docker" />Docker</li>
                    <li><img src="/linux.svg" className="me-2" style={{ height: '40px' }} alt="Linux" />Linux</li>
                    <li><img src="/mysql.svg" className="me-2" style={{ height: '40px' }} alt="MySQL" />MySQL</li>
                    <li><img src="/javascript.svg" className="me-2" style={{ height: '40px' }} alt="JavaScript" />JavaScript</li>
                    <li><img src="/python.svg" className="me-2" style={{ height: '40px' }} alt="Python" />Python</li>
                </ul>

            </div>
        </Page>
    );
};

export default SobreMim;
