/* Cabecalho.jsx*/
import Menu from "./Menu";

/* Importação da lib Styled Components*/
import styled from "styled-components";

function Cabecalho() {
  return (
    <StyledCabecalho>
      {/*Propriedade de evento que executará, após o clique,
      uma funçâo intermediaria que fará açôes (chamar outras funçôes,
      executar outros processos etc*/}
      <h1
        onClick={() => {
          alert("Exemplo 1");
        }}
      >
        Olá React!😆
      </h1>
      <hr />
      <Menu />
    </StyledCabecalho>
  );
}
const StyledCabecalho = styled.header`
  background-color: black;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  hr {
    width: 50%;
    background-color: pink;
    border: none;
    height: 4px;
    margin: 8px auto;
  }
`;
export default Cabecalho;
