import React from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();
  const Router = useRouter();
  if (!user) {
    Router.push("/");
  } else {
    return children;
  }
};

export default ProtectedRoute;
