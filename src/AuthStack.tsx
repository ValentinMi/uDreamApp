import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthParamList } from "./types/AuthParamList";
import { Text } from "react-native";
import colors from "./utils/colors";
import commons from "./utils/commons";

interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>();

const AuthStack: React.FC<AuthStackProps> = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{
          headerTitle: "- Sign in",
          headerRight: () => (
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 20,
                backgroundColor: colors.primary,
                padding: 10,
                borderRadius: commons.frameBorderRadius,
                marginRight: 10
              }}
            >
              uDream
            </Text>
          )
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          headerTitle: "- Sign up"
        }}
        name="Register"
        component={Register}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
