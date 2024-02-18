import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Chats from "./pages/Chats";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/chats" element={<Chats />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
