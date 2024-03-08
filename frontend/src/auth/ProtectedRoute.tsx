import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";


const ProtectedRoute = ({ children }: any) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/"></Navigate>;
};

export default ProtectedRoute;
