import React, { useState } from "react";
import "./index.scss";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "../SidebarChat";

const Index = () => {
  const [people, setPeople] = useState([
    {
      name: "Ayush Singh",
      message: "Hey, wassup. How are you",
      img: "https://ayushsingh11.web.app/static/media/profile.da917c0d.jpeg",
    },
    {
      name: "Mark Zuckerberg",
      message: "Hey, I am watching you 🙃🙃",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTsMrpBjxQX8uJCryNVI6Gvc_jPd6QtzDJF8C-p3RQmcu269bKd",
    },
    {
      name: "Modi",
      message: "Mitroooooon 👏👏",
      img: "https://cdn.narendramodi.in/cmsuploads/0.78956100_1622009899_1155-1-prime-minister-narendra-modi-participates-in-virtual-vesak-day-celebrations-on-buddha-purnima.jpg",
    },
  ]);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar
          className="sidebar__avatar"
          src="https://ayushsingh11.web.app/static/media/profile.da917c0d.jpeg"
        />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>

      <div className="sidebar__chats">
        {people.map((person, index) => {
          return <SidebarChat key={index} person={person} />;
        })}
      </div>
    </div>
  );
};

export default Index;
