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
  const aplicarFIltro = (event) => {
    console.log(event.currenteTarget.innerText);
  };
  return (
    <StyledConteudo>
      <h2>Conteúdo da aplicação</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        labore? Officia quae quo a quas excepturi distinctio sint voluptas
        labore iste veniam possimus facere adipisci sit repellat, voluptate,
        expedita aspernatur.
        <hr />
        <b>Filtar por: </b>
        <button onClick={aplicarFIltro}>Front End</button>
        <button onClick={aplicarFIltro}>Back End</button>
        <button onClick={aplicarFIltro}>Design</button>
      </p>
      <section className="container">
        <div className="row">
          {cursos.map((curso, index) => (
            <div key={index} className="col-md-4 mb-4">
              <Artigo
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
