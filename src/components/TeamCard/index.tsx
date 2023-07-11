import { FlatList } from "react-native";
import { PlayerDTO } from "@models/PlayerDTO";
import { Container, Content, Header, HeaderTitle, Name } from "./styles";

interface Props {
  teamName: string;
  players: PlayerDTO[];
}

export function TeamCard({ teamName, players }: Props) {
  return (
    <Container>
      <Header>
        <HeaderTitle>Time {teamName}</HeaderTitle>
      </Header>

      <Content>
        <FlatList
          data={players}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <Name>
              {index + 1}. {item.name}
            </Name>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 24, paddingTop: 2 }}
        />
      </Content>
    </Container>
  );
}
