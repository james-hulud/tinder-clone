import React, { useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { database } from "../firebase";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  //   const [auth, setAuth] = useState(false);

  const handleClick = () => {
    signOut(database)
      .then(() => {
        navigate("/");
        alert("Signed out!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Checks if user is logged in, if not navigates them to log in
  //   onAuthStateChanged(database, (user) => {
  //     if (user) {
  //       setAuth(true);
  //     } else {
  //       setAuth(false);
  //       navigate("/");
  //     }
  //   });

  return (
    <div>
      <h1>Account page!</h1>

      <button onClick={() => handleClick()}>Sign out</button>
    </div>
  );
};

export default Account;
