import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.scss";

const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar src="https://ayushsingh11.web.app/static/media/profile.da917c0d.jpeg" />
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>This is the message</p>
      </div>
    </div>
  );
};

export default SidebarChat;
