import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AuthContext } from "../context/AuthContext";

export function Routes() {
  const { user } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {user?.id ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
