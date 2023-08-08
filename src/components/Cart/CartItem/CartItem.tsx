import classes from "./CartItem.module.scss";
import { CartItemTypeFC } from "./CartItem.type";

const CartItem: React.FC<CartItemTypeFC> = ({ cartItem }) => {
  const formattedPrice = `$${cartItem.price.toFixed(2)}`;
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2></h2>
        <div className={classes.summary}>
          <span className={classes.price}>{formattedPrice}</span>
          <span className={classes.amount}>x {cartItem.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={cartItem.onRemove}></button>
        <button onClick={cartItem.onAdd}></button>
      </div>
    </li>
  );
};

export default CartItem;
