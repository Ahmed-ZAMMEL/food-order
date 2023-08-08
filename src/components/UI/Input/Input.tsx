import React from "react";
import InputModel from "../../../models/input.model";
import classes from "./Input.module.scss";

const Input = React.forwardRef<HTMLInputElement, { input: InputModel }>(
  ({ input }, ref): JSX.Element => {
    const { label, properties } = input;
    return (
      <div className={classes.input}>
        <label htmlFor={properties.id}>{label}</label>
        <input ref={ref} {...properties} />
      </div>
    );
  }
);

export default Input;
