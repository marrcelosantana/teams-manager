import { useState } from "react";
import { FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "@components/Input";
import { TeamDTO } from "@models/TeamDTO";
import { useMatch } from "@hooks/useMatch";

import { useToast } from "native-base";

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

type FormDataProps = {
  teams_quantity: string;
  players_per_team: string;
};

const createMatchSchema = yup.object({
  teams_quantity: yup
    .string()
    .required("Informe a quantidade de times.")
    .typeError("Informe um valor numérico."),
  players_per_team: yup
    .string()
    .required("Informe a quantidade de jogadores.")
    .typeError("Informe um valor numérico."),
});

export function SortPage() {
  const { players } = useMatch();

  const { control, handleSubmit, reset } = useForm<FormDataProps>({
    resolver: yupResolver(createMatchSchema),
  });

  const [teams, setTeams] = useState<TeamDTO[]>([]);

  const navigator = useNavigation<AppNavigatorRoutesProps>();
  const toast = useToast();

  async function handleCreateMatch({
    teams_quantity,
    players_per_team,
  }: FormDataProps) {
    try {
      const totalPlayers = players.length;
      const teamsQuantity = Number(teams_quantity);
      const playersPerTeam = Number(players_per_team);
      const totalTeams = teamsQuantity * playersPerTeam;

      const shuffledPlayers = [...players].sort(() => Math.random() - 0.5);
      const newTeams: TeamDTO[] = [];

      if (totalTeams > totalPlayers) {
        await toast.show({
          title: "Não é possível sortear os times!",
          description:
            "A quantidade de times é maior que a quantidade de jogadores.",
          placement: "top",
          background: "red.500",
          color: "gray.100",
        });

        return;
      }

      for (let i = 0; i < teamsQuantity; i++) {
        const teamPlayers = shuffledPlayers.splice(0, playersPerTeam);
        newTeams.push({ id: i + 1, players: teamPlayers });
        setTeams(newTeams);
      }

      reset();
      navigator.navigate("teams", { teams: teams });
    } catch (error) {
      await toast.show({
        title: "Não foi possível sortear os times!",
        placement: "top",
        background: "red.500",
        color: "gray.100",
      });
    }
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>Forme seus times</HeaderTitle>
      </Header>

      <Content>
        <Form>
          <Label>Quantos times?</Label>
          <Controller
            control={control}
            name="teams_quantity"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Quantidade de times..."
                keyboardType="numeric"
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Label style={{ marginTop: 16 }}>Quantos jogadores por time?</Label>

          <Controller
            control={control}
            name="players_per_team"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Quantidade de jogadores..."
                keyboardType="numeric"
                onChangeText={onChange}
                value={value}
              />
            )}
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
          <SortButton
            onPress={handleSubmit(handleCreateMatch)}
            isDisabled={players.length === 0}
          >
            <TextButton>Sortear times</TextButton>
          </SortButton>
        </Actions>
      </Content>
    </Container>
  );
}
