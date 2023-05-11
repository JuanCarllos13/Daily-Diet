import { NavigationContainer } from "@react-navigation/native";
import {} from "react-native";

import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
