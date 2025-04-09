const Contato = () => {
    return (
        <section className="container my-5" id="contato">
            <h2 className="text-center mb-4">📬 Contato</h2>
            <p className="text-center mb-4">
                Estou sempre aberto para novas conexões, oportunidades ou até mesmo trocar uma ideia sobre tecnologia!
            </p>

            <div className="d-flex justify-content-center gap-4 flex-wrap">
                <a href="mailto:seuemail@email.com" className="btn btn-light d-flex align-items-center gap-2">
                    <i className="bi bi-envelope-at-fill"></i> Email
                </a>
                <a href="https://github.com/hick-hpe" target="_blank" className="btn btn-light d-flex align-items-center gap-2">
                    <i className="bi bi-github"></i> GitHub
                </a>
                <a href="https://www.linkedin.com/in/seu-linkedin" target="_blank" className="btn btn-light d-flex align-items-center gap-2">
                    <i className="bi bi-linkedin"></i> LinkedIn
                </a>
            </div>
        </section>
    );
};

export default Contato;
