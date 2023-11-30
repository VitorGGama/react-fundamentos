function Menu() {
  return (
    <nav>
      <a className={`${estilos["sombra"]} centralizar`} href="">
        Home
      </a>
      <a className="sombra" href="">
        Produtos
      </a>
      <a className="sombra" href="">
        Contato
      </a>
    </nav>
  );
}

export default Menu;
