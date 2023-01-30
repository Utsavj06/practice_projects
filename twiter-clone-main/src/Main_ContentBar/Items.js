import React from "react";
import Posts from "./Posts";
import "./Items.css";

const Items = (props) => {
  return (
    <div className="container">
      {props.Array_Item.map((mappedArray) => (
        <Posts name={mappedArray.name} key={mappedArray.id} />
      ))}
    </div>
  );
};

export default Items;
