import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";

function App() {
  // Comentário de uma linha CTRL + ,
  /* Comentários JS de várias linhas */
  return (
    <>
      <Cabecalho />
      {/* Comentário no meio de JSX
    é normal ficar entre{} nesta situação. */}

      <Conteudo />

      <Rodape />
    </>
  );
}

export default App;
