import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppParamList } from "../AppParamList";
import Home from "../pages/Home";
import Diary from "../pages/Diary";

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

const AppTabs: React.FC<AppTabsProps> = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Diary" component={Diary} />
    </Tabs.Navigator>
  );
};

export default AppTabs;
