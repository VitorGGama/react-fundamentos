import Artigo from "./Artigo";

function Conteudo() {
  return (
    <main>
      <section>
        <h2>Conteúdo da aplicação</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum minus
          libero natus neque ullam dolor atque! Ullam hic, cum quod dolor harum
          illo expedita esse dolores illum fuga nostrum nisi.
        </p>
        <hr />

        {/*Reaproveitamento de componentes */}
        <Artigo />
        <Artigo />
        <Artigo />
      </section>
    </main>
  );
}

export default Conteudo;
