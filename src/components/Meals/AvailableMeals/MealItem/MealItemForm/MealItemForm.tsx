import { createRef, useState } from "react";
import InputModel from "../../../../../models/input.model";
import Input from "../../../../UI/Input/Input";
import classes from "./MealItemForm.module.scss";
import { MealItemFormProps } from "./MealItemForm.type";

const MealItemForm: React.FC<MealItemFormProps> = ({
  inputId,
  onAddToCart,
}) => {
  const [amountIsValid, setAmountIsValid] = useState<boolean>(true);
  const amountInputRef = createRef<HTMLInputElement>();

  const submitHandler = ($event: React.FormEvent): void => {
    $event.preventDefault();
    const enteredAmount = amountInputRef.current
      ? amountInputRef.current.value
      : "";
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  };

  const input: InputModel = {
    label: "Amount",
    properties: {
      id: inputId,
      type: "number",
      min: 1,
      max: 5,
      step: 1,
      defaultValue: 1,
    },
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input ref={amountInputRef} input={input} />
      <button>+ Add</button>
      {!amountIsValid && <p> Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
