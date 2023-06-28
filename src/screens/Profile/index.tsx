import { useTheme } from "styled-components";
import { SignOut } from "phosphor-react-native";

import {
  Container,
  Content,
  Header,
  ImageContainer,
  HeaderTitle,
  UserImage,
  Username,
  Info,
  Email,
  SignOutButton,
  TextButton,
} from "./styles";

export function Profile() {
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <HeaderTitle>Dados do Perfil</HeaderTitle>
      </Header>

      <Content>
        <ImageContainer>
          <UserImage
            source={{ uri: "http://github.com/marrcelosantana.png" }}
          />
        </ImageContainer>
        <Info>
          <Username numberOfLines={1}>Marcelo Santana Marques</Username>
          <Email>marcelo@email.com</Email>

          <SignOutButton>
            <SignOut size={24} color={theme.COLORS.WHITE} weight="bold" />
            <TextButton>Sair</TextButton>
          </SignOutButton>
        </Info>
      </Content>
    </Container>
  );
}
