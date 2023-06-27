import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { TabRoutes } from "./tab.routes";

export function Routes() {
  const theme = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.COLORS.BACKGROUND }}>
      <NavigationContainer>
        <TabRoutes />
      </NavigationContainer>
    </View>
  );
}
