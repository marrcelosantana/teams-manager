import { Alert } from "react-native";

import { useToast } from "native-base";
import { useTheme } from "styled-components";

import { SoccerBall, Trash } from "phosphor-react-native";

import { PlayerDTO } from "src/models/PlayerDTO";
import { useMatch } from "@hooks/useMatch";

import { Button, Container, Title, Info } from "./styles";

interface Props {
  player: PlayerDTO;
}

export function PlayerCard({ player }: Props) {
  const { removePlayer } = useMatch();

  const theme = useTheme();
  const toast = useToast();

  async function onRemove() {
    try {
      await removePlayer(player.id);

      // await toast.show({
      //   title: `${player.name} saiu do racha! ❌`,
      //   placement: "top",
      //   background: theme.COLORS.ORANGE,
      //   color: "gray.100",
      // });
    } catch (error) {
      await toast.show({
        title: "Não foi possível remover o jogador!",
        placement: "top",
        background: "red.500",
        color: "gray.100",
      });
    }
  }

  async function handleRemovePlayer() {
    Alert.alert("Remover", `Deseja remover o jogador "${player.name}"?`, [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => onRemove() },
    ]);
  }

  return (
    <Container>
      <Info>
        <SoccerBall size={24} color={theme.COLORS.TITLE} />

        <Title numberOfLines={1}>{player.name}</Title>
      </Info>
      <Button onPress={handleRemovePlayer}>
        <Trash size={24} color={theme.COLORS.RED} />
      </Button>
    </Container>
  );
}
