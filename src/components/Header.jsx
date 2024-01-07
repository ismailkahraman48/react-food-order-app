import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

function Header() {
  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items.reduce((total,item) => {
    return total + item.quantity;
  },0)

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="" />
        <h1>RaactFood</h1>
      </div>
      <nav>
        <Button textOnly>{totalCartItems}</Button>
      </nav>
    </header>
  );
}

export default Header;
