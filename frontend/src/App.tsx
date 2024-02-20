import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chats from "./pages/Chats";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Account from "./pages/Account";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/chats" element={<Chats />} />
          <Route path="/home" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
