import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chats from "./pages/Chats";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Account from "./pages/Account";
import ProtectedRoute from "./auth/ProtectedRoute";
import AddAccountDetails from "./pages/AddAccountDetails";
import { AuthProvider } from "./auth/AuthContext";
import ChatScreen from "./pages/ChatScreen";
import Header from "./components/Header";

// Currently, is fetching is not working the same

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          {/* <Header /> */}
          <Routes>
            <Route
              path="/chats"
              element={
                <ProtectedRoute>
                  <Chats />
                </ProtectedRoute>
              }
            />
            <Route
              path="/chats/:person"
              element={
                <ProtectedRoute>
                  <ChatScreen />
                </ProtectedRoute>
              }
            />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route
              path="/account-creation"
              element={
                <ProtectedRoute>
                  <AddAccountDetails />
                </ProtectedRoute>
              }
            />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
