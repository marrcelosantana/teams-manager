import { Platform } from "react-native";
import { useTheme } from "styled-components";

import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import { Home } from "@screens/Home";
import { SortPage } from "@screens/SortPage";
import { Profile } from "@screens/Profile";

import { House, SoccerBall, User } from "phosphor-react-native";

type TabRoutes = {
  home: undefined;
  sort: undefined;
  profile: undefined;
};

export type TabNavigatorRoutesProps = BottomTabNavigationProp<TabRoutes>;

const { Navigator, Screen } = createBottomTabNavigator();

export function TabRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.COLORS.PURPLE,
        tabBarInactiveTintColor: theme.COLORS.SHAPE,
        tabBarStyle: {
          backgroundColor: theme.COLORS.ORANGE,
          borderColor: theme.COLORS.TEXT,
          height: 50,
          width: "60%",
          borderRadius: 9999,
          marginBottom: 42,
          marginLeft: 75,
          position: "absolute",
          paddingTop: Platform.OS === "android" ? 2 : 30,
          borderTopWidth: 0,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <House size={24} color={color} weight="bold" />
          ),
        }}
      />
      <Screen
        name="sort"
        component={SortPage}
        options={{
          tabBarIcon: ({ color }) => (
            <SoccerBall size={24} color={color} weight="bold" />
          ),
        }}
      />

      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <User size={24} color={color} weight="bold" />
          ),
        }}
      />
    </Navigator>
  );
}
