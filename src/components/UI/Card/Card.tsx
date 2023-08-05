import PropsWithChildren from "../../../models/propsWithChildren.model";
import classes from "./Card.module.scss";

const Card: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={classes.card}>{children}</div>
);

export default Card;
