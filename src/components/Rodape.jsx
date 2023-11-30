function Rodape() {
  const exemplosEstilos = {
    backgroundColor: "white",
    padding: "4%",
    color: "blue",
    border: "solid 20px #f00",
  };
  return (
    <footer style={exemplosEstilos}>
      <h2 style={{ textAlign: "center" }}>Rodapé da aplicação</h2>
      <p className="destaque-texto centralizar ">Fundamentos de React</p>
      <p>
        Experimentando <b className="sombra">Classes</b>
      </p>
    </footer>
  );
}

export default Rodape;
