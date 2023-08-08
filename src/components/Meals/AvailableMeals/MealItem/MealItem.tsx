import { useContext } from "react";
import Meals from "../../../../models/meals.model";
import classes from "./MealItem.module.scss";

import MealItemForm from "./MealItemForm/MealItemForm";
import CartContext from "../../../../store/cart/cart-context";
import { Item } from "../../../../store/cart/cartReducer.model";

const MealItem: React.FC<{ meal: Meals }> = ({ meal }) => {
  const cartCtx = useContext(CartContext);
  const price = `$${meal.price.toFixed(2)}`;

  const addToCartHandler = (amount: number) => {
    const item: Item = { id: +meal.id, price: meal.price, amount };
    cartCtx.addItem(item);
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm inputId={meal.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
