import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.scss";

const SidebarChat = ({ person }) => {
  return (
    <div className="sidebarChat">
      <Avatar src={person.img} />
      <div className="sidebarChat__info">
        <h2>{person.name}</h2>
        <p>{person.message}</p>
      </div>
    </div>
  );
};

export default SidebarChat;
