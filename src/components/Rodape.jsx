import styled from "styled-components";

const StyledRodape = styled.footer`
  background-color: #ab77dc80;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function Rodape() {
  return (
    <StyledRodape>
      <h2>Rodapé da aplicação</h2>
    </StyledRodape>
  );
}

export default Rodape;
