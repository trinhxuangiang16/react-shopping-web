import "./PopupChat.css";

const PopupChat = () => {
  return (
    <div className="wrap-chat">
      <button onClick={liveChatHandler}>
        <i className="fa-brands fa-facebook-messenger" />
      </button>
    </div>
  );
};

export default PopupChat;
