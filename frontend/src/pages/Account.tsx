import React from "react";
import { signOut } from "firebase/auth";
import { database } from "../firebase";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    signOut(database)
      .then(() => navigate("/"))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Account page!</h1>

      <button onClick={() => handleClick()}>Sign out</button>
    </div>
  );
};

export default Account;
