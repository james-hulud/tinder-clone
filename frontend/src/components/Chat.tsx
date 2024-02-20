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
    // At 2:50:30
    <div className="flex items-center justify-between p-20">
      <Avatar className="" alt={name} src={profilePic} />
      <div className="" >
        <h2>{name}</h2>
        <p>{message}</p>
      </div>
      <p className="" >{timestamp}</p>
    </div>
  );
};

export default Chat;
