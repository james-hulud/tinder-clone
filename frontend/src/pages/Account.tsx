import React, { useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { Navigate, useNavigate } from "react-router-dom";

const Account = () => {

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        return <Navigate to="/" />;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Account page!</h1>

      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};

export default Account;
