import React from "react";
import { Avatar } from "@mui/material";

interface chatProps {
  name: string;
  message?: string;
  profilePic?: string;
  timestamp?: string;
}

const Chat: React.FC<chatProps> = ({
  name,
  message,
  profilePic,
  timestamp,
}) => {
  return (
    // At 2:45:13
    <div>
      <Avatar className="" alt={name} src={profilePic} />
      <div>
        <h2>{name}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Chat;
