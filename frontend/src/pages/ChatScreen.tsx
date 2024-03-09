import { useState } from "react";
import Header from "../components/Header";

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      name: "Elon",
      image: "...",
      message: "Hey there ",
    },
  ]);

  return (
    <div>
      <Header />
      <h1>Chat screen</h1>
    </div>
  );
};

export default ChatScreen;
