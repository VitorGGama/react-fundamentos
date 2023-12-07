import Cabecalho from "./components/Cabecalho";
import Home from "./pages/Home";
import Produtos from "./pages/Produto";
import Contato from "./pages/Contato";
import Rodape from "./components/Rodape";
import Container from "./components/Container";

function App() {
  // Comentário de uma linha CTRL + ,
  /* Comentários JS de várias linhas */
  return (
    <>
      <Cabecalho />

      <Container>
        <Home />
        <Produtos />
        <Contato />
      </Container>

      <Rodape />
    </>
  );
}

export default App;
