import InputModel from "../../../../../models/input.model";
import Input from "../../../../UI/Input/Input";
import classes from "./MealItemForm.module.scss";
const MealItemForm: React.FC<{ inputId: string }> = ({ inputId }) => {
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
    <form className={classes.form}>
      <Input input={input} />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
