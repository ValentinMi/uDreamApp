import React from "react";
import Center from "../components/Center";
import { Text } from "react-native";

interface StatsProps {}

const Stats: React.FC<StatsProps> = () => {
  return (
    <Center>
      <Text>Hello Stats</Text>
    </Center>
  );
};

export default Stats;
