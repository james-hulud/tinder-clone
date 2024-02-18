import React from "react";
import Header from "../components/Header";
import Chat from '../components/Chat'

const Chats = () => {
  return (
    <div>
      <Header backButton="/" />
      <Chat name="Elon" />
      <Chat name="Ellen" />
      <Chat name="Joe" />
      <Chat name="James" />
    </div>
  );
};

export default Chats;
