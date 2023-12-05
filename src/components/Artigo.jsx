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
function Artigo(props) {
  return (
    <StyledArtigo>
      <h3> {props.titulo}</h3>
      <p>{props.descricao}</p>
    </StyledArtigo>
  );
}

export default Artigo;
