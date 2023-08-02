import CartIcon from "../../Cart/CartIcon";
import classes from "./HeaderCartButton.module.scss";

const HeaderCartButton: React.FC = (props) => {
    return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your cart</span>
            <span className={classes.badge}> 3 </span>
        </button>
    );
};

export default HeaderCartButton;