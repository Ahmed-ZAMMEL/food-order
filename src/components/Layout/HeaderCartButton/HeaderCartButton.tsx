import CartIcon from "../../Cart/CartIcon";
import classes from "./HeaderCartButton.module.scss";

import { useContext } from "react";
import CartContext from "../../../store/cart/cart-context";
import { Item } from "../../../store/cart/cartReducer.model";

const HeaderCartButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx.items);
  const numberOfCartItems = cartCtx.items.reduce(
    (cuNumber, item: Item) => cuNumber + item.amount,
    0
  );
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}> {numberOfCartItems} </span>
    </button>
  );
};

export default HeaderCartButton;
