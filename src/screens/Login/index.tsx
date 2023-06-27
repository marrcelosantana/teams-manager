import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Button, Container, Subtitle, Title } from "./styles";

export function Login() {
  const navigator = useNavigation<AppNavigatorRoutesProps>();

  return (
    <Container>
      <Title>Login</Title>
      <Button
        onPress={() => {
          navigator.navigate("home");
        }}
      >
        <Subtitle>Go to Home</Subtitle>
      </Button>
    </Container>
  );
}
