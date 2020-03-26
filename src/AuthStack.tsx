import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthParamList } from "./AuthParamList";

interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>();

const AuthStack: React.FC<AuthStackProps> = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ header: () => null }}
    >
      <Stack.Screen
        options={{
          headerTitle: "Sign in"
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          headerTitle: "Sign up"
        }}
        name="Register"
        component={Register}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
