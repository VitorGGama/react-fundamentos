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
function Artigo({ titulo, categoria, preco, aoClicar }) {
  return (
    <StyledArtigo>
      <h3 onClick={aoClicar}>{titulo}</h3>
      <p>{categoria}</p>
      <p>{`R$ ${preco}`}</p>
    </StyledArtigo>
  );
}

export default Artigo;

//Versão do Professor

/* function Artigo(props) {
  const formatarPreco = (valor) => {
    return valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <StyledArtigo>
        <h3 onclick={aoClicar}> {categoria} {props.categoria} </h3>
      <p>
        <b>Curso:</b> {props.titulo}
      </p>
      <p>
        <b>Preço:</b> {formatarPreco(props.preco)}
      </p>
    </StyledArtigo>
  );
}

export default Artigo;*/
