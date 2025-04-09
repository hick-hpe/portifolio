import Card from "./Card";

const Content = () => {
    return (
        <main className="container my-5">
            <h1 className="mb-4 text-center">🚀 Meus Projetos</h1>
            <p className="text-center mb-5">
                Aqui você encontra os projetos que venho desenvolvendo, principalmente voltados para o desenvolvimento web.
                Estou sempre explorando novas ideias e tecnologias!
            </p>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                <Card
                    title='🌐 Projetos Web'
                    content='Aplicações e sistemas desenvolvidos com React, Node.js, Django e outras tecnologias web.'
                    textBtn='Ver Projetos'
                />

                <div className="col">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">🚧 Em Andamento</h5>
                            <p className="card-text">Projetos que estou desenvolvendo atualmente. Pode conter previews, ideias e protótipos.</p>
                            <a href="/projetos/em-andamento" className="btn btn-warning">Ver Em Andamento</a>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">💡 Em Breve</h5>
                            <p className="card-text">Projetos planejados para o futuro, incluindo ideias para jogos, apps ou ferramentas.</p>
                            <a href="/projetos/em-breve" className="btn btn-secondary">Ver Ideias</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <h2 className="text-center mb-4">🛠️ Tecnologias que uso</h2>
                <p className="text-center">
                    React • JavaScript • Node.js • Express • Django • Python • Bootstrap • Git • Docker • Linux
                </p>
            </div>
        </main>
    )
};

export default Content;