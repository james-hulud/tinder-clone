import axios from "axios";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useAuth } from "../auth/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, isFetching } = useAuth();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        alert("Log in successful.");
      })
      .catch((error) => {
        alert(error.code);
        console.log(error);
      });
  };

  const handleEmailChange = (event: any) => setEmail(event.target.value);
  const handlePasswordChange = (event: any) => setPassword(event.target.value);

  if (user) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="flex flex-col justify-evenly m-0 h-[100vh] outline outline-red-500 items-center">
      <form>
        <div className="flex flex-col justify-center items-center">
          <img
            className="object-contain h-20 pb-[2vh]"
            src="https://seeklogo.com/images/T/tinder-logo-FAAE852EC0-seeklogo.com.png"
            alt="tinder logo"
          />
          <h1>Login to your Tinder account!</h1>
        </div>
        <div className="flex flex-col py-[5vh]">
          <input
            name="email"
            type="text"
            placeholder="example@example.com"
            onChange={handleEmailChange}
            className="outline-none outline-black rounded-md"
          />
          <label htmlFor="formEmail">Email address</label>
        </div>
        <div className="flex flex-col">
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={handlePasswordChange}
            className="outline-none outline-black rounded-md"
          />
          <label htmlFor="formPassword">Password</label>
        </div>
        <div className="flex pt-[2vh] justify-evenly">
          <div>
            <input type="checkbox" value="" id="formCheck" />
            <label htmlFor="formCheck">Remember me</label>
          </div>
          <button type="button" onClick={() => navigate("/register")}>
            Register
          </button>
        </div>
        <div className="flex pt-[2vh] justify-center">
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
