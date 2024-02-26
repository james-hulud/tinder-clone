import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chats from "./pages/Chats";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Account from "./pages/Account";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "./firebase";
import ProtectedRoute from "./auth/ProtectedRoute";
import AddAccountDetails from "./pages/AddAccountDetails";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    // console.log("useEffect() running!");
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);
        return;
      }

      setUser(null);
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, []);

  if (isFetching) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/chats" element={<Chats />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute user={user}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account"
            element={
              <ProtectedRoute user={user}>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account-creation"
            element={
              <ProtectedRoute user={user}>
                <AddAccountDetails />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register user={user} />} />
          <Route path="/" element={<Login user={user} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
