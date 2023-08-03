import Props from "../../../models/props.model";
import classes from "./Card.module.scss";

const Card: React.FC<Props> = ({ children }) => (
  <div className={classes.card}>{children}</div>
);

export default Card;
