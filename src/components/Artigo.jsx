import styled from "styled-components";

const StyledArtigo = styled.article`
  background-color: pink;
  padding: 1rem;
  margin: 0.5rem 0 0.5rem 0;
  display: flex;

  h3 {
    color: blue;
    border-bottom: 2px solid black;
  }

  p {
    font-size: 1.1rem;
  }
`;
function Artigo() {
  return (
    <StyledArtigo>
      <h3>Artigo 1</h3>
      <p>Conteúdo do artigo 1 ...</p>
    </StyledArtigo>
  );
}

export default Artigo;
