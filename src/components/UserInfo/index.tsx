import { useAuth } from "@hooks/useAuth";

import {
  Avatar,
  Container,
  Info,
  ProfileButton,
  Subtitle,
  Title,
} from "./styles";

export function UserInfo() {
  const { user } = useAuth();

  return (
    <Container>
      <ProfileButton>
        <Avatar source={{ uri: user.picture }} resizeMode="cover" />
      </ProfileButton>

      <Info>
        <Title numberOfLines={1}>Olá, {user.given_name}!</Title>
        <Subtitle>Forme seus times aqui.</Subtitle>
      </Info>
    </Container>
  );
}
