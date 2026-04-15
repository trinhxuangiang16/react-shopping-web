import { useDispatch, useSelector } from "react-redux";
import "./PopupChat.css";
import { useRef, useState } from "react";

const PopupChat = () => {
  const dispatch = useDispatch();
  const isChat = useSelector((state) => state.toggle.chat);
  const inboxData = JSON.parse(localStorage.getItem("inboxData")) ?? [];
  console.log(inboxData);

  let inputRef = useRef();
  let srollRef = useRef(null);
  const sendHandler = (e) => {
    dispatch({
      type: "SEND",
      payload: { data: inputRef.current.value },
    });
    console.log(inputRef.current.value);

    srollRef.current?.scrollIntoView(false);
  };
  const textInbox = useSelector((state) => state.inbox.data);

  const liveChatHandler = () => {
    dispatch({
      type: "LIVE_CHAT",
      payload: { toggle: !isChat },
    });
    console.log(isChat);

    if (isChat) {
      dispatch({
        type: "CLOSE",
        payload: null,
      });
    }
  };

  return (
    <>
      {isChat ? (
        <div className="wrap-chat">
          <div className="box-chat">
            <div className="support-title">
              <p>Customer Support</p>
              <button>Let's Chat App</button>
            </div>
            <div className="text-chat">
              <ul>
                <li>Xin chào</li>
                <li>Làm thế nào để xem sản phẩm?</li>
                <li>Chào bạn</li>
                <li>Bạn có thể vào mục Shop để xem các sản phẩm</li>
                {textInbox
                  ? inboxData.map((ib, index) => <li key={index}>{ib}</li>)
                  : ""}
                <div ref={srollRef} style={{ backgroundColor: "green" }}></div>
              </ul>
            </div>
            <div className="form-type">
              <div>
                <img
                  className="support-img"
                  src="./images/supporter.png"
                  alt="supporter"
                />
                <input
                  className="support-input"
                  placeholder="Enter Message!"
                  type="text"
                  name="text"
                  ref={inputRef}
                ></input>
                <i className="fa-solid fa-paperclip"></i>
                <i className="fa-solid fa-face-smile"></i>
                <button className="btn-send" onClick={sendHandler}>
                  <i className="fa-sharp fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="wrap-mess">
        <button onClick={liveChatHandler}>
          <i className="fa-brands fa-facebook-messenger" />
        </button>
      </div>
    </>
  );
};

export default PopupChat;
