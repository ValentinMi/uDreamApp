import React, { useState, useEffect, useCallback, useContext } from "react";
import { ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "./AuthProvider";
import { useAsyncStorage } from "./hooks/useAsyncStorage";
import { USER_ASYNC_STORAGE_KEY } from "./constants/users.constants";
import Center from "./components/Center";
import AppTabs from "./components/AppTabs";
import AuthStack from "./AuthStack";

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  const { user, login } = useContext(AuthContext);
  const { getStoredData } = useAsyncStorage(USER_ASYNC_STORAGE_KEY);

  const [isLoading, setIsLoading] = useState(false);

  const isUserLogged = useCallback(async () => {
    try {
      const user = await getStoredData();
      if (user) {
        login();
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    // Check if user is logged
    isUserLogged();
  }, [isUserLogged]);

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
