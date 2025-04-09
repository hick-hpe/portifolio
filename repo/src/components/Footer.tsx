const Footer = () => {
    return (
        <footer className="bg-dark text-light text-center py-4 mt-5">
            <div className="container">
                <p className="mb-1">&copy; {new Date().getFullYear()} MyRepo - Todos os direitos reservados.</p>
                <p className="mb-0">
                    Desenvolvido por <a href="https://github.com/hick-hpe" className="text-info text-decoration-none" target="_blank" rel="noopener noreferrer">Henrique Palermo</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
