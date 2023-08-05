import CartIcon from "../../Cart/CartIcon";
import classes from "./HeaderCartButton.module.scss";

const HeaderCartButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}> 3 </span>
    </button>
  );
};

export default HeaderCartButton;
