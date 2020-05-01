import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import colors from "../utils/colors";

interface DateInputProps {
  value: Date;
  onChange?: any;
}

const DateInput: React.FC<DateInputProps> = ({ value, onChange }) => {
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  return (
    <>
      <View
        style={styles.inputContainer}
        onTouchStart={() => setShowDatePicker(true)}
      >
        <Text style={styles.label}>Date</Text>
        <View style={styles.input}>
          <Text>
            {value !== undefined
              ? value.toLocaleDateString()
              : new Date().toLocaleDateString()}
          </Text>
        </View>
      </View>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={value || new Date()}
          mode={"date"}
          is24Hour={true}
          display="default"
          onChange={(event, selectedDate) => {
            setDate(selectedDate);
            onChange("date", selectedDate || date);
            setShowDatePicker(false);
          }}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    width: "100%",
  },
  label: {
    textAlign: "center",
    padding: 10,
    color: "#fff",
    width: "35%",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: colors.primary,
  },
  input: {
    flexDirection: "row",
    width: "65%",
    backgroundColor: colors.background,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    paddingLeft: 3,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default DateInput;
