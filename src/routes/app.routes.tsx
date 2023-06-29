import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { TabRoutes } from "./tab.routes";
import { TeamsPage } from "@screens/TeamsPage";

type AppRoutes = {
  tabs: undefined;
  teams: undefined;
};

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Screen, Navigator } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="tabs" component={TabRoutes} />
      <Screen name="teams" component={TeamsPage} />
    </Navigator>
  );
}
