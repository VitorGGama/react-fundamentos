import Menu from "./Menu";

/* IMportação do módulo  CSS como um objeto
chamado estilos (o nome é a seu critério. */
import estilos from "./Cabecalho.module.css";

function Cabecalho() {
  return (
    <header>
      <h1>
        <span className={estilos["destaque-texto"]}>Olá</span>{" "}
        <span className={estilos.sombra}>React!</span>😆
      </h1>
      <hr />
      <p className={`${estilos["destaque-texto"]} centralizar`}>
        Classes combinadas
      </p>
      <Menu />
    </header>
  );
}

export default Cabecalho;
