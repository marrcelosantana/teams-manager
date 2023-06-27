import { StatusBar } from "react-native";
import { useTheme } from "styled-components/native";
import { Spinner } from "native-base";
import { Container } from "./styles";

export function Loading() {
  const { COLORS } = useTheme();

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Spinner size="lg" color={COLORS.PURPLE} />
    </Container>
  );
}
