import React, { useState, useEffect, useContext } from "react";
import Dream from "../components/Dream";
import { FlatList } from "react-native-gesture-handler";
import { View } from "react-native";
import { getUserDreams } from "../api/dreams.api";
import { AuthContext } from "../AuthProvider";
import Loading from "../components/Loading";

interface DiaryProps {}

const Diary: React.FC<DiaryProps> = () => {
  const { user } = useContext(AuthContext);
  const [dreams, setDreams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserDreams = async () => {
    const data = await getUserDreams(user._id);
    setDreams(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUserDreams();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <View style={{ marginTop: 30 }}>
          <FlatList
            keyExtractor={(dream, idx) => dream.title + idx}
            data={dreams}
            renderItem={({ item }) => {
              return <Dream dream={item} />;
            }}
          />
        </View>
      )}
    </>
  );
};

export default Diary;
