import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.scss";
import PropsWithChildren from "../../../models/propsWithChildren.model";
import Modelprops from "./propsType.model";

const Backdrop: React.FC<{ onClose: () => void }> = ({
  onClose,
}): JSX.Element => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay: React.FC<PropsWithChildren> = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
//! = this value is never null.
const portalElement = document.getElementById("overlays")!;

const Modal: React.FC<Modelprops> = ({ onClose, children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
