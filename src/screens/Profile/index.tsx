import { useState } from "react";

import { useTheme } from "styled-components";

import { useAuth } from "@hooks/useAuth";
import { Loading } from "@components/Loading";

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
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();

  async function handleSignOut() {
    try {
      setIsLoading(true);
      await signOut();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>Dados do Perfil</HeaderTitle>
      </Header>

      {!isLoading ? (
        <Content>
          <ImageContainer>
            <UserImage source={{ uri: user.picture }} />
          </ImageContainer>
          <Info>
            <Username numberOfLines={1}>{user.name}</Username>
            <Email>{user.email}</Email>

            <SignOutButton onPress={handleSignOut} isLoading={isLoading}>
              <TextButton>Sair</TextButton>
            </SignOutButton>
          </Info>
        </Content>
      ) : (
        <Loading />
      )}
    </Container>
  );
}
