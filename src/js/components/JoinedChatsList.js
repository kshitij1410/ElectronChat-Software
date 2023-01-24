import React from "react";
import ChatSearch from "./ChatSearch";
import { useNavigate } from "react-router-dom";

export default function JoinedChats({ chats }) {
  const navigate = useNavigate();
  return (
    <div className="list-container">
      <ChatSearch />
      <ul className="items">
        {chats.map((chats) => {
          return (
            <li
              onClick={() => {
                navigate(`/chat/${chats.id}`);
              }}
              className="item"
              key={chats.id}
            >
              <div className="item-status">
                <img src={chats.image} alt="Retail Admin" />
                <span className="status online"></span>
              </div>
              <p className="name-time">
                <span className="name mr-2">{chats.name}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
