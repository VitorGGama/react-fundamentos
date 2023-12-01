/* Menu.jsx*/
import styled from "styled-components";

const StyledMenu = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    width: 30%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 100ms;
    /*& -> referencia ao seletor pai */
    &:hover {
      background-color: pink;
      color: black;
    }
  }
`;

function Menu() {
  return (
    <StyledMenu>
      <a href="">Home</a>
      <a href="">Produtos</a>
      <a href="">Contato</a>
    </StyledMenu>
  );
}

export default Menu;
