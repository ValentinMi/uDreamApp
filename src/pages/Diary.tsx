import React from "react";
import Dream from "../components/Dream";
import { FlatList } from "react-native-gesture-handler";
import { View } from "react-native";

interface DiaryProps {}

const mockDreams = new Array(10).fill({
  title: "Fake title for my dream",
  creationDate: new Date().toLocaleDateString(),
  note: 2,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facere quas veniam assumenda quod soluta ad! Assumenda voluptatem molestias repudiandae, perferendis tempore nulla sapiente quo praesentium quae, est consequatur dicta.",
  author: {
    name: "Me"
  },
  keywords: ["Keyword1", "Keyword2"]
});

const Diary: React.FC<DiaryProps> = () => {
  return (
    <View style={{ marginTop: 30 }}>
      <FlatList
        renderItem={({ item }) => {
          return <Dream dream={item} />;
        }}
        keyExtractor={(dream, idx) => dream.title + idx}
        data={mockDreams}
      />
    </View>
  );
};

export default Diary;
