import classes from "./Cart.module.scss";
import Modal from "../UI/Modal/Modal";
import { useContext, useState } from "react";
import CartContext from "../../store/cart/cart-context";
import CartItem from "./CartItem/CartItem";
import { Item } from "../../store/cart/cartReducer.model";
import { CartItemType } from "./CartItem/CartItem.type";
import Checkout from "./Checkout/Checkout";
import UserData from "../../models/userData.model";

const Cart: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState<boolean>(false);
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

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = (userData: UserData) => {
    fetch("https://food-order-a3596-default-rtdb.firebaseio.com/order.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
    });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem key={item.id} cartItem={createCartItem(item)} />
      ))}
    </ul>
  );
  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {
        // TO DO: add a context to manipulate Modal
      }
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={onClose} />
      )}
      {!isCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
