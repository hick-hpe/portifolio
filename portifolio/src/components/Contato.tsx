import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Page = styled.div`
    background-color: #010f3d;
    color: #fff;
    padding: 60px 0;

    .titulo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-bottom: 40px;

        h1 {
            margin: 0;
        }

        .barra {
            background-color: #fff;
            height: 2px;
            flex: 1;
        }
    }

    .botoes-contato {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        margin-top: 30px;

        a {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 20px;
            font-size: 1rem;
            background-color: #fff;
            color: #010f3d;
            border-radius: 8px;
            text-decoration: none;
            transition: background-color 0.3s, color 0.3s;

            &:hover {
                background-color: #549bff;
                color: #fff;
            }

            i {
                font-size: 1.2rem;
            }
        }
    }
`;

const Contato = () => {
    return (
        <Page id="contato" className="d-flex align-items-center">
            <div className="container card-body pt-5">
                <div className="titulo">
                    <span className="barra"></span>
                    <h1 className="card-title">Contato</h1>
                    <span className="barra"></span>
                </div>

                <div className="botoes-contato">
                    <Link to='mailto:palermohpe@email.com' target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-envelope-at-fill"></i> Email
                    </Link>
                    <Link to='https://github.com/hick-hpe'>
                        <i className="bi bi-github"></i> GitHub
                    </Link>
                    <Link to='https://www.linkedin.com/in/Henrique-Palermo'>
                        <i className="bi bi-linkedin"></i> LinkedIn
                    </Link>
                </div>
            </div>
        </Page>
    );
};

export default Contato;
