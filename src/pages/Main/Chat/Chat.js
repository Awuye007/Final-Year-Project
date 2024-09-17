import React, { useState } from "react";
import "./Chat.css";

export const Chat = () => {
  const [messages, setMessages] = useState([
    {
      message: ["Hello", "It's been a long time..."],
      type: "receiver",
      name: "Jane Doe",
      time: new Date("2022-01-01T00:00:00.000Z"),
      image: "https://i.pravatar.cc/300",
    },
    {
      message: ["Hi"],
      type: "sender",
      name: "John Doe",
      time: new Date().setTime(new Date().getTime() - 60 * 60 * 1000),
      image: "https://i.pravatar.cc/300",
    },
  ]);

  const [message, setMessage] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleChange = (e) => {
    const value = e.target.value;

    if (e.target.name === "message") {
      setMessage(value);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      sendMessage();
      sendReceiverMessage();
    }
  };

  const sendMessage = () => {
    if (message === "") {
      return;
    }

    const newMessage = {
      message: [message],
      type: "sender",
      name: "John Doe",
      time: new Date(),
      image: "https://i.pravatar.cc/300",
    };

    // Add message to array or already sent message if the time is the same
    for (let i = 0; i < messages.length; i++) {
      const element = messages[i];
      if (
        element.type === newMessage.type &&
        element.time === newMessage.time
      ) {
        element.message.push(newMessage.message[0]);
        setMessages([...messages]);
        scrollToBottom();
        setMessage("");
        break;
      } else {
        setMessages((prev) => [...prev, newMessage]);
        scrollToBottom();
        setMessage("");
        break;
      }
    }
  };

  const sendReceiverMessage = () => {
    // Send message for recipient
    const recipient = {
      message: ["Hello there. This is a test message. I hope you are well."],
      type: "receiver",
      name: "Jane Doe",
      time: new Date(),
      image: "https://i.pravatar.cc/300",
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, recipient]);
      scrollToBottom();
    }, 1000);
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      const chat = document.getElementById("chat");
      chat.scrollTop = chat.scrollHeight;
    }, 100);
  };

  return (
    <div className="w-full bg-grey rounded-2xl h-5/6 flex overflow-hidden">
      <div
        className={`overflow-hidden w-full md:w-2/5 md:block ${open ? "hidden" : ""}`}
      >
        <div className="flex gap-20 justify-between items-center p-4 mb-5">
          <div className="flex gap-3 items-center text-nowrap">
            <img
              src="https://picsum.photos/200/300"
              alt="profile"
              className="w-10 h-10 rounded-lg aspect-square"
            />
            <div>
              <h3 className="text-white font-medium">John Doe</h3>
              <p className="text-slate-400 text-xs">Full Stack Developer</p>
            </div>
          </div>
          <button>
            <i className="bi bi-gear-fill text-slate-400"></i>
          </button>
        </div>
        <div className="rounded-full bg-slate-950 p-3 mb-5 flex items-center gap-3 mx-4">
          <i className="bi bi-search text-slate-400"></i>
          <input
            type="text"
            placeholder="Search"
            className="bg-slate-950 outline-none w-full text-white placeholder:text-slate-400 text-sm"
          />
        </div>
        <div className="conversations-container w-full">
          {Array.from({ length: 10 }).map((_, index) => (
            <button
              className="conversation flex items-center gap-3 p-3 hover:bg-gray-900 transition outline-none w-full"
              onClick={() => setOpen(true)}
              key={index}
            >
              <img
                src="https://picsum.photos/200/300"
                alt="profile"
                className="w-10 h-10 rounded-lg aspect-square"
              />
              <div className="w-full">
                <div className="flex items-center gap-3 justify-between mb-1">
                  <h3 className="text-white font-medium">John Doe</h3>
                  <p className="text-slate-400 text-xs">9:30am</p>
                </div>
                <p className="text-slate-400 text-xs truncate max-w-[70vw] md:max-w-[17vw]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  venenatis luctus elit, a accumsan quam imperdiet sit amet.
                  Nullam congue porta diam, sed sollicitudin lacus euismod
                  condimentum.
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div
        className={`chat-section flex-grow bg-gray-900 w-full md:block ${open ? "" : "hidden"}`}
      >
        <div className="flex gap-3 justify-between items-center p-4 shadow-md w-full">
          <i
            className="bi bi-chevron-left text-slate-400"
            onClick={() => setOpen(false)}
          ></i>
          <div className="flex flex-1 gap-3 items-center">
            <img
              src="https://picsum.photos/200/300"
              alt="profile"
              className="w-10 h-10 rounded-lg aspect-square"
            />
            <div className="text-nowrap">
              <h3 className="text-white font-medium">John Doe</h3>
              <p className="text-slate-400 text-xs">Full Stack Developer</p>
            </div>
          </div>
          <div className="flex gap-10 items-center pe-4">
            <button>
              <i className="bi bi-telephone text-slate-400"></i>
            </button>
            <button>
              <i className="bi bi-person-plus text-slate-400"></i>
            </button>
          </div>
        </div>
        <div className="chat-container px-4" id="chat">
          {messages
            .sort((a, b) => new Date(a.time) - new Date(b.time))
            .map((message, index) =>
              message.type === "receiver" ? (
                <div className="w-full my-3" key={index}>
                  <div className="flex place-items-end gap-3 mb-3">
                    <img
                      src={message.image}
                      alt="profile"
                      className="w-10 h-10 rounded-lg"
                    />
                    <div>
                      {message.message.map((msg, index) => (
                        <p
                          className={`text-white text-sm bg-cyan-600 w-fit p-3 rounded-3xl px-4 max-w-lg ${index === message.message.length - 1 ? "rounded-bl-none" : "mb-3"}`}
                          key={index}
                        >
                          {msg}
                        </p>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-400 text-xs">
                    {new Intl.DateTimeFormat("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    }).format(new Date(message.time))}
                  </p>
                </div>
              ) : (
                <div className="w-full my-3" key={index}>
                  <div className="flex place-items-end gap-3 mb-3 justify-end">
                    <div>
                      {message.message.map((msg, index) => (
                        <p
                          className={`text-white text-sm bg-slate-800 w-fit p-3 rounded-3xl px-4 max-w-lg ${index === message.message.length - 1 ? "rounded-br-none" : "mb-3"}`}
                          key={index}
                        >
                          {msg}
                        </p>
                      ))}
                    </div>
                    <img
                      src="https://picsum.photos/200/300"
                      alt="profile"
                      className="w-10 h-10 rounded-lg"
                    />
                  </div>
                  <p className="text-slate-400 text-xs text-end">
                    {new Intl.DateTimeFormat("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    }).format(new Date(message.time))}
                  </p>
                </div>
              )
            )}
        </div>
        <div className="w-full h-16 px-4 pt-2">
          <div className="w-full h-14 flex items-center justify-center gap-5 bg-slate-950 rounded-full px-4 p-2">
            <button>
              <i className="bi bi-plus text-slate-400"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message"
              name="message"
              id="message"
              value={message}
              onChange={(e) => handleChange(e)}
              onKeyDown={(e) => handleEnter(e)}
              autoComplete="off"
              className="bg-slate-950 outline-none w-full text-white placeholder:text-slate-400 text-sm"
            />
            <button
              className="bg-slate-800 p-3 rounded-full w-12 h-12 aspect-square hover:bg-slate-700 active:bg-slate-600 transition"
              onClick={() => {
                sendMessage();
                sendReceiverMessage();
              }}
            >
              <i className="bi bi-send text-slate-400"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
