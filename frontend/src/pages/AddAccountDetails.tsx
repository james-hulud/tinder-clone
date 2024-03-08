import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import db, { auth } from "../firebase";
import { doc, updateDoc, collection, setDoc } from "firebase/firestore";
import { useAuth } from "../auth/AuthContext";

const AddAccountDetails = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const { user, isFetching, userId } = useAuth();

  const navigate = useNavigate();

  // Add name field, profile picture ref, interests?
  const handleAddDetails = () => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        uploadDetails(userId, name, url);
        alert("Name set successfully!");
        navigate("/home");
      } else {
        alert("User not authenticated");
      }
      unsubscribe();
    });

    const uploadDetails = async (uid: any, fullName: string, url: string) => {
      const userRef = doc(db, "users", uid);
      await updateDoc(userRef, {
        name: fullName,
        url: url,
      });
    };
  };

  const handleNameChange = (event: any) => setName(event.target.value);
  const handleUrlChange = (event: any) => setUrl(event.target.value);

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
            name="name"
            type="text"
            placeholder="John Doe"
            onChange={handleNameChange}
            className="outline-none outline-black rounded-md"
          />
          <label htmlFor="formName">Full name</label>
        </div>
        <div className="flex flex-col py-[5vh]">
          <input
            name="url"
            type="text"
            placeholder="https://an/image/url.jpg"
            onChange={handleUrlChange}
            className="outline-none outline-black rounded-md"
          />
          <label htmlFor="formName">Profile picture url</label>
        </div>
        <div className="flex pt-[2vh] justify-center">
          <button type="button" onClick={handleAddDetails}>
            Finish!
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAccountDetails;
