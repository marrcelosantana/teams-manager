import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { Button, Container, Subtitle, Title } from "./styles";

export function Home() {
  const navigator = useNavigation<AppNavigatorRoutesProps>();

  return (
    <Container>
      <Title>Home Page</Title>
      <Button onPress={() => navigator.goBack()}>
        <Subtitle>Go Back</Subtitle>
      </Button>
    </Container>
  );
}
