import React from "react";
import Center from "../components/Center";
import { FlatList } from "react-native-gesture-handler";
import { Button } from "react-native";
import AddDream from "../components/AddDream";

interface FeedProps {}

const Feed: React.FC<FeedProps> = () => {
  return (
    <Center>
      <AddDream />
    </Center>
  );
};

export default Feed;
