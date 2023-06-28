import { useCallback, useState } from "react";
import { FlatList } from "react-native";

import { View, useToast } from "native-base";
import { useTheme } from "styled-components";

import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import uuid from "react-native-uuid";
import { useFocusEffect } from "@react-navigation/native";

import { UserInfo } from "@components/UserInfo";
import { Input } from "@components/Input";
import { PlayerCard } from "@components/PlayerCard";
import { Loading } from "@components/Loading";

import { useMatch } from "@hooks/useMatch";
import { PlayerDTO } from "src/models/PlayerDTO";

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
  name: yup.string().trim().required("Informe o nome do jogador."),
});

export function Home() {
  const { players, fetchPlayers, registerPlayer } = useMatch();
  const [isLoading, setIsLoading] = useState(false);

  const theme = useTheme();
  const toast = useToast();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(registerSchema),
  });

  async function loadPlayers() {
    try {
      setIsLoading(true);
      await fetchPlayers();
    } catch (error) {
      await toast.show({
        title: "Não foi possível carregar os dados!",
        placement: "top",
        background: "red.500",
        color: "gray.100",
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function handleRegister({ name }: FormDataProps) {
    const newPlayer: PlayerDTO = {
      id: String(uuid.v4()),
      name,
    };

    try {
      await registerPlayer(newPlayer);
      reset();
      await toast.show({
        title: `Bem vindo ao racha, ${newPlayer.name}! ⚽︎`,
        placement: "top",
        background: "green.500",
        color: "gray.100",
      });
    } catch (error) {
      await toast.show({
        title: "Não foi possível registrar!",
        placement: "top",
        background: "red.500",
        color: "gray.100",
      });
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadPlayers();
    }, [])
  );

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
              <View style={{ width: "83%" }}>
                <Input
                  placeholder="Digite o nome do jogador..."
                  autoComplete="off"
                  autoCorrect={false}
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.name?.message}
                />
              </View>
            )}
          />

          <AddButton onPress={handleSubmit(handleRegister)}>
            <Plus size={24} color="white" weight="bold" />
          </AddButton>
        </Form>

        {!isLoading ? (
          <Players>
            <Info>
              <Title>Lista de jogadores</Title>
              {players.length > 0 && <Title>{players.length}</Title>}
            </Info>

            <FlatList
              data={players}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <PlayerCard player={item} />}
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
        ) : (
          <Loading />
        )}
      </Content>
    </Container>
  );
}
