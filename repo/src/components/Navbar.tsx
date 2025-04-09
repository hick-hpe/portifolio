const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">MyRepo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Início</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/sobre">Sobre Mim</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="projetosDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Projetos
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="projetosDropdown">
                                <li><a className="dropdown-item" href="/projetos/web">Web</a></li>
                                <li><a className="dropdown-item" href="/projetos/mobile">Mobile</a></li>
                                <li><a className="dropdown-item" href="/projetos/jogos">Jogos</a></li>
                                <li><a className="dropdown-item" href="/projetos/outros">Outros</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contato">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;