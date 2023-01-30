import React, { useState } from "react";
import "./Posts.css";
import Button from "../Contents/Button";

const Posts = (props) => {
  const [color, setcolor] = useState(true);
  const abc = () => {
    setcolor(false);
  };
  return (
    <div className="Content-Gap">
      <h2>
        {props.name}
        <div className="operations">
          <Button
            //newclass={`${!color ? "newcolor" : ""}`}
            New={` ${!color ? "newcolor" : ""}`}
            clicked={abc}
            Sizeb={{
              width: "50px",
              height: "32px",
              border: "none",
              fontSize: "15px",
              color: "Black",
            }}
            name="Like"
          />
          <Button
            Sizeb={{
              width: "90px",
              height: "32px",
              backgroundColor: "White",
              border: "none",
              fontSize: "15px",
              color: "Black",
            }}
            name="Comment"
          />
        </div>
      </h2>
    </div>
  );
};

export default Posts;
