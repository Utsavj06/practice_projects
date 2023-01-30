import React from "react";
import ReactDOM from "react-dom";

const Popup = (props) => {
  const abc = props.open;
  if (!abc) return null;
  return ReactDOM.createPortal(
    <div className={props.className} onClick={props.onClick}>
      {props.children}
    </div>,
    document.getElementById("root-portal")
  );
};

export default Popup;
