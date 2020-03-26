import React, { useContext } from "react";
import Center from "../components/Center";
import { Text, Button } from "react-native";
import { AuthContext } from "../AuthProvider";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <Center>
      <Text>Your logged in mister {user.username}</Text>
      <Button title="Log out" onPress={logout} />
    </Center>
  );
};

export default Home;
