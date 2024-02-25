import TinderCards from "../components/TinderCards";
import SwipeButtons from "../components/SwipeButtons";
import Header from "../components/Header";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  // Checks if user is logged in, if not navigates them to log in

  return (
    <div>
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
};

export default Home;
