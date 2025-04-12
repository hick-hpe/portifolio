const SobreMim = () => {
    const URL_IMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZtkLbZejb4GMCMBU0lgibDpSmjoHJg4WkIZWuBU26q1DNUZdcXh8SwW_TNXfz5T5BFQ&usqp=CAU";

    return (
        <div className="container">
            <div className="card-body text-center text-light pt-5"
                style={
                    { background: `url(${URL_IMAGE}) no-repeat center center`,
                        backgroundSize: 'cover',
                        height: '75vh'
                     }}
                >
                <h1 className="card-title"
                style={{
                    fontSize: '60px'
                }}
                >
                    Henrique Palermo
                </h1>
                <small>Desenvolvedor Frontend | Desenvolvedor Backend</small>
                {/* <p className="card-text">
                    Olá! Me chamo <strong>Henrique</strong>, sou estudante de Análise e Desenvolvimento de Sistemas, sou apaixonado por tecnologia, programação e resolver problemas com código. Estou sempre aprendendo coisas novas, focando em desenvolvimento web, mas disposto a explorar outras áreas, como mobile e jogos.
                </p> */}
            </div>
        </div>
    );
};

export default SobreMim;
