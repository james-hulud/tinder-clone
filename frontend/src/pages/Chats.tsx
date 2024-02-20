import React from "react";
import Header from "../components/Header";
import Chat from '../components/Chat'
import { collection, onSnapshot } from "firebase/firestore";

const Chats = () => {
  return (
    <div>
      <Header backButton="/" />
      <Chat name="Elon" message="Hey there!" profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/800px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg" timestamp="20 minutes ago" />
      <Chat name="Bill" message="Hello sonny." profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bill_Burr_by_Gage_Skidmore.jpg/800px-Bill_Burr_by_Gage_Skidmore.jpg" timestamp="1 hour ago" />
      <Chat name="Joe" message="Try DMT it'll change your life." profilePic="https://www.tubefilter.com/wp-content/uploads/2020/05/joe-rogan-podcast-spotify-1920x1131.jpg" timestamp="10 minutes ago" />
      <Chat name="James" message="I'm British." profilePic="https://content.api.news/v3/images/bin/eabb225c23e865cdfd9153d9a895c49d?width=1024" timestamp="1 second ago" />
    </div>
  );
};

export default Chats;
