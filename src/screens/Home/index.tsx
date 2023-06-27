import { FlatList } from "react-native";
import { useTheme } from "styled-components";

import { UserInfo } from "@components/UserInfo";
import { Input } from "@components/Input";
import { PlayerCard } from "@components/PlayerCard";

import { Plus, MoonStars } from "phosphor-react-native";

import {
  AddButton,
  Button,
  Container,
  Content,
  Form,
  Header,
  Info,
  Players,
  Title,
} from "./styles";

export function Home() {
  const players = [
    { id: "1", name: "Marcelo" },
    { id: "2", name: "Lucas Barbosa" },
    { id: "3", name: "Yago" },
    { id: "4", name: "Jean" },
    { id: "5", name: "Manel" },
    { id: "6", name: "Pedro Olimpio" },
    { id: "7", name: "PV" },
    { id: "8", name: "Junior" },
  ];

  const theme = useTheme();

  return (
    <Container>
      <Header>
        <UserInfo />
        <Button onPress={() => {}}>
          <MoonStars size={32} color={theme.COLORS.ORANGE} weight="bold" />
        </Button>
      </Header>

      <Content>
        <Form>
          <Input
            placeholder="Digite o nome do jogador..."
            width="83%"
            autoComplete="off"
          />
          <AddButton>
            <Plus size={24} color="white" weight="bold" />
          </AddButton>
        </Form>

        <Players>
          <Info>
            <Title>Lista de jogadores</Title>
            {players.length > 0 && <Title>{players.length}</Title>}
          </Info>

          <FlatList
            data={players}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <PlayerCard name={item.name} />}
            contentContainerStyle={{ paddingBottom: 24, paddingTop: 12 }}
            showsVerticalScrollIndicator={false}
          />
        </Players>
      </Content>
    </Container>
  );
}
