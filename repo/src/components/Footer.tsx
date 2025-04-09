const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 mt-5">
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
                <div className="text-center text-md-start mb-3 mb-md-0">
                    <p className="mb-1">&copy; {new Date().getFullYear()} MyRepo - Todos os direitos reservados.</p>
                    <p className="mb-0">
                        Desenvolvido por <a href="https://github.com/hick-hpe" className="text-info text-decoration-none" target="_blank" rel="noopener noreferrer">Henrique Palermo</a>
                    </p>
                </div>
                <div className="text-center text-md-end">
                    <a href="https://github.com/hick-hpe" className="text-light text-decoration-none me-3" target="_blank" rel="noopener noreferrer">
                        <img src="/Github.png" alt="" /> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/seu-linkedin" className="text-light text-decoration-none" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-linkedin"></i> LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
