import { useTheme } from "styled-components";
import { Trash } from "phosphor-react-native";
import { Button, Container, Title, Info } from "./styles";

interface Props {
  name: string;
}

export function PlayerCard({ name }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <Info>
        <Title numberOfLines={1}>{name}</Title>
      </Info>
      <Button>
        <Trash size={24} color={theme.COLORS.RED} />
      </Button>
    </Container>
  );
}
