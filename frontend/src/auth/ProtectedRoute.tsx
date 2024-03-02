import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";


const ProtectedRoute = ({ children }: any) => {
  const { user, isFetching } = useAuth();
  return user ? children : <Navigate to="/"></Navigate>;
};

export default ProtectedRoute;
