import React from "react";

const Button = (props) => {
  return (
    <div>
      {/* <button className={props.Sizeb} onClick={props.clicked}>
        {props.name}
      </button> */}
      <button className={props.New} style={props.Sizeb} onClick={props.clicked}>
        {props.name}
      </button>
    </div>
  );
};
export default Button;
