import React from "react";
import styled from "./Error.module.css";
import Card from "./Card";

const Error = (props) => {
  return (
    <Card className={styled.modal}>
      <header className={styled.head}>
        <h3>{props.Title}</h3>
      </header>
      <div className={styled.body}>
        <h1>{props.Detail}</h1>\
        <bottom className={styled.actions}>
          <button className={styled.action} onClick={props.click}>
            CLose
          </button>
        </bottom>
      </div>
    </Card>
  );
};

export default Error;
