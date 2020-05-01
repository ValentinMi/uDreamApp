import React from "react";
import { LineChart as Chart } from "react-native-chart-kit";
import { View, Dimensions } from "react-native";
import colors from "../utils/colors";

interface LineChartProps {
  labels: any[];
  data: any[];
}

const LineChart: React.FC<LineChartProps> = ({ labels, data }) => {
  return (
    <View>
      <Chart
        data={{
          labels,
          datasets: [
            {
              data
            }
          ]
        }}
        width={Dimensions.get("screen").width}
        height={220}
        chartConfig={{
          backgroundGradientFrom: "white",
          backgroundGradientTo: "white",
          decimalPlaces: 0,
          color: () => colors.button,
          labelColor: () => colors.primary,
          propsForLabels: {},

          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: colors.primary
          }
        }}
        bezier
      />
    </View>
  );
};

export default LineChart;
