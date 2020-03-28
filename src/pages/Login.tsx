import React, { useContext, useEffect } from "react";
import { Button, View } from "react-native";
import { AuthNavProps } from "../types/AuthParamList";
import { AuthContext } from "../AuthProvider";
import { FieldParamList } from "../types/FieldParamList";
import { useAsyncStorage } from "../hooks/useAsyncStorage";
import { USER_ASYNC_STORAGE_KEY } from "../constants/users.constants";
import Form from "../components/Form";
import colors from "../utils/colors";
import Center from "../components/Center";
import { validateLoginForm } from "../handlers/validation";

interface LoginProps {
  navigation: any;
}

const loginFields: Array<FieldParamList> = [
  { label: "Email", type: "email", name: "email" },
  { label: "Password", type: "password", name: "password" }
];

const Login: React.FC<LoginProps> = ({ navigation }: AuthNavProps<"Login">) => {
  const { login, loginWithJwt } = useContext(AuthContext);
  const { getStoredData } = useAsyncStorage(USER_ASYNC_STORAGE_KEY);

  const connectWithJwt = async () => {
    const jwt = await getStoredData();
    if (typeof jwt !== "string") return;
    loginWithJwt(jwt);
  };

  useEffect(() => {
    connectWithJwt();
  }, []);

  return (
    <Center style={{ backgroundColor: colors.background }}>
      <Form
        fieldsList={loginFields}
        btnTitle="Sign in"
        onSubmit={login}
        validation={validateLoginForm}
      />
      <View style={{ marginTop: 20 }}>
        <Button
          color={colors.button}
          title="or sign up"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </Center>
  );
};

export default Login;
