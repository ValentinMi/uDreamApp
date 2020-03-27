import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { AppParamList } from "../types/AppParamList";
import Diary from "../pages/Diary";
import Stats from "../pages/Stats";
import HomeStack from "../HomeStack";

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

const AppTabs: React.FC<AppTabsProps> = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (true) {
            case route.name === "Home":
              iconName = "home";
              break;
            case route.name === "Diary":
              iconName = "book";
              break;
            case route.name === "Stats":
              iconName = "linechart";
            default:
              break;
          }

          // You can return any component that you like here!
          return <AntDesign name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray"
      }}
    >
      <Tabs.Screen name="Stats" component={Stats} />
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Diary" component={Diary} />
    </Tabs.Navigator>
  );
};

export default AppTabs;
