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
    <div className="flex items-center justify-between p-10 h-70 border-b border-gray-100 text-xl">
      <Avatar alt={name} src={profilePic} sx={{ width: 80, height: 80 }} />
      <div className="flex-1 px-5">
        <strong>{name}</strong>
        <p className="opacity-30">{message}</p>
      </div>
      <p className="opacity-30">{timestamp}</p>
    </div>
  );
};

export default Chat;
