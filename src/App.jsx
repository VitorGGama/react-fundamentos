import Cabecalho from "./components/Cabecalho";
import Home from "./pages/Home";
import Produtos from "./pages/Produto";
import Contato from "./pages/Contato";
import Rodape from "./components/Rodape";
import Container from "./components/Container";

/* Importação de recursos/componentes do React Router */
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // Comentário de uma linha CTRL + ,
  /* Comentários JS de várias linhas */
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <Container>
          <Routes>
            <Route Component={Home} exact path="/" />
            <Route Component={Produtos} path="/produtos" />
            <Route Component={Contato} path="/contato" />
          </Routes>
        </Container>
        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default App;
