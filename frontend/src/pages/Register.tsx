import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { database } from "../firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(database, email, password)
      .then((data) => {
        console.log(data, "authData");
        navigate("/Home");
        alert("Welcome to your home page!");
      })
      .catch(function (error) {
        alert("Error");
        console.log(error);
      });
  };

  let imgs = [
    "https://as2.ftcdn.net/v2/jpg/03/39/70/91/1000_F_339709132_H9HSSTtTmayePcbARkTSB2qoZTubJ6bR.jpg",
  ];

  return (
    <div className="flex flex-col justify-evenly m-0 h-[100vh] outline outline-red-500 items-center">
      <form onSubmit={(e) => handleRegister(e)}>
        <div className="flex flex-col justify-center items-center">
          <img
            className="object-contain h-20 pb-[2vh]"
            src="https://seeklogo.com/images/T/tinder-logo-FAAE852EC0-seeklogo.com.png"
            alt="tinder logo"
          />
          <h1>Register your Tinder account!</h1>
        </div>
        <div className="flex flex-col py-[5vh]">
          <input
            name="email"
            placeholder="Example@example.com"
            className="outline-none outline-black rounded-md"
          />
          <label htmlFor="formEmail">Email address</label>
        </div>
        <div className="flex flex-col">
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="outline-none outline-black rounded-md"
          />
          <label htmlFor="formPassword">Password</label>
        </div>
        <div className="flex pt-[2vh] justify-evenly">
          <div>
            <input type="checkbox" value="" id="formCheck" />
            <label htmlFor="formCheck">Remember me</label>
          </div>
          <button type="button" onClick={() => navigate("/")}>
            Sign in
          </button>
        </div>
        <div className="flex pt-[2vh] justify-center">
          <button>Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
