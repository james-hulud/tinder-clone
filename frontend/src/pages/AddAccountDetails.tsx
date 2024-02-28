import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import db, { auth } from "../firebase";
import { doc, updateDoc, collection, setDoc } from "firebase/firestore";
import { error } from "console";

const AddAccountDetails = ({ user }: any) => {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  // Add name field, profile picture ref, interests?
  const handleAddDetails = () => {
    // createUserWithEmailAndPassword(auth, name, password)
    //   .then(async (userCredentials: any) => {
    //     await addDoc(collection(db, "users"), {
    //       uid: userCredentials.user.uid,
    //       name: name,
    //       password: password,
    //       creationDate: Timestamp.fromDate(new Date()).toDate().toString(),
    //     });

    //     alert("Sign up successful.");
    //   })
    //   .catch((error) => {
    //     alert(error);
    //     console.log(error);
    //   });

    // const userRef = doc(db, "users", "")

    // async (userCredentials: any) => {
    //   await updateDoc(db, "users", )

    // };

    // HAVE SET DOC ID TO USERID, SO JUST NEED TO GET DOC BY USERID, ADD NAME FIELD AND DONE, THEN PROFILE PICTURE
    const getUserId = new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve(user.uid);
        } else {
          reject("User not authenticated");
        }
        unsubscribe();
      });
    });

    const uploadDetails = async (uid: any, fullName: string) => {
      const userRef = doc(db, "users", uid);
      await updateDoc(userRef, { name: fullName });
      console.log("Value set!");
    };

    getUserId
      .then((uid) => {
        uploadDetails(uid, name);
        alert("Name set successfully!");
        navigate("/home");
        return;
      })
      .catch((error) => {
        alert("Error: " + error);
        navigate("/");
      });
  };

  const handleNameChange = (event: any) => setName(event.target.value);

  // COULD JUST ADD FIELD AS A PATH TO AN IMAGE FOR NOW, INSTEAD OF A FILE UPLOAD
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
