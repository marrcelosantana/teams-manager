import { FlatList, Keyboard, TouchableWithoutFeedback } from "react-native";

import { Input } from "@components/Input";
import { useMatch } from "@hooks/useMatch";

import {
  Actions,
  Container,
  Content,
  Form,
  Header,
  HeaderTitle,
  Label,
  MiniCard,
  Players,
  SortButton,
  TextButton,
  TextMiniCard,
} from "./styles";

export function SortPage() {
  const { players } = useMatch();

  return (
    <Container>
      <Header>
        <HeaderTitle>Forme seus times</HeaderTitle>
      </Header>

      <Content>
        <Form>
          <Label>Quantos times?</Label>
          <Input placeholder="Quantidade de times..." keyboardType="numeric" />

          <Label style={{ marginTop: 16 }}>Quantos jogadores por time?</Label>
          <Input
            placeholder="Quantidade de jogadores..."
            keyboardType="numeric"
          />
        </Form>

        <Label style={{ marginTop: 18, marginBottom: -10 }}>
          Jogadores adicionados:
        </Label>

        <Players>
          <FlatList
            data={players}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <MiniCard>
                <TextMiniCard numberOfLines={1}>
                  {index + 1}. {item.name}
                </TextMiniCard>
              </MiniCard>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 24, paddingTop: 2 }}
          />
        </Players>

        <Actions>
          <SortButton>
            <TextButton>Sortear times</TextButton>
          </SortButton>
        </Actions>
      </Content>
    </Container>
  );
}
