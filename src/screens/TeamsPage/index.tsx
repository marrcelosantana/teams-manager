import { FlatList } from "react-native";

import { ArrowLeft } from "phosphor-react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { TeamCard } from "@components/TeamCard";
import { TeamDTO } from "@models/TeamDTO";

import { BackButton, Container, Content, Header, HeaderTitle } from "./styles";

type RouteParams = {
  teams: TeamDTO[];
};

export function TeamsPage() {
  const navigator = useNavigation();
  const route = useRoute();

  const { teams } = route.params as RouteParams;

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
        <FlatList
          data={teams}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <TeamCard teamName={String(item.id)} players={item.players} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 24, paddingTop: 2 }}
        />
      </Content>
    </Container>
  );
}
