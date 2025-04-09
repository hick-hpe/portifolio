const Card = ({ title, content, textBtn }) => {
    return (
        <div className="col">
            <div className="card h-100 shadow-sm">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                    <a href="/projetos/web" className="btn btn-primary">{textBtn}</a>
                </div>
            </div>
        </div>
    )
}

export default Card;