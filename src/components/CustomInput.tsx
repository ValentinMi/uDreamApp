import React, { useRef, useEffect, useState } from "react";
import { Text, View, StyleSheet, BackHandler } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import colors from "../utils/colors";

interface CustomInputProps {
  name: string;
  value: string;
  label: string;
  type: "select" | "input" | "password" | "email";
  onChange: (key: string, value: string | number) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  value,
  label,
  type,
  onChange
}) => {
  const inputRef = useRef(null);
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
    <View style={styles.inputContainer}>
      <Text style={isActive ? styles.activeLabel : styles.label}>{label}</Text>
      <TextInput
        value={value}
        ref={inputRef}
        style={styles.input}
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
        autoCapitalize={type !== "email" ? "none" : null}
        onChangeText={text => onChange(name, text)}
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
  activeLabel: {
    textAlign: "center",
    padding: 10,
    color: "#fff",
    width: "35%",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: colors.button
  }
});

export default CustomInput;
