import React from "react";
import classes from "./Input.module.scss";
import { InputProps } from "./input.type";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
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
