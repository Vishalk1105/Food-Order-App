import React from "react";
import classes from "./Modal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";
const BackDrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverLays = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElements = document.getElementById("overLays");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop />, portalElements)}
      {ReactDOM.createPortal(
        <ModalOverLays>{props.children} </ModalOverLays>,
        portalElements
      )}
    </Fragment>
  );
};

export default Modal;
