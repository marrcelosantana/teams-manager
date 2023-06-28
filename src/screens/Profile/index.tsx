import { useTheme } from "styled-components";
import { SignOut } from "phosphor-react-native";

import { useAuth } from "@hooks/useAuth";

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
  const { user, signOut } = useAuth();
  const theme = useTheme();

  async function handleSignOut() {
    try {
      await signOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>Dados do Perfil</HeaderTitle>
      </Header>

      <Content>
        <ImageContainer>
          <UserImage source={{ uri: user.picture }} />
        </ImageContainer>
        <Info>
          <Username numberOfLines={1}>{user.name}</Username>
          <Email>{user.email}</Email>

          <SignOutButton onPress={handleSignOut}>
            <SignOut size={24} color={theme.COLORS.WHITE} weight="bold" />
            <TextButton>Sair</TextButton>
          </SignOutButton>
        </Info>
      </Content>
    </Container>
  );
}
