import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AuthNavProps } from "../types/AuthParamList";
import { AuthContext } from "../AuthProvider";
import Form from "../components/Form";
import colors from "../utils/colors";
import Center from "../components/Center";
import { FieldParamList } from "../types/FieldParamList";
import { authUser } from "../api/auth.api";

interface LoginProps {
  navigation: any;
}

const loginFields: Array<FieldParamList> = [
  { label: "Email", type: "input" },
  { label: "Password", type: "password" }
];

const Login: React.FC<LoginProps> = ({ navigation }: AuthNavProps<"Login">) => {
  const { login } = useContext(AuthContext);
  return (
    <Center style={{ backgroundColor: colors.background }}>
      <Form fieldsList={loginFields} onSubmit={authUser} validation={{}} />
    </Center>
  );
};

const styles = StyleSheet.create({});

export default Login;
