import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "@src/screens/loginScreen";
import { RegisterScreen } from "@src/screens/registerScreen";

const Stack = createNativeStackNavigator();

export const AuthRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="loginScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="loginScreen" component={LoginScreen} />
        <Stack.Screen
          name="registerScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
