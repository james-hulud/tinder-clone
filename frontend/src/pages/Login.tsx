import axios from "axios";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { database } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const logInUser = (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (email.length === 0 || password.length === 0) {
      alert("Error: email or password field is empty.");
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          navigate("/home");
          alert("Logged in!");
        })
        .catch(function (error) {
          alert("Error");
          console.log(error);
        });
    }
  };

  let imgs = [
    "https://as1.ftcdn.net/v2/jpg/03/39/70/90/1000_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg",
  ];

  return (
    <div className="flex flex-col justify-evenly m-0 h-[100vh] outline outline-red-500 items-center">
      <form onSubmit={(e) => logInUser(e)}>
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
            placeholder="example@example.com"
            className="outline-none outline-black rounded-md"
          />
          <label htmlFor="formEmail">Email address</label>
        </div>
        <div className="flex flex-col">
          <input
            name="password"
            type="password"
            placeholder="password"
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
          <button>Sign in</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
