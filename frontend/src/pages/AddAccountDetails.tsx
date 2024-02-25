import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register = ({ user }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Add name field, profile picture ref, interests?
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredentials: any) => {
        await addDoc(collection(db, "users"), {
          uid: userCredentials.user.uid,
          email: email,
          password: password,
          creationDate: Timestamp.fromDate(new Date()).toDate().toString(),
        });

        alert("Sign up successful.");
      })
      .catch((error) => {
        alert(error);
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
          <h1>Tell us about yourself!</h1>
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
          <button type="button" onClick={() => navigate("/")}>
            Sign in
          </button>
        </div>
        <div className="flex pt-[2vh] justify-center">
          <button type="button" onClick={handleSignUp}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
