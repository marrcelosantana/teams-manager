import { Platform } from "react-native";
import { useTheme } from "styled-components";

import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";

import { SoccerBall } from "phosphor-react-native";
import { SocialButton } from "@components/SocialButton";

import { useAuth } from "@hooks/useAuth";

import {
  Container,
  Footer,
  Social,
  Subtitle,
  SuperTitle,
  Title,
  TitleContainer,
} from "./styles";

export function Login() {
  const { signInWithGoogle, signInWithApple } = useAuth();

  const theme = useTheme();

  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignInWithApple() {
    try {
      await signInWithApple();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <TitleContainer>
        <SoccerBall size={80} color={theme.COLORS.ORANGE} />
        <SuperTitle>Teams Manager</SuperTitle>
        <Title>
          Forme sua partida {"\n"}de futebol de maneira {"\n"}muito simples!
        </Title>
        <Subtitle>Faça seu login com {"\n"} uma das contas abaixo</Subtitle>
      </TitleContainer>

      <Footer>
        <Social>
          <SocialButton
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={handleSignInWithGoogle}
          />
          {Platform.OS === "ios" && (
            <SocialButton
              title="Entrar com Apple"
              svg={AppleSvg}
              onPress={handleSignInWithApple}
            />
          )}
        </Social>
      </Footer>
    </Container>
  );
}
