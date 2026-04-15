import { useDispatch, useSelector } from "react-redux";
import "./PopupChat.css";

const PopupChat = () => {
  const dispatch = useDispatch();
  const isChat = useSelector((state) => state.toggle.chat);

  const liveChatHandler = () => {
    dispatch({
      type: "LIVE_CHAT",
      payload: { toggle: !isChat },
    });
    console.log(isChat);
  };
  return (
    <>
      <div>
        <div className="box-chat">
          <div>
            <h3>Customer Support</h3>
            <button>Let's Chat App</button>
          </div>
        </div>
      </div>
      <div className="wrap-mess">
        <button onClick={liveChatHandler}>
          <i className="fa-brands fa-facebook-messenger" />
        </button>
      </div>
    </>
  );
};

export default PopupChat;
