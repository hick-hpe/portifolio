const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5 mt-5">
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-start text-center text-md-start gap-4">

                {/* Créditos */}
                <div>
                    <p className="mb-1">&copy; {new Date().getFullYear()} MyRepo - Todos os direitos reservados.</p>
                    <p className="mb-0">
                        Desenvolvido por{" "}
                        <a
                            href="https://github.com/hick-hpe"
                            className="text-info text-decoration-none"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Henrique Palermo
                        </a>
                    </p>
                </div>

                {/* Mini Menu */}
                <div>
                    <div className="h5 mb-2">Navegação</div>
                    <ul className="list-unstyled mb-0">
                        <li><a href="#inicio" className="text-light text-decoration-none">Início</a></li>
                        <li><a href="#sobre" className="text-light text-decoration-none">Sobre Mim</a></li>
                        <li><a href="#projetos" className="text-light text-decoration-none">Projetos</a></li>
                        <li><a href="#contato" className="text-light text-decoration-none">Contato</a></li>
                    </ul>
                </div>

                {/* Contato / Redes */}
                <div>
                    <div className="h5 mb-2">Contato</div>
                    <div className="d-flex flex-column gap-2">
                        <a
                            href="https://github.com/hick-hpe"
                            className="text-light text-decoration-none"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-github me-1"></i> GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/seu-linkedin"
                            className="text-light text-decoration-none"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-linkedin me-1"></i> LinkedIn
                        </a>
                        <a
                            href="mailto:seuemail@email.com"
                            className="text-light text-decoration-none"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-envelope-at-fill me-1"></i> Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
