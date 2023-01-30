import React, { useState } from "react";
import styles from "./WritePost.module.css";
import Icons from "./Icons";
import { GoFileMedia } from "react-icons/go";
import { AiOutlineGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { GrEmoji } from "react-icons/gr";
import { MdSchedule } from "react-icons/md";
import Button from "../Contents/Button";
import Error from "./Ui/Error";

const WritePost = (props) => {
  let [enteredData, setData] = useState("");
  const [error, setError] = useState();
  const getInput = (event) => {
    setData(event.target.value);
  };

  const youClick = () => {
    setError(false);
  };

  const click_button = (event) => {
    //     //event.preventDefault();
    //     const newData = enteredData;
    //     //console.log(newData);
    if (enteredData.trim().length === 0) {
      setError({
        Title: "Post Invalid",
        Detail: "Enter the Post",
      });
      return;
    }
    props.onAddPost(enteredData);
    //     // to set value in null
    setData("");
  };

  return (
    <div>
      {error && (
        <Error Title={error.Title} Detail={error.Detail} click={youClick} />
      )}
      <div className={styles.input}>
        <textarea
          className={styles.writing}
          placeholder="What's happening ?"
          value={enteredData}
          onChange={getInput}
        />
        <div className={styles["post-item"]}>
          <div className={styles.icon}>
            <Icons src={<GoFileMedia />} />
            <Icons src={<AiOutlineGif />} />
            <Icons src={<BiPoll />} />
            <Icons src={<GrEmoji />} />
            <Icons src={<MdSchedule />} />
          </div>
          <Button
            Sizeb={{
              width: "100px",
              height: "35px",
              backgroundColor: "DarkCyan",
              borderRadius: "20px",
              border: "none",
              fontSize: "17px",
              color: "White",
            }}
            clicked={click_button}
            name={<b>Tweet</b>}
          />
        </div>
      </div>
    </div>
  );
};

export default WritePost;
