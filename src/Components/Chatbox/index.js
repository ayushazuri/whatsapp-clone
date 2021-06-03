import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import React, { useState, useRef, useEffect } from "react";
import "./index.scss";
import MicIcon from "@material-ui/icons/Mic";
// import SendIcon from "@material-ui/icons/Send";
import axios from "../../axios";

const Chatbox = ({ messages }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("/messages/new", {
      message: input,
      name: "Ayush",
      timestamp: "Just now",
      received: false,
    });

    setInput("");
  };

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3></h3>
          <p>Last seen at ..</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {messages.map((message, index) => {
          return (
            <p
              key={message.id || index}
              className={`chat__message ${
                message.received ? "" : "chat__reciever"
              }`}
            >
              <span className="chat__name">{message.name}</span>
              {message.message}
              <span className="chat__timestamp">{message.timestamp}</span>
            </p>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat__footer">
        <div>
          <IconButton>
            <InsertEmoticon />
          </IconButton>

          <IconButton>
            <AttachFile />
          </IconButton>
        </div>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Chatbox;
