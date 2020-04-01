import React, { useRef, useEffect, useState } from "react";
import { Text, View, StyleSheet, BackHandler } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import colors from "../utils/colors";

interface CustomInputProps {
  name: string;
  value: string;
  label: string;
  type: "select" | "input" | "password" | "email" | "textarea" | "keywords";
  onChange: (key: string, value: string | number) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  value,
  label,
  type,
  onChange
}) => {
  const inputRef = useRef<any>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleBackPress = () => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        if (inputRef.current.isFocused()) {
          inputRef.current.blur();
          setIsActive(false);
          return true;
        }
        return false;
      }
    );
    return () => backHandler.remove();
  };

  const handleActiveInput = () => {
    if (inputRef.current.isFocused()) {
      setIsActive(true);
    } else setIsActive(false);
  };

  useEffect(() => {
    handleActiveInput();
    handleBackPress();
  }, []);

  return (
    <View
      style={
        type !== "textarea"
          ? styles.inputContainer
          : textareaStyles.inputContainer
      }
    >
      <Text
        style={
          type !== "textarea"
            ? !isActive
              ? styles.label
              : { ...styles.label, backgroundColor: colors.button }
            : !isActive
            ? textareaStyles.label
            : { ...textareaStyles.label, backgroundColor: colors.button }
        }
      >
        {label}
      </Text>
      <TextInput
        value={value}
        ref={inputRef}
        style={type !== "textarea" ? styles.input : textareaStyles.input}
        textContentType={
          type === "email"
            ? "emailAddress"
            : type === "password"
            ? "password"
            : null
        }
        secureTextEntry={type === "password"}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        autoCapitalize={
          type === "email" || type === "password"
            ? "none"
            : type === "keywords"
            ? "words"
            : "sentences"
        }
        onChangeText={text => onChange(name, text)}
        multiline={type === "textarea"}
        textAlignVertical={type === "textarea" ? "top" : "auto"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    width: "100%"
  },
  label: {
    textAlign: "center",
    padding: 10,
    color: "#fff",
    width: "35%",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: colors.primary
  },
  input: {
    width: "65%",
    backgroundColor: colors.background,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    paddingLeft: 3
  },
  error: {
    color: "red",
    textAlign: "center",
    fontWeight: "bold"
  }
});

const textareaStyles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap"
  },
  label: {
    textAlign: "center",
    padding: 10,
    color: "#fff",
    width: "100%",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: colors.primary
  },
  input: {
    width: "100%",
    height: 100,
    backgroundColor: colors.background,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    paddingLeft: 3
  },
  error: {
    color: "red",
    textAlign: "center",
    fontWeight: "bold"
  }
});

export default CustomInput;
