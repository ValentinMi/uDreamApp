import React from "react";
import { Text } from "react-native";
import Center from "../components/Center";
import { AuthNavProps } from "../types/AuthParamList";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = ({
  navigation
}: AuthNavProps<"Register">) => {
  return (
    <Center>
      <Text>Hello register</Text>
    </Center>
  );
};

export default Register;
