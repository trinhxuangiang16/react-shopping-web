import { useDispatch, useSelector } from "react-redux";
import "./PopupChat.css";
import { Form } from "react-router-dom";

const PopupChat = () => {
  const dispatch = useDispatch();
  const isChat = useSelector((state) => state.toggle.chat);
  const inboxData = JSON.parse(localStorage.getItem("inboxData")) ?? [];

  const text = FormData();
  console.log(text);

  // const formRef = useRef();

  // const resetHandler = () => {
  //   formRef.current.reset();
  // };

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
                {inboxData.map((ib, index) => (
                  <li key={index}>{ib}</li>
                ))}
              </ul>
            </div>
            <div className="form-type">
              <Form method="post" ref={formRef}>
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
                ></input>
                <i className="fa-solid fa-paperclip"></i>
                <i className="fa-solid fa-face-smile"></i>
                <i className="fa-sharp fa-solid fa-paper-plane"></i>
              </Form>
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
