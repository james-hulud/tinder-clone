import TinderCards from "../components/TinderCards";
import SwipeButtons from "../components/SwipeButtons";
import Header from "../components/Header";
import { onAuthStateChanged } from "firebase/auth";
import { database } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);

  // Checks if user is logged in, if not navigates them to log in
  onAuthStateChanged(database, (user) => {
    if (user) {
      setAuth(!auth);
    } else {
      setAuth(auth);
      navigate("/");
    }
  });

  return (
    <div>
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
};

export default Home;
