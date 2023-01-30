import React from "react";
import LeftSideContents from "../Contents/LeftSideContents";
import WritePost from "./WritePost";
import "./NewPost.css";

const NewPost = (props) => {
  const getData = (enteredPost) => {
    const newPost = {
      name: enteredPost,
      id: Math.trunc(Math.random() * 10 + 1),
    };
    props.onAddPost(newPost);
    return null;
  };

  return (
    <div>
      <LeftSideContents className="pos" onAddPost={getData} /> 
      <WritePost onAddPost={getData} />
    </div>
  );
};

export default NewPost;
