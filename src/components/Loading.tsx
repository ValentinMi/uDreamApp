import React from "react";
import Center from "./Center";
import { ActivityIndicator } from "react-native";

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
  return (
    <Center>
      <ActivityIndicator size="large" />
    </Center>
  );
};

export default Loading;
