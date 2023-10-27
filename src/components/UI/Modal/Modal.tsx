import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.scss";
import PropsWithChildren from "../../../models/propsWithChildren.model";
import { ModelProps, BackdropProps } from "./Modal.type";

const Backdrop: React.FC<BackdropProps> = ({ onClose }): JSX.Element => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};
//! = this value is never null.
const portalElement = document.getElementById("overlays")!;

const Modal: React.FC<ModelProps> = ({ onClose, children }) => {
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
