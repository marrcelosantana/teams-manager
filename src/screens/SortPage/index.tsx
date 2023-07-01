import { FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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

type FormDataProps = {
  teams_quantity: string;
  players_by_team_quantity: string;
};

const createMatchSchema = yup.object({
  teams_quantity: yup
    .string()
    .required("Informe a quantidade de times.")
    .typeError("Informe um valor numérico."),
  players_by_team_quantity: yup
    .string()
    .required("Informe a quantidade de jogadores.")
    .typeError("Informe um valor numérico."),
});

export function SortPage() {
  const { players } = useMatch();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(createMatchSchema),
  });

  const navigator = useNavigation<AppNavigatorRoutesProps>();

  function handleCreateMatch({
    teams_quantity,
    players_by_team_quantity,
  }: FormDataProps) {
    console.log({ teams_quantity, players_by_team_quantity });
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
                // errorMessage={errors.teams_quantity?.message}
              />
            )}
          />

          <Label style={{ marginTop: 16 }}>Quantos jogadores por time?</Label>

          <Controller
            control={control}
            name="players_by_team_quantity"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Quantidade de jogadores..."
                keyboardType="numeric"
                onChangeText={onChange}
                value={value}
                // errorMessage={errors.players_by_team_quantity?.message}
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
