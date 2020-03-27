import React from "react";
import { View } from "react-native";

interface CenterProps {
  style?: object;
}

const Center: React.FC<CenterProps> = ({ children, style }) => {
  return (
    <View
      style={Object.assign(
        {
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        style
      )}
    >
      {children}
    </View>
  );
};

export default Center;
