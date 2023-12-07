import Artigo from "./Artigo";
import styled from "styled-components";
import cursos from "../modules/cursos.js";
import { useState } from "react";

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
  .filtros {
    margin: 1rem 0;
    padding: 1rem 0;
    border-top: solid 2px;
    border-bottom: solid 2px;
  }
  .filtros button {
    margin: 0.9rem;
    font-size: 1.1rem;
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
  /*Criando um gerenciador de state para mudança/filtro 
  de categorias. Inicialmente começa como null pois ainda não
  temos uma escolha/seleção de categoria (aparece tudo) */
  const [categoria, setCategoria] = useState(null);
  //Capturamos (após o clique) o texto escrito em cada botão
  const aplicarFIltro = (event) => {
    //Em seguida passamos este texto para o state de cada categoria
    const categoriaEscolhida = event.currentTarget.innerText;
    setCategoria(categoriaEscolhida);
  };

  const limparFiltros = () => {
    setCategoria(null);
  };

  /* Gerando um novo array de cursos filtrados */
  const cursosFiltrados = cursos.filter((curso) => {
    return curso.categoria === categoria || categoria === null;
  });

  /*Guardando a quantidade de cursos filtrados */

  const quantidade = cursosFiltrados.length;

  return (
    <StyledConteudo>
      <h2>Conteúdo da aplicação</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        labore? Officia quae quo a quas excepturi distinctio sint voluptas
        labore iste veniam possimus facere adipisci sit repellat, voluptate,
        expedita aspernatur.
      </p>
      <div className="filtros">
        <p>
          <b>Filtar por: </b>
          <button onClick={aplicarFIltro}>Front-End</button>
          <button onClick={aplicarFIltro}>Back-End</button>
          <button onClick={aplicarFIltro}>Design</button>
          <button onClick={aplicarFIltro}>Mobile</button>
          <button onClick={aplicarFIltro}>Música</button>

          {categoria && (
            <button onClick={limparFiltros}>limpa Filtros 🧹</button>
          )}

          {/*Se a quantidade for zero (ou seja, não tem cursos da categoria
              filtrada), então mostre a mensagem. */}
          {quantidade === 0 && (
            <p style={{ color: "red", textAlign: "center" }}>
              <b> Não há cursos desta categoria!</b>
            </p>
          )}
        </p>
        <p>
          Quantidade de cursos: <b>{quantidade}</b>
        </p>
        {/* Renderização condicional
        O texto/tag/componente somente será <renderizado />
        <exibido>se o state categoria existir (ou seja, não é null
        , undefined, false) */}
        {categoria && (
          <p>
            Você escolheu: <b>{categoria}</b>{" "}
          </p>
        )}{" "}
      </div>

      <section className="container">
        <div className="row">
          {cursosFiltrados.map((curso, index) => (
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
