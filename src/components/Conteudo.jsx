import Artigo from "./Artigo";
import styled from "styled-components";

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
            icone="😎"
            titulo="Senhor dos Anéis"
            descricao="Livro criado por Tokien"
            lancamento={datasLancamentoLivros[0]}
          />
          <Artigo
            icone="🤢"
            titulo="Game of Thrones"
            descricao="Aventura maluca com gente"
            lancamento={datasLancamentoLivros[1]}
          />
          <Artigo
            icone="😂"
            titulo="Html5 e CSS3"
            descricao="Fonte de estudo para quem quer começar no front-end"
            lancamento={datasLancamentoLivros[2]}
          />
        </div>
      </section>
    </StyledConteudo>
  );
}

export default Conteudo;
