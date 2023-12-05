import styled from "styled-components";

const StyledArtigo = styled.article`
  background-color: pink;
  padding: 1rem;
  margin: 0.5rem 0 0.5rem 0;

  h3 {
    color: blue;
    border-bottom: 2px solid black;
  }

  p {
    font-size: 1.1rem;
  }
`;

/* Definindo props para o componente*/
function Artigo({ imagem, icone, titulo, descricao, lancamento, children }) {
  return (
    <StyledArtigo>
      <img src={imagem} alt="" />
      <h3>
        <span>{icone}</span>
        {titulo}
      </h3>
      <p>{descricao}</p>
      <p>
        <b> Lançamento </b>
        <time> {lancamento}</time>
      </p>
      {children}
    </StyledArtigo>
  );
}

export default Artigo;
