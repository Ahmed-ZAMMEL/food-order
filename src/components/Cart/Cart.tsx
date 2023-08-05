import classes from "./Cart.module.scss";
import Modal from "../UI/Modal/Modal";

const CART_ITEMS = [
  {
    id: "c1",
    name: "Sushi",
    amount: 2,
    price: 12.99,
  },
];
const Cart: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {CART_ITEMS.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
