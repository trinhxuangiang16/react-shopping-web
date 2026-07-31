import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { toggleChat } from "../../store/toggleSlice";
import { sendMessage } from "../../store/inboxSlice";
import { Button } from "../ui/button";
import { MessageSquare, Send, X, Smile, Paperclip } from "lucide-react";

const PopupChat = () => {
  const dispatch = useDispatch();
  const isChat = useSelector((state) => state.toggle.chat);
  const chat = useSelector((state) => state.inbox.data);
  const inboxData = JSON.parse(localStorage.getItem("inboxData")) ?? [];

  const inputRef = useRef();
  const scrollRef = useRef(null);

  const sendHandler = () => {
    if (inputRef.current && inputRef.current.value.trim()) {
      const userMessage = inputRef.current.value;
      dispatch(sendMessage({ data: userMessage }));
      inputRef.current.value = "";

      setTimeout(() => {
        const replies = [
          "Boutique Shop has received your message. We will reply shortly!",
          "Hello, thanks for reaching out! Which product do you need help with?",
          "Your request is being processed, please wait a moment for our support agent!"
        ];
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        dispatch(sendMessage({ data: "SUPPORT: " + randomReply }));
      }, 1500);
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
      {isChat && (
        <div className="fixed bottom-24 right-4 z-50 w-full max-w-sm sm:max-w-md animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-2xl">
            <div className="flex items-center justify-between bg-blue-600 px-4 py-3.5 text-white">
              <div className="flex items-center gap-3">
                <img
                  className="size-9 rounded-full border border-white/40 object-cover bg-white"
                  src="./images/supporter.png"
                  alt="Support Admin"
                />
                <div>
                  <p className="text-sm font-bold text-white">
                    Customer Support
                  </p>
                  <span className="flex items-center gap-1.5 text-xs text-blue-100 font-medium">
                    <span className="size-2 rounded-full bg-emerald-400"></span>
                    Online 24/7
                  </span>
                </div>
              </div>
              <button
                className="size-8 rounded-full grid place-items-center text-white/80 transition-all hover:bg-white/20 hover:text-white"
                onClick={liveChatHandler}
                aria-label="Close chat"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="h-72 overflow-y-auto bg-slate-50 px-4 py-3 space-y-3">
              <div className="flex items-end gap-2 self-start max-w-[85%]">
                <img
                  className="size-7 rounded-full object-cover shrink-0"
                  src="./images/supporter.png"
                  alt="supporter"
                />
                <div className="rounded-2xl rounded-bl-xs bg-white border border-slate-200 p-3 text-xs text-slate-700 shadow-2xs">
                  Hello! How can Boutique Store help you today?
                </div>
              </div>

              {inboxData.map((ib, index) => {
                const isSupport = ib.startsWith("SUPPORT: ");
                const text = isSupport ? ib.replace("SUPPORT: ", "") : ib;

                if (isSupport) {
                  return (
                    <div key={index} className="flex items-end gap-2 self-start max-w-[85%] animate-in fade-in slide-in-from-bottom-1 duration-150">
                      <img
                        className="size-7 rounded-full object-cover shrink-0"
                        src="./images/supporter.png"
                        alt="supporter"
                      />
                      <div className="rounded-2xl rounded-bl-xs bg-white border border-slate-200 p-3 text-xs text-slate-700 shadow-2xs">
                        {text}
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={index}
                    className="ml-auto max-w-[80%] rounded-2xl rounded-br-xs bg-blue-600 p-3 text-xs text-white shadow-2xs font-medium animate-in fade-in slide-in-from-bottom-1 duration-150"
                  >
                    {text}
                  </div>
                );
              })}
              <div ref={scrollRef}></div>
            </div>

            <div className="border-t border-slate-200 bg-white p-3">
              <div className="flex items-center gap-2">
                <input
                  className="h-10 flex-1 rounded-xl bg-slate-50 border border-slate-200 px-3.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Type a message..."
                  type="text"
                  ref={inputRef}
                  onKeyPress={(e) => e.key === "Enter" && sendHandler()}
                />
                <Button
                  variant="primary"
                  size="sm"
                  onClick={sendHandler}
                  className="h-10 px-4 rounded-xl font-bold bg-blue-600 hover:bg-blue-700 text-white shrink-0"
                >
                  <Send className="size-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-6 right-4 z-50">
        <Button
          variant="primary"
          onClick={liveChatHandler}
          title="Live Chat"
          aria-label="Live Chat"
          className="size-13 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl flex items-center justify-center p-0"
        >
          <MessageSquare className="size-6" />
        </Button>
      </div>
    </div>
  );
};

export default PopupChat;

