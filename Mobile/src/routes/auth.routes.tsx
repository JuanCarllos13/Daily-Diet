import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator initialRouteName="SignIn">
      <Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
