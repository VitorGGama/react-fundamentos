import Artigo from "./Artigo";
import styled from "styled-components";

/* Importando os assets de imagem*/
import imagem1 from "../assets/abra-o-livro.png";
import imagem2 from "../assets/livro-magico.png";
import imagem3 from "../assets/pilha-de-livros.png";

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
  const datasLancamentoLivros = ["15-03-2022", "25-07-1998", "02-03-1997"];

  return (
    <StyledConteudo>
      <section>
        <h2>Conteúdo da aplicação</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum minus
          libero natus neque ullam dolor atque! Ullam hic, cum quod dolor harum
          illo expedita esse dolores illum fuga nostrum nisi.
        </p>

        {/*Reaproveitamento de componentes */}
        <div className="artigos">
          <Artigo
            imagem={imagem1}
            icone="😎"
            titulo="Senhor dos Anéis"
            descricao="Livro criado por Tokien"
            lancamento={datasLancamentoLivros[0]}
          >
            <h4>Volumes</h4>
            <ul>
              <li>A sociedade do anel</li>
              <li>As duas torres</li>
              <li>O retorno do rei</li>
            </ul>
          </Artigo>
          <Artigo
            imagem={imagem2}
            icone="🤢"
            titulo="Game of Thrones"
            descricao="Aventura maluca com gente"
            lancamento={datasLancamentoLivros[1]}
          >
            <h4>Defuntos do livro</h4>
            <ol>
              <li>Ed stark</li>
              <li>Joao Peló</li>
              <li>Maria da Silva</li>
            </ol>
          </Artigo>
          <Artigo
            imagem={imagem3}
            icone="😂"
            titulo="Html5 e CSS3"
            descricao="Fonte de estudo para quem quer começar no front-end"
            lancamento={datasLancamentoLivros[2]}
          >
            <section>
              <h4>Assuntos</h4>
              <details>
                <summary>Estrutura</summary>
                <p>HTML5 para estruturar e tals...</p>
              </details>
            </section>

            <details>
              <summary>Estilização</summary>
              <p>CSS3 para a formatação</p>
            </details>
          </Artigo>
        </div>
      </section>
    </StyledConteudo>
  );
}

export default Conteudo;
