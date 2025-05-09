import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Page = styled.footer`
    background-color: #010f3d;
    border-top: 2px solid #fff;
    padding: 60px 0;

    .container {
        display: flex;
        flex-direction: column;
        gap: 40px;
        text-align: center;

        @media (min-width: 768px) {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
        }
    }

    .footer-section {
        display: flex;
        flex-direction: column;
        gap: 10px;

        h5 {
            margin-bottom: 10px;
        }

        a {
            color: #fff;
            text-decoration: none;
            transition: color 0.2s;

            &:hover {
                color: #66b2ff;
            }

            i {
                margin-right: 6px;
            }
        }
    }

    .copyright {
        font-size: 14px;
        line-height: 1.6;
    }
`;

const Footer = () => {
    return (
        <Page>
            <div className="container">
                <div className="footer-section">
                    <div className="copyright text-light">
                        <p className="mb-1">&copy; {new Date().getFullYear()} MyRepo - Todos os direitos reservados.</p>
                        <p className="mb-0">
                            Desenvolvido por{" "}
                            <a
                                href="https://github.com/hick-hpe"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-info text-decoration-none"
                            >
                                Henrique Palermo
                            </a>
                        </p>
                    </div>
                </div>

                <div className="footer-section">
                    <h5 className='text-light'>Navegação</h5>
                    <ul className="list-unstyled mb-0">
                        <li><Link to='/'>Início</Link></li>
                        <li><Link to='/#sobre'>Sobre Mim</Link></li>
                        <li><Link to='/#experiencias'>Experiências</Link></li>
                        <li><Link to='/projetos'>Projetos</Link></li>
                        <li><Link to='/#contato'>Contato</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h5 className='text-light'>Contato</h5>
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

export default Footer;
