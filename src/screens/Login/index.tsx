import { Platform } from "react-native";
import { useTheme } from "styled-components";

import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";

import { SoccerBall } from "phosphor-react-native";

import { SocialButton } from "@components/Social Button";

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
  const theme = useTheme();

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
          <SocialButton title="Entrar com Google" svg={GoogleSvg} />
          {Platform.OS === "ios" && (
            <SocialButton title="Entrar com Apple" svg={AppleSvg} />
          )}
        </Social>
      </Footer>
    </Container>
  );
}
