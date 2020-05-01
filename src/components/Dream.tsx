import React, { useState } from "react";
import { Dream as DreamType } from "../types/DreamParamList";
import { View, StyleSheet, Text } from "react-native";
import colors from "../utils/colors";

interface DreamProps {
  dream: DreamType;
}

const Dream: React.FC<DreamProps> = ({ dream }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const date = new Date(dream.creationDate);
  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  return (
    <View onTouchEnd={() => setIsActive(!isActive)} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>{formattedDate}</Text>
        <Text style={styles.title}>{dream.title}</Text>
        <View style={styles.noteContainer}>
          <Text style={styles.note}>{dream.note}</Text>
        </View>
      </View>
      {isActive && (
        <>
          <Text style={styles.text}>{dream.description}</Text>
          <Text style={styles.author}>{dream.author.name}</Text>
        </>
      )}
      <View
        style={
          isActive
            ? styles.keywordsList
            : { ...styles.keywordsList, marginTop: 10 }
        }
      >
        {dream.keywords.map((keyword: string, idx: number) => (
          <Text key={keyword + idx} style={styles.keyword}>
            {keyword}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    marginVertical: 10,
    marginHorizontal: "5%",
    backgroundColor: colors.background,
    position: "relative"
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: colors.primary,
    padding: 3
  },
  date: {
    width: "33%",
    color: "#fff",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 3
  },
  title: {
    width: "33%",
    color: "white",
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center"
  },
  noteContainer: {
    width: "33%",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  note: {
    backgroundColor: "#FFC107",
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#fff",
    fontWeight: "bold",
    width: 30
  },
  author: {
    textAlign: "right",
    marginRight: 10,
    color: "#fff",
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  text: {
    textAlign: "center",
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: colors.subBackground,
    color: "#fff",
    borderRadius: 10,
    padding: 5
  },
  keywordsList: {
    flexDirection: "row",
    width: "100%"
  },
  keyword: {
    backgroundColor: colors.button,
    color: "#fff",
    fontWeight: "bold",
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 5,
    borderRadius: 10
  }
});

export default Dream;
