import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StatsDreams from "./pages/StatsDreams";

interface StatsStackProps {}

const Stack = createStackNavigator();

const StatsStack: React.FC<StatsStackProps> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dreams Statistics" component={StatsDreams} />
      <Stack.Screen name="Keywords Statistics" component={StatsDreams} />
    </Stack.Navigator>
  );
};

export default StatsStack;
