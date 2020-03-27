import React from "react";
import Center from "./Center";
import { FlatList } from "react-native-gesture-handler";
import faker from "faker";
import { Button } from "react-native";

interface FeedProps {}

const Feed: React.FC<FeedProps> = () => {
  return (
    <Center>
      <FlatList
        renderItem={({ item }) => {
          return <Button title={item} onPress={() => {}} />;
        }}
        keyExtractor={(product, idx) => product + idx}
        data={Array.from(Array(50), () => faker.commerce.product())}
      />
    </Center>
  );
};

export default Feed;
