import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-darka p-3" style={{ backgroundColor: '#010f3d' }}>
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
                        <Link className="nav-link" to="/#sobre">Sobre Mim</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#experiencias">Experiências</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/projetos">Projetos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#contato">Contato</a>
                        </li>
                    </ul>
                    <a className="btn btn-light" href="/Curriculo - Henrique Palermo Emerick.pdf" target="_blank" rel="noopener noreferrer">CV</a>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;