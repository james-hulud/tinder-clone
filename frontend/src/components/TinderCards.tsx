import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import db from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

interface Person {
  name: string;
  url: string;
}

const TinderCards = () => {
  // const people = []
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    // Reference to "people" collection in Firestore
    const collectionRef = collection(db, "users");

    // Sets up a real-time listener for changes in the "people" collection
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      // When a change occurs, updates the state with the new data
      
      const updatedPeople = snapshot.docs.filter((doc) => doc.id != "userid here")

      .map((doc) => doc.data() as Person);
      setPeople(updatedPeople);
    });
    // Cleanup function, detaches event listener when component is unmounted
    // Ensures that we clean up resources and avoid memory leaks
    return () => {
      unsubscribe();
    };
  }, []);
  // Code runs every time 'people' changes, when a new person gets added to 'people'

  // In REACT always use a key
  return (
    <div>
      <div className="flex justify-center mt-[5vh]">
        {people.map((person) => (
          <TinderCard
            key={person.name}
            preventSwipe={["up", "down"]}
            className="absolute"
          >
            {/* 1:22:05 mark for below className */}
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              // Edit w and h properties accordingly
              className="relative w-[60vh] max-w-[85vw] h-[65vh] p-5 object-contain rounded-[20px] bg-cover bg-center shadow-2xl"
            >
              <h3 className="font-bold absolute text-white bottom-3">
                {person.name}
              </h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
