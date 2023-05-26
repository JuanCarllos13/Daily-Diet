import { StatusBar, ActivityIndicator } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { AuthContextProvider } from "./src/context/AuthContext";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import Theme from "@theme/index";
import { Routes } from "@routes/index";

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ThemeProvider theme={Theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </ThemeProvider>
  );
}
