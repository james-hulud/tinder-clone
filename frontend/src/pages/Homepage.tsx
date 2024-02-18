import React from "react";
import TinderCards from "../components/TinderCards";
import SwipeButtons from "../components/SwipeButtons";
import Header from "../components/Header";

const Homepage = () => {
  return (
    <div>
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
};

export default Homepage;
