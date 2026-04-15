import { useDispatch } from "react-redux";
import "./PopupChat.css";

const PopupChat = () => {
  const dispatch = useDispatch();
  const liveChatHandler = () => {};
  return (
    <div className="wrap-chat">
      <button onClick={liveChatHandler}>
        <i className="fa-brands fa-facebook-messenger" />
      </button>
    </div>
  );
};

export default PopupChat;
