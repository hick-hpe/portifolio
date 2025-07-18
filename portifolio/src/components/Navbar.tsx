import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav
            className='navbar navbar-expand-lg navbar-dark p-3 position-sticky top-0' style={{
                backgroundColor: "#010f3d",
                zIndex: "10",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)"
            }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">MyRepo</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Início</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#sobre">Sobre Mim</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#experiencias">Experiências</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projetos">Projetos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#contato">Contato</Link>
                        </li>
                    </ul>
                    <a
                        className="btn btn-light"
                        href="/Curriculo - Henrique Palermo Emerick.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CV
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
