import React from "react";
import Center from "../components/Center";
import { Text } from "react-native";

interface DiaryProps {}

const Diary: React.FC<DiaryProps> = () => {
  return (
    <Center>
      <Text>This is the diary</Text>
    </Center>
  );
};

export default Diary;
