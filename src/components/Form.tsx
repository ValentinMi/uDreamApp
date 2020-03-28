import React, { useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import colors from "../utils/colors";
import { FieldParamList } from "../types/FieldParamList";
import commons from "../utils/commons";
import CustomInput from "./CustomInput";
import useForm from "../hooks/useForm";

interface FormProps {
  fieldsList: Array<FieldParamList>;
  btnTitle: string;
  onSubmit: Function;
  validation: (form: object) => Promise<string | false>;
}

const Form: React.FC<FormProps> = ({
  fieldsList,
  validation,
  btnTitle,
  onSubmit
}) => {
  const [formValues, onChange] = useForm();
  const [error, setError] = useState<string | null>(null);

  const validateForm = async () => {
    let error = await validation(formValues);
    if (error) {
      setError(error);
    } else {
      const error = await onSubmit(formValues);
      if (error) {
        setError(error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      {fieldsList.map((field, idx) => (
        <View key={field.label + idx} style={styles.inputContainer}>
          <CustomInput
            name={field.name}
            value={formValues[field.label.toLowerCase()]}
            label={field.label}
            type={field.type}
            onChange={onChange}
          />
        </View>
      ))}
      {error && <Text style={styles.error}>{error}</Text>}
      <View style={styles.submitContainer}>
        <Button
          title={btnTitle}
          onPress={validateForm}
          color={colors.button}
          accessibilityLabel={btnTitle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: commons.frameBorderRadius
  },
  inputContainer: {
    marginVertical: 10
  },
  submitContainer: {
    marginTop: 10
  },
  error: {
    color: "red",
    fontWeight: "bold"
  }
});

export default Form;
