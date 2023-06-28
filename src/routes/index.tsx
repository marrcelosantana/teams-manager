import { View } from "react-native";
import { useTheme } from "styled-components";

import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "@hooks/useAuth";

import { TabRoutes } from "./tab.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { user } = useAuth();
  const theme = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.COLORS.BACKGROUND }}>
      <NavigationContainer>
        {user.id ? <TabRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </View>
  );
}
