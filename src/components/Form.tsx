import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import colors from "../utils/colors";
import { FieldParamList } from "../types/FieldParamList";
import commons from "../utils/commons";
import CustomInput from "./CustomInput";
import useForm from "../hooks/useForm";

interface FormProps {
  fieldsList: Array<FieldParamList>;
  onSubmit: Function;
  validation: object;
}

const Form: React.FC<FormProps> = ({ fieldsList, onSubmit, validation }) => {
  const [formValues, onChange] = useForm({ email: "", password: "" });
  return (
    <View style={styles.container}>
      {fieldsList.map((field, idx) => (
        <CustomInput
          name={field.label.toLowerCase()}
          value={formValues[field.label.toLowerCase()]}
          label={field.label}
          type={field.type}
          key={field.label + idx}
          onChange={onChange}
        />
      ))}
      <Button
        title="Log in"
        onPress={() => onSubmit(formValues)}
        color={colors.button}
        accessibilityLabel="Log in"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "50%",
    width: "80%",
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: commons.frameBorderRadius
  }
});

export default Form;
