import React from "react"
import "./LeftSideBar.css";

const leftSideBar = (props) => {
  return (
    <div className="container">
      <div className="Left-Item">
        <ul>
          <li className="item">
            {props.src}
            <div className="Item_Name">
              <a href="www.google.com">{props.text}</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default leftSideBar;
