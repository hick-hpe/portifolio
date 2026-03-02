import styled from "styled-components";

const Page = styled.ul`
    background-color: #010f3d;
    margin: 0;

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

const Lista = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;

    li {
        background-color: #1b2a47;
        padding: 10px;
        border-radius: 5px;
        color: white;
        font-size: 18px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        transition: .5s;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    li:hover {
        background-color: #428ad2;
    }

    img {
        height: 40px;
    }
`;

const habilidades = [
    { nome: "ReactJS", img: "/react.svg" },
    { nome: "NodeJS", img: "/node.svg" },
    { nome: "Django", img: "/django.svg" },
    { nome: "Express", img: "/express.svg" },
    { nome: "Bootstrap", img: "/bootstrap.svg" },
    { nome: "Git", img: "/git.svg" },
    { nome: "Docker", img: "/docker.svg" },
    { nome: "Linux", img: "/linux.svg" },
    { nome: "MySQL", img: "/mysql.svg" },
    { nome: "JavaScript", img: "/javascript.svg" },
    { nome: "Python", img: "/python.svg" },
];

const Habilidades = () => {
    return (
        <Page>
            <div className="container card-body">
                <div className="titulo">
                    <span className='barra'></span>
                    <h1 className="text-white">Habilidades</h1>
                    <span className='barra'></span>
                </div>

                <Lista>
                    {habilidades.map((hab, index) => (
                        <li key={index}>
                            <img src={hab.img} alt={hab.nome} />
                            {hab.nome}
                        </li>
                    ))}
                </Lista>
            </div>
        </Page>
    );
};

export default Habilidades;