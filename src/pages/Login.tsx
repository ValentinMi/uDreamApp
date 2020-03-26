import React, { useContext } from "react";
import { Text, Button } from "react-native";
import Center from "../components/Center";
import { AuthNavProps } from "../AuthParamList";
import { AuthContext } from "../AuthProvider";

interface LoginProps {
  navigation: any;
}

const Login: React.FC<LoginProps> = ({ navigation }: AuthNavProps<"Login">) => {
  const { login } = useContext(AuthContext);
  return (
    <Center>
      <Text>Hello login</Text>
      <Button title="Log in" onPress={login} />
    </Center>
  );
};

export default Login;
