import { FlatList } from "react-native";
import { useTheme } from "styled-components";

import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { UserInfo } from "@components/UserInfo";
import { Input } from "@components/Input";
import { PlayerCard } from "@components/PlayerCard";

import { Plus, MoonStars, SoccerBall } from "phosphor-react-native";

import {
  AddButton,
  Button,
  Container,
  Content,
  EmptyContent,
  EmptyTitle,
  Form,
  Header,
  Info,
  Players,
  Title,
} from "./styles";

type FormDataProps = {
  name: string;
};

const registerSchema = yup.object({
  name: yup.string().trim().required("Informe o nome."),
});

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
    { id: "9", name: "Dirlandia" },
    { id: "10", name: "Davi" },
  ];

  const theme = useTheme();

  const { control, handleSubmit, reset } = useForm<FormDataProps>({
    resolver: yupResolver(registerSchema),
  });

  function handleRegister({ name }: FormDataProps) {
    console.log(name);
    reset();
  }

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
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Digite o nome do jogador..."
                width="83%"
                autoComplete="off"
                autoCorrect={false}
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <AddButton onPress={handleSubmit(handleRegister)}>
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
            ListEmptyComponent={() => (
              <EmptyContent>
                <SoccerBall size={48} color={theme.COLORS.TEXT} />
                <EmptyTitle>Sem jogadores ainda!</EmptyTitle>
              </EmptyContent>
            )}
          />
        </Players>
      </Content>
    </Container>
  );
}
