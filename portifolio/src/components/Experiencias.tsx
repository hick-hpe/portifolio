import styled from 'styled-components';

const Page = styled.div`
  background-color: #010f3d;
  color: #fff;
  padding-top: 60px;

  .titulo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 40px;

    h1 {
      font-size: 2rem;
      margin: 0;
    }

    .barra {
      background-color: #fff;
      height: 2px;
      flex: 1;
    }
  }

  .card-text {
    font-size: 20px;
    margin: 10px 0;
    line-height: 1.6;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    .titulo h1 {
      font-size: 1.5rem;
    }

    .card-text {
      font-size: 18px;
    }
  }
`;

const Experiencias = () => {
  return (
    <Page id="experiencias">
      <div className="container card-body">
        <div className="titulo">
          <span className="barra"></span>
          <h1 className="card-title">Experiências</h1>
          <span className="barra"></span>
        </div>

        <p className="card-text">
          <strong>Estágio em DevSecOps</strong><br />
          <em>CompassUol</em><br />
          <span><strong>Período:</strong> Outubro de 2024 - Março de 2025</span><br />
          <span><strong>Função:</strong> Estagiário atuando na área de DevSecOps, com foco em Docker, Linux e AWS. Aprendi a trabalhar com ambientes de desenvolvimento e segurança, além de automatizar processos utilizando containers e ferramentas de nuvem.</span>
        </p>
      </div>
    </Page>
  );
};

export default Experiencias;
