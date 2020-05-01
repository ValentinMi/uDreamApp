import React, { useContext } from "react";
import { ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "./AuthProvider";
import Center from "./components/Center";
import AppTabs from "./components/AppTabs";
import AuthStack from "./AuthStack";
import { LoadingContext } from "./LoadingProvider";

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  const { user } = useContext(AuthContext);
  const { isLoading } = useContext(LoadingContext);

  if (isLoading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }
  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
