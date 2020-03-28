import React from "react";
import Center from "../components/Center";
import { AuthNavProps } from "../types/AuthParamList";
import Form from "../components/Form";
import { FieldParamList } from "../types/FieldParamList";
import { View, Button } from "react-native";
import colors from "../utils/colors";
import { validateRegisterForm } from "../handlers/validation";
import { postUser } from "../api/users.api";
import { NavigationContainer } from "@react-navigation/native";

interface RegisterProps {
  navigation: any;
}

const registerFields: Array<FieldParamList> = [
  { label: "Username", type: "input", name: "username" },
  { label: "Firstname", type: "input", name: "firstname" },
  { label: "Lastname", type: "input", name: "lastname" },
  { label: "Email", type: "email", name: "email" },
  { label: "Password", type: "password", name: "password" },
  {
    label: "Passord confirmation",
    type: "password",
    name: "passwordConfirmation"
  }
];

const Register: React.FC<RegisterProps> = ({
  navigation
}: AuthNavProps<"Register">) => {
  const handleSignUp = async (user: any) => {
    const res = await postUser(user);
    if (res) {
      navigation.navigate("Login");
    }
  };

  return (
    <Center style={{ backgroundColor: colors.background }}>
      <Form
        fieldsList={registerFields}
        btnTitle="Sign up"
        onSubmit={handleSignUp}
        validation={validateRegisterForm}
      />
      <View style={{ marginTop: 20 }}>
        <Button
          color={colors.button}
          title="or sign in"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </Center>
  );
};

export default Register;
