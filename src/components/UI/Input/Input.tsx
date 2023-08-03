import InputModel from "../../../models/input.model";
import classes from "./Input.module.scss";

const Input: React.FC<{ input: InputModel }> = ({ input }): JSX.Element => {
  const { label, properties } = input;
  return (
    <div className={classes.input}>
      <label htmlFor={properties.id}>{label}</label>
      <input {...properties} />
    </div>
  );
};

export default Input;
