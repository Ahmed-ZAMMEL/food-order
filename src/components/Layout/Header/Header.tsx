import { Fragment } from "react";

import mealsImage from "../../../assets/meals.jpg";
import classes from "./Header.module.scss";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

const Header: React.FC<{ onShowCart: () => void }> = ({ onShowCart }) => {
  return (
    <Fragment>
      <header className={classes["header"]}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of deicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
