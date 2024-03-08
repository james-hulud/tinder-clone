import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import db, { auth } from "../firebase";
import { doc, updateDoc, collection, setDoc } from "firebase/firestore";
import { useAuth } from "../auth/AuthContext";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Avatar } from "@mui/material";

const AddAccountDetails = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const { user, isFetching, userId } = useAuth();

  const navigate = useNavigate();

  // Add name field, profile picture ref, interests?
  const handleAddDetails = () => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const imageRef = ref(storage, userId);
        if (image) {
          uploadBytes(imageRef, image) // maybe image as File, but does not make difference
            .then(() => {
              getDownloadURL(imageRef)
                .then((url: any) => {
                  setUrl(url);
                  // UPLOAD TO CLOUD FIRESTORE HERE
                  console.log("url here", url);
                  uploadDetails(userId, name, url);
                })
                .catch((error: any) => {
                  console.log(error.message, "error getting the image url");
                });
              setUrl("");
            })
            .catch((error: any) => {
              console.log(error.message, "error with uploading image");
            });
        }
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
  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const confirmDetails = (event: any) => {
    alert("Name set successfully!");
    navigate("/home");
  };

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
        <div className="flex items-center justify-center">
          <Avatar alt="user" src={url} sx={{ width: 200, height: 200 }} />
        </div>
        <div className="flex flex-col py-[5vh]">
          <input
            name="profile-image"
            type="file"
            onChange={handleImageChange}
            className="outline-none outline-black rounded-md"
          />
          <label htmlFor="formName">Profile image</label>
          <button type="button" onClick={handleAddDetails}>
            Submit
          </button>
        </div>
        <div className="flex pt-[2vh] justify-center">
          <button type="button" onClick={confirmDetails}>
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAccountDetails;
