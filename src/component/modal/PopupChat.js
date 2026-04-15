import { useDispatch, useSelector } from "react-redux";
import "./PopupChat.css";
import { useEffect, useRef } from "react";
import { toggleChat } from "../../store/toggleSlice";
import { sendMessage } from "../../store/inboxSlice";
import "@fortawesome/fontawesome-free/css/all.min.css";

const PopupChat = () => {
  const dispatch = useDispatch();
  const isChat = useSelector((state) => state.toggle.chat);
  const chat = useSelector((state) => state.inbox.data);
  const auth = useSelector((state) => state.auth); // ← Lấy auth info
  const inboxData = JSON.parse(localStorage.getItem("inboxData")) ?? [];

  const inputRef = useRef();
  const scrollRef = useRef(null);

  const sendHandler = () => {
    if (inputRef.current.value.trim()) {
      dispatch(sendMessage({ data: inputRef.current.value }));
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView(false);
  }, [chat, isChat]);

  const liveChatHandler = () => {
    dispatch(toggleChat(!isChat));
  };

  return (
    <div>
      {isChat ? (
        <div className="wrap-chat">
          <div className="box-chat">
            {/* Header với avatar admin */}
            <div className="support-title">
              <div className="support-header-content">
                <img
                  className="support-avatar"
                  src="./images/supporter.png"
                  alt="Support Admin"
                />
                <div className="support-info">
                  <p className="support-name">Customer Support</p>
                  <span className="support-status">Online</span>
                </div>
              </div>
              <button className="close-chat-btn" onClick={liveChatHandler}>
                ✕
              </button>
            </div>

            {/* Chat messages */}
            <div className="text-chat">
              <ul className="text-box-chat">
                <li className="my-chat">Xin chào</li>
                <li className="my-chat">Làm thế nào để xem sản phẩm?</li>

                {/* Admin message with avatar */}
                <div className="they-message">
                  <img
                    className="they-img"
                    src="./images/supporter.png"
                    alt="supporter"
                  />
                  <li className="they-chat">ADMIN: Chào bạn</li>
                </div>

                {/* Admin message with avatar */}
                <div className="they-message">
                  <img
                    className="they-img"
                    src="./images/supporter.png"
                    alt="supporter"
                  />
                  <li className="they-chat">
                    ADMIN: Bạn có thể vào mục Shop để xem các sản phẩm
                  </li>
                </div>

                {/* User messages */}
                {inboxData.map((ib, index) => (
                  <li className="li-my-chat" key={index}>
                    {ib}
                  </li>
                ))}
                <div className="scroll-div" ref={scrollRef}></div>
              </ul>
            </div>

            {/* Input form */}
            <div className="form-type">
              <div>
                <img
                  className="support-img"
                  src="./images/supporter.png"
                  alt="User"
                />
                <input
                  className="support-input"
                  placeholder="Enter Message!"
                  type="text"
                  name="text"
                  ref={inputRef}
                  onKeyPress={(e) => e.key === "Enter" && sendHandler()}
                />
                <i className="fa-solid fa-paperclip"></i>
                <i className="fa-solid fa-face-smile"></i>
                <button className="btn-send" onClick={sendHandler}>
                  <i className="fa-sharp fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* Chat button */}
      <div className="wrap-mess">
        <button onClick={liveChatHandler} title="Chat with us">
          <i className="fa-brands fa-facebook-messenger" />
        </button>
      </div>
    </div>
  );
};

export default PopupChat;
