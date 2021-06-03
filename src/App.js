import "./App.scss";
import Chatbox from "./Components/Chatbox";
import Sidebar from "./Components/Sidebar";
import React, { useState, useEffect } from "react";
import Pusher from "pusher-js";
import axios from "./axios";
function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);

  React.useEffect(() => {
    const pusher = new Pusher("dd7407fe728073ab80fe", {
      cluster: "ap2",
    });

    var channel = pusher.subscribe("messages");
    channel.bind("inserted", function (newMessage) {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <div className="App">
      <div className="app__body">
        <Sidebar />
        <Chatbox messages={messages} />
      </div>
    </div>
  );
}

export default App;
