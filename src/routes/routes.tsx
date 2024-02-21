import React from "react";
import { AuthRoutes } from "./authRoutes";
import { AppRoutes } from "./appRoutes";
import { useAuthContext } from "@src/contexts/authContext";

export const Routes: React.FC = () => {
  const { authState } = useAuthContext();

  return authState === "valido" ? <AppRoutes /> : <AuthRoutes />;
};
