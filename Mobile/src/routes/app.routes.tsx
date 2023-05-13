import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Details } from "@screens/Details";
import { DetailsSnacK } from "@screens/DetailsSnack";
import { Finish } from "@screens/Fininsh";
import { Home } from "@screens/Home";
import { NewSnack } from "@screens/NewSnack";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false,
        }}
      />

      <Screen
        name="NewSnack"
        component={NewSnack}
        options={{
          headerShown: false,
        }}
      />

      <Screen
        name="Finish"
        component={Finish}
        options={{
          headerShown: false,
        }}
      />

      <Screen
        name="DetailsSnacK"
        component={DetailsSnacK}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
