import {
  Avatar,
  Container,
  Info,
  ProfileButton,
  Subtitle,
  Title,
} from "./styles";

export function UserInfo() {
  return (
    <Container>
      <ProfileButton onPress={() => {}}>
        <Avatar
          source={{ uri: "http://github.com/marrcelosantana.png" }}
          resizeMode="cover"
        />
      </ProfileButton>

      <Info>
        <Title numberOfLines={1}>Olá, Marcelo!</Title>
        <Subtitle>Forme seus times aqui.</Subtitle>
      </Info>
    </Container>
  );
}
