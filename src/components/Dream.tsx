import React, { useState } from "react";
import { Dream as DreamType } from "../types/DreamParamList";
import { View, StyleSheet, Text } from "react-native";
import colors from "../utils/colors";

interface DreamProps {
  dream: DreamType;
}

const Dream: React.FC<DreamProps> = ({ dream }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <View onTouchEnd={() => setIsActive(!isActive)} style={styles.container}>
      <Text style={styles.date}>{dream.creationDate}</Text>
      <Text style={styles.title}>{dream.title}</Text>
      <Text style={styles.note}>{dream.note}</Text>
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
    borderColor: "blue",
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: "5%",
    backgroundColor: colors.background,
    position: "relative",
    borderRadius: 10
  },
  date: {
    position: "absolute",
    top: 5,
    left: 3,
    backgroundColor: colors.primary,
    color: "#fff",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 3
  },
  title: {
    textAlign: "center",
    color: colors.subBackground,
    fontWeight: "bold",
    marginTop: 5
  },
  note: {
    position: "absolute",
    top: 5,
    right: 3,
    backgroundColor: "#FFC107",
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#fff",
    fontWeight: "bold"
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
