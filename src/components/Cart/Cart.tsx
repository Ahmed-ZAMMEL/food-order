import classes from "./Cart.module.scss";
import Modal from "../UI/Modal/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart/cart-context";
import CartItem from "./CartItem/CartItem";
import { Item } from "../../store/cart/cartReducer.model";
import { CartItemType } from "./CartItem/CartItem.type";

const Cart: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (item: Item) => {
    cartCtx.removeItem(item);
  };
  const cartItemAddHandler = (item: Item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const createCartItem = (item: Item): CartItemType => ({
    ...item,
    onRemove: cartItemRemoveHandler.bind(null, item),
    onAdd: cartItemAddHandler.bind(null, item),
  });

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem key={item.id} cartItem={createCartItem(item)} />
      ))}
    </ul>
  );
  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
