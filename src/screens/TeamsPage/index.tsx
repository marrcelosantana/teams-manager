import { ArrowLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

import { TeamCard } from "@components/TeamCard";

import { BackButton, Container, Content, Header, HeaderTitle } from "./styles";

export function TeamsPage() {
  const navigator = useNavigation();

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigator.goBack()}>
          <ArrowLeft size={24} color="#fff" weight="bold" />
        </BackButton>
        <HeaderTitle>Times Formados</HeaderTitle>
        <BackButton />
      </Header>
      <Content>
        <TeamCard teamName="1" />
        <TeamCard teamName="2" />
        <TeamCard teamName="3" />
      </Content>
    </Container>
  );
}
