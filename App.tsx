import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "@themes/default-theme";
import { darkTheme } from "@themes/dark-theme";

import { Loading } from "@components/Loading";
import { Routes } from "@routes/index";

import { MatchContextProvider } from "@contexts/MatchContext";
import { AuthContextProvider } from "@contexts/AuthContext";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

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
        <AuthContextProvider>
          <MatchContextProvider>
            {fontsLoaded ? <Routes /> : <Loading />}
          </MatchContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
