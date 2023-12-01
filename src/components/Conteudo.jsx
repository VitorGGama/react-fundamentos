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
          <Artigo />
          <Artigo />
          <Artigo />
        </div>
      </section>
    </StyledConteudo>
  );
}

export default Conteudo;
