import React, { useState } from "react";
import Header from "./Header";
import "./MainContainer";
import NewPost from "./NewPost";
import Items from "./Items";
//import LeftSideContents from "../Contents/LeftSideContents";

const Myarray = [
  {
    // selected: false,
    id: "e1",
    name: "A paragraph is a series of sentences that are organized and coherent.",
  },
  {
    //selected: false,
    id: "e2",
    name: "A paragraph is defined as “a group of sentences or a single sentence that forms a unit.",
  },
];

const MainContainer = (props) => {
  const [new_Array, setNewArray] = useState(Myarray);

  const onSubmitPost = (data) => {
    setNewArray((prevArray) => {
      return [data, ...prevArray];
    });
  };

  return (
    <div>
      <Header />
      <NewPost onAddPost={onSubmitPost} />
      <Items Array_Item={new_Array} />
    </div>
  );
};

export default MainContainer;
