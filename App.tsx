import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "@themes/default-theme";
import { Loading } from "@components/Loading";
import { Routes } from "@routes/index";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { MatchContextProvider } from "@contexts/MatchContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  return (
    <NativeBaseProvider>
      <ThemeProvider theme={defaultTheme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <MatchContextProvider>
          {fontsLoaded ? <Routes /> : <Loading />}
        </MatchContextProvider>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
