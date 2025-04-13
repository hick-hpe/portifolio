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
                    Olá! Meu nome é <span className='text-info'>Henrique</span>. Sou estudante de Análise e Desenvolvimento de Sistemas, um entusiasta em resolver problemas por meio da programação. Tenho me dedicado principalmente ao desenvolvimento web, mas estou sempre aberto a explorar novas áreas, principalmente a criação de jogos. Meu primeiro contato real com a área foi no ensino médio, através de um curso técnico integrado em Informática — e, desde então, venho me aprofundando cada vez mais nesse universo. Tenho experiências com tecnologias como:
                </p>
                <ul>
                    <li>ReactJS</li>
                    <li>NodeJS</li>
                    <li>Django</li>
                    <li>Express</li>
                    <li>Flask</li>
                    <li>Bootstrap</li>
                    <li>Git</li>
                    <li>Docker</li>
                    <li>Linux</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Python</li>
                    <li>Java</li>
                </ul>
            </div>
        </Page>
    );
};

export default SobreMim;
