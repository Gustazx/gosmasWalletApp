import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { TabRoutes } from "./tabRoutes";
import { ProfileScreen } from "@src/screens/profileScreen";

const Stack = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="tab"
          component={TabRoutes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="profileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
