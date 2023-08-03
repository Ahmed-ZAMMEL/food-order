import Meals from "../../../../models/meals.model";
import classes from "./MealItem.module.scss";

import MealItemForm from "./MealItemForm/MealItemForm";

const MealItem: React.FC<{ meal: Meals }> = ({ meal }) => {
  const price = `$${meal.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm inputId={meal.id} />
      </div>
    </li>
  );
};

export default MealItem;
