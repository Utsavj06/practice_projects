import React, { useState } from "react";
import LeftSideBar from "./LeftSideBar";
import "./LeftSideContents.css";
import { FaTwitter } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BsBookmarks } from "react-icons/bs";
import { VscListSelection } from "react-icons/vsc";
import { ImProfile } from "react-icons/im";
import { CgMoreO } from "react-icons/cg";
import Button from "./Button";
import styled from "styled-components";
import Popup from "./Popup";
import Icons from "../Main_ContentBar/Icons";
import { GoFileMedia } from "react-icons/go";
import { AiOutlineGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { GrEmoji } from "react-icons/gr";
import { MdSchedule } from "react-icons/md";
import Error from "../Main_ContentBar/Ui/Error";

const Left = styled.div`
  position: fixed;
`;

const ContentsLeft = styled.div`
  padding-top: 15px;
  padding-left: 70px;
  background-color: black;
  height: 100vh;
  font-size: 10px;
  border-right: 1px solid silver;
`;
const ContentsItems = styled.div`
  display: grid;
  grid-template-rows: 54px 50px 50px 50px 50px 50px 50px 50px 50px 30px;
  width: 300px;
`;

function LeftSideContents(props) {
  const [isOpen, setIsOpen] = useState(false);
  let [enteredData, setData] = useState("");
  const [error, setError] = useState();
  const click_button = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const youClick = () => {
    setError(false);
  };
  const getInput = (event) => {
    setData(event.target.value);
  };

  const myClick = () => {
    if (enteredData.trim().length === 0) {
      setError({
        Title: "Post Invalid",
        Detail: "Enter the Post",
      });
      setIsOpen(false);
      return;
    }
    props.onAddPost(enteredData);
    setIsOpen(false);
    setData("");
  };
  return (
    <Left className={props.className}>
      <ContentsLeft>
        <ContentsItems>
          <LeftSideBar src={<FaTwitter />} />
          <LeftSideBar src={<FaHome />} text="Home" />
          <LeftSideBar src={<BsSearch />} text="Explore" />
          <LeftSideBar src={<BsBell />} text="Notifications" />
          <LeftSideBar src={<BiMessageRoundedDetail />} text="Messages" />
          <LeftSideBar src={<BsBookmarks />} text="Bookmarks" />
          <LeftSideBar src={<VscListSelection />} text="Lists" />
          <LeftSideBar src={<ImProfile />} text="Profiles" />
          <LeftSideBar src={<CgMoreO />} text="More" />
          {error && (
            <Error Title={error.Title} Detail={error.Detail} click={youClick} />
          )}
          <Popup open={isOpen} className="pop-up">
            <div>
              <div className="Close" onClick={close}>
                x
              </div>
              <textarea
                className="sizing"
                placeholder="What's happening ?"
                value={enteredData}
                onChange={getInput}
              />
              <div className="post-items">
                <div className="icons">
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
                  clicked={myClick}
                  name={<b>Tweet</b>}
                />
              </div>
            </div>
          </Popup>

          {/* button execution */}
          <Button
            Sizeb={{
              width: "200px",
              height: "50px",
              backgroundColor: "DarkCyan",
              borderRadius: "30px",
              border: "none",
              fontSize: "15px",
              color: "White",
            }}
            clicked={click_button}
            name={<b>Tweet</b>}
          />
        </ContentsItems>
      </ContentsLeft>
    </Left>
  );
}

export default LeftSideContents;
