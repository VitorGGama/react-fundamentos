import { useState } from "react";
import styled from "styled-components";

const StyledArtigo = styled.article`
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
function Artigo({ titulo, categoria, preco }) {
  const [cor, setCor] = useState("pink");

  const formatarPreco = (valor) => {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });
  };

  const mudarCor = () => {
    setCor(cor === "pink" ? "yellow" : "pink");
  };

  return (
    <StyledArtigo onClick={mudarCor} style={{ backgroundColor: cor }}>
      <h3>{titulo}</h3>
      <p>{categoria}</p>
      <p>{formatarPreco(preco)}</p>
    </StyledArtigo>
  );
}

export default Artigo;
