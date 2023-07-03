import { FlatList } from "react-native";
import { Container, Content, Header, HeaderTitle, Name } from "./styles";

interface Props {
  teamName: string;
}

export function TeamCard({ teamName }: Props) {
  const players = [
    { id: "1", name: "Marcelo" },
    { id: "2", name: "Yago" },
    { id: "3", name: "Barbosa" },
    { id: "4", name: "Jaime" },
    { id: "5", name: "Davi" },
  ];

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
