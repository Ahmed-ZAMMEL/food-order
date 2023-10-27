import classes from "./Checkout.module.scss";
import { CheckoutProps } from "./Checkout.type";
import UserDataModel from "../../../models/userData.model";
const Checkout: React.FC<CheckoutProps> = ({ onCancel, onConfirm }) => {
  //TO DO: Use react form hook.

  const confirmHandler = ($event: React.FormEvent) => {
    const userDataExample: UserDataModel = {
      name: "example",
      street: "example",
      city: "example",
      postalCode: 0,
    };
    $event.preventDefault();
    // add user data
    onConfirm(userDataExample);
  };
  return (
    <form onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal-code">Postal Code</label>
        <input type="text" id="postal-code" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
