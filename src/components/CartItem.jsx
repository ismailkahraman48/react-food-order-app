import { currencyFormatter } from "../utils/formatting";

function CartItem({ name, quantity, price, onInreace, onDecrease }) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x {currencyFormatter(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onInreace}>+</button>
      </p>
    </li>
  );
}

export default CartItem;
s;
