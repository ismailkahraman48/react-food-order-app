import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";


function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const handleCloseCart = () => {
    console.log("close cart")
    userProgressCtx.hideCart()
  }

  return (
    <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
      <h2>Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">Cart Total : {currencyFormatter(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick = {handleCloseCart}>Close</Button>
        <Button onClick = {handleCloseCart}>Go to Checkout</Button>
      </p>
    </Modal>
  );
}

export default Cart;
