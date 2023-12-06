import Artigo from "./Artigo";
import styled from "styled-components";
import cursos from "../modules/cursos.js";

/* Importando os assets de imagem*/

const StyledConteudo = styled.main`
  width: 90vw;
  margin: 1rem auto;
  background-color: aliceblue;
  padding: 1rem;
  box-shadow: darkblue 0 0 1px inset;

  h2,
  p {
    padding: 0.2rem 0;
  }

  @media screen and (min-width: 650px) {
    .artigos {
      display: flex;
      justify-content: space-between;

      & article {
        width: 32%;
      }
    }
  }
`;

function Conteudo() {
  /* Função que será chamada a partir do evento acionado por 
  um componente/elemento.*/
  const exemplo2 = () => {
    alert("Exemplo 2");
  };

  const exemplo3 = (valor) => {
    alert("Exemplo 3" + valor);
  };
  return (
    <StyledConteudo>
      <h2>Conteúdo da aplicação</h2>

      <button onClick={exemplo2}>Exemplo 2</button>
      <br />

      <button onClick={exemplo3}>
        Exemplo 3 (Acionando o evento/função através do conteúdo [pai])
      </button>
      <section className="container">
        <div className="row">
          {cursos.map((curso, index) => (
            <div key={index} className="col-md-4 mb-4">
              <Artigo
                /* È necessário criar uma prop para passar a 
              chamada/referencia da função do componente pai*/
                // handeClick={() => {exemplo3(curso.categoria ) } }
                aoClicar={() => {
                  exemplo3(curso.categoria);
                }}
                key={curso.id}
                titulo={curso.titulo}
                categoria={curso.categoria}
                preco={curso.preco}
              />
            </div>
          ))}
        </div>
      </section>
    </StyledConteudo>
  );
}

export default Conteudo;
