import { FormEvent } from "react";
import classes from "./Checkout.module.scss";
import UserData from "../../../models/userData.model";
const Checkout: React.FC<{
  onCancel: () => void;
  onConfirm: (userData: UserData) => void;
}> = ({ onCancel, onConfirm }) => {
  //TO DO: Use react form hook.

  const isEmpty = (str: string) => !str?.trim().length;
  const isFiveChars = (str: string) => str.trim().length !== 5;

  const confirmHandler = ($event: FormEvent) => {
    $event.preventDefault();
    // add user data
    onConfirm({
      name: "example",
      street: "example",
      city: "example",
      postalCode: 0,
    });
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
